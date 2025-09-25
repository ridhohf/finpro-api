import { PrismaClient } from '../generated/prisma';
import { AppError } from '../utils/app.error';
import userService from './user.service';
import emailService from './email.service';
import tokenService from './token.service';
import verificationService from './verification.service';
import cloudinaryService from './cloudinary.service';
import logger from '../utils/logger';

const prisma = new PrismaClient();

class ProfileService {
  async getProfile(userId: number) {
    const user = await userService.findById(userId);
    
    if (!user) {
      throw new AppError('User not found', 404);
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
      isVerified: user.isVerified,
      tenantProfile: user.tenantProfile,
      createdAt: user.createdAt,
    };
  }

  async updateProfile(userId: number, updateData: any) {
    const { name, companyName, phone, address } = updateData;
    
    // Update user basic info
    const updatedUser = await userService.updateUser(userId, {
      name,
    });

    // Update tenant profile if exists
    if (updatedUser.tenantProfile && (companyName || phone || address)) {
      await prisma.tenantProfile.update({
        where: { userId },
        data: {
          ...(companyName && { companyName }),
          ...(phone && { phone }),
          ...(address && { address }),
        }
      });
    }

    return this.getProfile(userId);
  }

  async updatePassword(userId: number, currentPassword: string, newPassword: string) {
    const user = await userService.findById(userId);
    
    if (!user || !user.password) {
      throw new AppError('User not found or password not set', 404);
    }

    // Verify current password
    const isCurrentPasswordValid = await userService.verifyPassword(currentPassword, user.password);
    if (!isCurrentPasswordValid) {
      throw new AppError('Current password is incorrect', 400);
    }

    // Hash and update new password
    const hashedNewPassword = await userService.hashPassword(newPassword);
    await userService.updateUser(userId, { password: hashedNewPassword });

    logger.info(`Password updated for user ID: ${userId}`);
  }

  async updateAvatar(userId: number, file: Express.Multer.File) {
    // Upload to Cloudinary
    const uploadResult = await cloudinaryService.uploadImage(file);
    
    // Update user avatar
    const updatedUser = await userService.updateUser(userId, {
      avatar: uploadResult.secure_url,
    });

    logger.info(`Avatar updated for user ID: ${userId}`);
    
    return updatedUser;
  }

  async updateEmail(userId: number, newEmail: string) {
    // Check if email is already taken
    const existingUser = await userService.findByEmail(newEmail);
    if (existingUser && existingUser.id !== userId) {
      throw new AppError('Email is already taken', 409);
    }

    const user = await userService.findById(userId);
    if (!user) {
      throw new AppError('User not found', 404);
    }

    // Update email and set as unverified
    await userService.updateUser(userId, {
      email: newEmail,
      isVerified: false,
    });

    // Generate and send new verification token
    const verificationToken = tokenService.generateVerificationToken();
    await verificationService.createVerification(userId, verificationToken);
    await emailService.sendVerificationEmail(newEmail, verificationToken, user.name);

    logger.info(`Email update requested for user ID: ${userId} to ${newEmail}`);

    return {
      message: 'Email updated. Please check your new email to verify the change.',
    };
  }
}

export default new ProfileService();