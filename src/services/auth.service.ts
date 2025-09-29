import prisma from "../utils/prisma";
import { AppError } from "../utils/app.error";
import { HashUtil } from "../utils/hash.util";
import { TokenUtil } from "../utils/token.util";
import { EmailUtil } from "../utils/email.util";
import { JwtUtil } from "../utils/jwt.util";
import { CloudinaryUtil } from "../utils/cloudinary.util";

interface RegisterDTO {
  name: string;
  email: string;
  role: string;
  companyName?: string;
  phone?: string;
  address?: string;
}

interface SocialLoginDTO {
  provider: string;
  providerId: string;
  email: string;
  name: string;
  role: string;
  avatar?: string;
}

interface VerifyEmailDTO {
  token: string;
  password: string;
}

interface LoginDTO {
  email: string;
  password: string;
}

interface UpdateProfileDTO {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  companyName?: string;
}

export class AuthService {
  async register(data: RegisterDTO) {
    // Check if email already exists
    const existingUser = await prisma.users.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new AppError("Email already registered", 400);
    }

    // Create user
    const user = await prisma.users.create({
      data: {
        name: data.name,
        email: data.email,
        role: data.role,
        isVerified: false,
      },
    });

    // Create tenant profile if role is tenant
    if (data.role === "tenant") {
      await prisma.tenantProfile.create({
        data: {
          userId: user.id,
          companyName: data.companyName!,
          phone: data.phone,
          address: data.address,
        },
      });
    }

    // Generate verification token
    const token = TokenUtil.generate();
    const expiresAt = TokenUtil.getExpiry(1); // 1 hour

    await prisma.emailVerifications.create({
      data: {
        userId: user.id,
        token,
        expiresAt,
      },
    });

    // Send verification email
    await EmailUtil.send({
      to: user.email,
      subject: "Verify Your Email",
      html: EmailUtil.generateVerificationEmail(user.name, token),
    });

    return {
      message:
        "Registration successful. Please check your email to verify your account.",
    };
  }

  async socialLogin(data: SocialLoginDTO) {
    // Check if social login exists
    const socialLogin = await prisma.socialLogins.findUnique({
      where: {
        provider_providerId: {
          provider: data.provider,
          providerId: data.providerId,
        },
      },
      include: {
        user: {
          include: {
            tenantProfile: true,
          },
        },
      },
    });

    let user;

    if (socialLogin) {
      user = socialLogin.user;
    } else {
      // Check if email already exists
      const existingUser = await prisma.users.findUnique({
        where: { email: data.email },
      });

      if (existingUser && !existingUser.provider) {
        throw new AppError(
          "Email already registered with password. Please login with password.",
          400
        );
      }

      // Create new user
      user = await prisma.users.create({
        data: {
          name: data.name,
          email: data.email,
          role: data.role,
          provider: data.provider,
          providerId: data.providerId,
          isVerified: true,
          avatar: data.avatar,
        },
      });

      // Create social login entry
      await prisma.socialLogins.create({
        data: {
          userId: user.id,
          provider: data.provider,
          providerId: data.providerId,
        },
      });

      // Create tenant profile if needed
      if (data.role === "tenant") {
        await prisma.tenantProfile.create({
          data: {
            userId: user.id,
            companyName: data.name,
          },
        });
      }
    }

    // Generate JWT
    const token = JwtUtil.generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        isVerified: user.isVerified,
      },
    };
  }

  async verifyEmail(data: VerifyEmailDTO) {
    const verification = await prisma.emailVerifications.findFirst({
      where: {
        token: data.token,
        used: false,
      },
      include: {
        user: true,
      },
    });

    if (!verification) {
      throw new AppError("Invalid or already used verification token", 400);
    }

    if (new Date() > verification.expiresAt) {
      throw new AppError("Verification token has expired", 400);
    }

    // Hash password
    const hashedPassword = await HashUtil.hash(data.password);

    // Update user
    await prisma.users.update({
      where: { id: verification.userId },
      data: {
        password: hashedPassword,
        isVerified: true,
      },
    });

    // Mark token as used
    await prisma.emailVerifications.update({
      where: { id: verification.id },
      data: { used: true },
    });

    return {
      message: "Email verified successfully. You can now login.",
    };
  }

  async login(data: LoginDTO) {
    const user = await prisma.users.findUnique({
      where: { email: data.email },
      include: {
        tenantProfile: true,
      },
    });

    if (!user) {
      throw new AppError("Invalid email or password", 401);
    }

    if (user.provider) {
      throw new AppError(`Please login with ${user.provider}`, 400);
    }

    if (!user.password) {
      throw new AppError("Please verify your email first", 403);
    }

    if (!user.isVerified) {
      throw new AppError("Please verify your email first", 403);
    }

    // Verify password
    const isPasswordValid = await HashUtil.compare(
      data.password,
      user.password
    );

    if (!isPasswordValid) {
      throw new AppError("Invalid email or password", 401);
    }

    // Generate JWT
    const token = JwtUtil.generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    const result = {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        isVerified: user.isVerified,
        tenantProfile: user.tenantProfile,
      },
    };

    return result;
  }

  async resendVerification(email: string) {
    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      throw new AppError("User not found", 404);
    }

    if (user.isVerified) {
      throw new AppError("Email already verified", 400);
    }

    if (user.provider) {
      throw new AppError(
        "Social login accounts do not require verification",
        400
      );
    }

    // Mark old tokens as used
    await prisma.emailVerifications.updateMany({
      where: {
        userId: user.id,
        used: false,
      },
      data: {
        used: true,
      },
    });

    // Generate new token
    const token = TokenUtil.generate();
    const expiresAt = TokenUtil.getExpiry(1);

    await prisma.emailVerifications.create({
      data: {
        userId: user.id,
        token,
        expiresAt,
      },
    });

    // Send email
    await EmailUtil.send({
      to: user.email,
      subject: "Verify Your Email",
      html: EmailUtil.generateVerificationEmail(user.name, token),
    });

    return {
      message: "Verification email sent. Please check your inbox.",
    };
  }

  async resetPassword(email: string) {
    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      // Don't reveal if email exists
      return {
        message: "If the email exists, a reset link has been sent.",
      };
    }

    if (user.provider) {
      throw new AppError("Social login accounts cannot reset password", 400);
    }

    // Mark old tokens as used
    await prisma.resetPasswords.updateMany({
      where: {
        userId: user.id,
        used: false,
      },
      data: {
        used: true,
      },
    });

    // Generate reset token
    const token = TokenUtil.generate();
    const expiresAt = TokenUtil.getExpiry(1);

    await prisma.resetPasswords.create({
      data: {
        userId: user.id,
        token,
        expiresAt,
      },
    });

    // Send email
    await EmailUtil.send({
      to: user.email,
      subject: "Reset Your Password",
      html: EmailUtil.generateResetPasswordEmail(user.name, token),
    });

    return {
      message: "If the email exists, a reset link has been sent.",
    };
  }

  async confirmResetPassword(token: string, newPassword: string) {
    const resetToken = await prisma.resetPasswords.findFirst({
      where: {
        token,
        used: false,
      },
      include: {
        user: true,
      },
    });

    if (!resetToken) {
      throw new AppError("Invalid or already used reset token", 400);
    }

    if (new Date() > resetToken.expiresAt) {
      throw new AppError("Reset token has expired", 400);
    }

    // Hash new password
    const hashedPassword = await HashUtil.hash(newPassword);

    // Update password
    await prisma.users.update({
      where: { id: resetToken.userId },
      data: {
        password: hashedPassword,
      },
    });

    // Mark token as used
    await prisma.resetPasswords.update({
      where: { id: resetToken.id },
      data: { used: true },
    });

    return {
      message:
        "Password reset successfully. You can now login with your new password.",
    };
  }

  async getProfile(userId: number) {
    const user = await prisma.users.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatar: true,
        isVerified: true,
        provider: true,
        createdAt: true,
        tenantProfile: true,
      },
    });

    if (!user) {
      throw new AppError("User not found", 404);
    }

    return user;
  }

  async updateProfile(
    userId: number,
    data: UpdateProfileDTO,
    avatar?: Express.Multer.File
  ) {
    const user = await prisma.users.findUnique({
      where: { id: userId },
      include: {
        tenantProfile: true,
      },
    });

    if (!user) {
      throw new AppError("User not found", 404);
    }

    // Check if email is being updated
    let emailChanged = false;
    if (data.email && data.email !== user.email) {
      const existingUser = await prisma.users.findUnique({
        where: { email: data.email },
      });

      if (existingUser) {
        throw new AppError("Email already in use", 400);
      }

      emailChanged = true;
    }

    // Upload avatar if provided
    let avatarUrl = user.avatar;
    if (avatar) {
      avatarUrl = await CloudinaryUtil.uploadImage(avatar, "avatars");
    }

    // Update user
    const updatedUser = await prisma.users.update({
      where: { id: userId },
      data: {
        name: data.name || user.name,
        email: data.email || user.email,
        avatar: avatarUrl,
        isVerified: emailChanged ? false : user.isVerified,
      },
    });

    // Update tenant profile if tenant
    if (user.role === "tenant" && user.tenantProfile) {
      await prisma.tenantProfile.update({
        where: { userId: user.id },
        data: {
          companyName: data.companyName || user.tenantProfile.companyName,
          phone:
            data.phone !== undefined ? data.phone : user.tenantProfile.phone,
          address:
            data.address !== undefined
              ? data.address
              : user.tenantProfile.address,
        },
      });
    }

    // Send verification email if email changed
    if (emailChanged) {
      const token = TokenUtil.generate();
      const expiresAt = TokenUtil.getExpiry(1);

      await prisma.emailVerifications.create({
        data: {
          userId: user.id,
          token,
          expiresAt,
        },
      });

      await EmailUtil.send({
        to: data.email!,
        subject: "Verify Your New Email",
        html: EmailUtil.generateVerificationEmail(user.name, token),
      });
    }

    return {
      message: emailChanged
        ? "Profile updated. Please verify your new email address."
        : "Profile updated successfully",
      emailChanged,
    };
  }

  async updatePassword(
    userId: number,
    oldPassword: string,
    newPassword: string
  ) {
    const user = await prisma.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new AppError("User not found", 404);
    }

    if (user.provider) {
      throw new AppError("Social login accounts cannot change password", 400);
    }

    if (!user.password) {
      throw new AppError("No password set for this account", 400);
    }

    // Verify old password
    const isPasswordValid = await HashUtil.compare(oldPassword, user.password);

    if (!isPasswordValid) {
      throw new AppError("Current password is incorrect", 400);
    }

    // Hash new password
    const hashedPassword = await HashUtil.hash(newPassword);

    // Update password
    await prisma.users.update({
      where: { id: userId },
      data: {
        password: hashedPassword,
      },
    });

    return {
      message: "Password updated successfully",
    };
  }
}
