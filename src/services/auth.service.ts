import { AppError } from '../utils/app.error';
import logger from '../utils/logger';
import emailService from './email.service';
import userService from './user.service';
import tokenService from './token.service';
import verificationService from './verification.service';

interface RegisterData {
  name: string;
  email: string;
  role: 'user' | 'tenant';
  companyName?: string;
  phone?: string;
  address?: string;
}

interface LoginData {
  email: string;
  password: string;
  role: 'user' | 'tenant';
}

interface SocialLoginData {
  email: string;
  name: string;
  provider: string;
  providerId: string;
  avatar?: string;
  role: 'user' | 'tenant';
}

class AuthService {
  async register(data: RegisterData) {
    const { name, email, role, companyName, phone, address } = data;

    // Check if user already exists
    const existingUser = await userService.findByEmail(email);
    if (existingUser) {
      throw new AppError('User with this email already exists', 409);
    }

    // Create user
    const user = await userService.createUser({
      name,
      email,
      role,
      isVerified: false,
    });

    // Create tenant profile if role is tenant
    if (role === 'tenant' && companyName) {
      await userService.createTenantProfile({
        userId: user.id,
        companyName,
        phone,
        address,
      });
    }

    // Generate and store verification token
    const verificationToken = tokenService.generateVerificationToken();
    await verificationService.createVerification(user.id, verificationToken);

    // Send verification email
    await emailService.sendVerificationEmail(email, verificationToken, name);

    logger.info(`User registered: ${email} as ${role}`);

    return {
      message: 'Registration successful. Please check your email to verify your account.',
      userId: user.id,
    };
  }

  async verifyEmailAndSetPassword(token: string, password: string) {
    // Verify token format
    try {
      tokenService.verifyToken(token);
    } catch (error) {
      throw new AppError('Invalid or expired verification token', 400);
    }

    // Find verification record
    const verification = await verificationService.findVerification(token);
    if (!verification) {
      throw new AppError('Invalid or expired verification token', 400);
    }

    // Hash password and update user
    const hashedPassword = await userService.hashPassword(password);
    const user = await userService.updateUser(verification.userId, {
      password: hashedPassword,
      isVerified: true,
    });

    // Mark verification as used
    await verificationService.markVerificationUsed(verification.id);

    // Send welcome email
    await emailService.sendWelcomeEmail(user.email, user.name, user.role);

    logger.info(`User verified and password set: ${user.email}`);

    return {
      message: 'Email verified and password set successfully. You can now login.',
    };
  }

  async login(data: LoginData) {
    const { email, password, role } = data;

    // Find user with role check
    const user = await userService.findByEmailAndRole(email, role);
    if (!user || !user.password) {
      throw new AppError('Invalid credentials', 401);
    }

    // Check if user is verified
    if (!user.isVerified) {
      throw new AppError('Please verify your email before logging in', 401);
    }

    // Verify password
    const isPasswordValid = await userService.verifyPassword(password, user.password);
    if (!isPasswordValid) {
      throw new AppError('Invalid credentials', 401);
    }

    // Generate tokens
    const tokenPayload = { userId: user.id, role: user.role };
    const accessToken = tokenService.generateAccessToken(tokenPayload);
    const refreshToken = tokenService.generateRefreshToken(tokenPayload);

    logger.info(`User logged in: ${email}`);

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        tenantProfile: user.tenantProfile,
      }
    };
  }

  async socialLogin(data: SocialLoginData) {
    const { email, name, provider, providerId, avatar, role } = data;

    // Check if user exists
    let user = await userService.findByEmail(email);

    if (user) {
      // Check if social login exists
      const socialLogin = user.socialLogins.find(
        sl => sl.provider === provider && sl.providerId === providerId
      );

      if (!socialLogin) {
        // Add social login
        await userService.createSocialLogin(user.id, provider, providerId);
      }
    } else {
      // Create new user
      user = await userService.createUser({
        name,
        email,
        role,
        provider,
        providerId,
        avatar,
        isVerified: true, // Social logins are auto-verified
      });

      // Create social login record
      await userService.createSocialLogin(user.id, provider, providerId);

      // Send welcome email
      await emailService.sendWelcomeEmail(email, name, role);
    }

    // Generate tokens
    const tokenPayload = { userId: user.id, role: user.role };
    const accessToken = tokenService.generateAccessToken(tokenPayload);
    const refreshToken = tokenService.generateRefreshToken(tokenPayload);

    logger.info(`Social login: ${email} via ${provider}`);

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        tenantProfile: user.tenantProfile,
      }
    };
  }

  async requestPasswordReset(email: string) {
    const user = await userService.findByEmail(email);

    if (!user) {
      // Don't reveal that user doesn't exist
      return { message: 'If an account with this email exists, a password reset link has been sent.' };
    }

    // Don't allow reset for social login users
    if (user.provider && !user.password) {
      throw new AppError('Cannot reset password for social login accounts', 400);
    }

    // Generate and store reset token
    const resetToken = tokenService.generateResetToken(user.id);
    await verificationService.createPasswordReset(user.id, resetToken);

    // Send reset email
    await emailService.sendPasswordResetEmail(email, resetToken, user.name);

    logger.info(`Password reset requested for: ${email}`);

    return {
      message: 'If an account with this email exists, a password reset link has been sent.'
    };
  }

  async resetPassword(token: string, newPassword: string) {
    let decoded: any;
    try {
      decoded = tokenService.verifyToken(token);
    } catch (error) {
      throw new AppError('Invalid or expired reset token', 400);
    }

    // Find reset record
    const resetRecord = await verificationService.findPasswordReset(token, decoded.userId);
    if (!resetRecord) {
      throw new AppError('Invalid or expired reset token', 400);
    }

    // Hash new password and update user
    const hashedPassword = await userService.hashPassword(newPassword);
    await userService.updateUser(resetRecord.userId, { password: hashedPassword });

    // Mark reset token as used
    await verificationService.markPasswordResetUsed(resetRecord.id);

    logger.info(`Password reset completed for: ${resetRecord.user.email}`);

    return { message: 'Password reset successfully' };
  }

  async refreshToken(refreshToken: string) {
    try {
      const decoded = tokenService.verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET!) as any;
      
      const user = await userService.findById(decoded.userId);
      if (!user) {
        throw new AppError('User not found', 404);
      }

      const accessToken = tokenService.generateAccessToken({
        userId: user.id,
        role: user.role
      });

      return { accessToken };
    } catch (error) {
      throw new AppError('Invalid refresh token', 401);
    }
  }

  async resendVerification(email: string) {
    const user = await userService.findByEmail(email);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    if (user.isVerified) {
      throw new AppError('User is already verified', 400);
    }

    // Delete old verification tokens
    await verificationService.deleteUserVerifications(user.id);

    // Generate and store new verification token
    const verificationToken = tokenService.generateVerificationToken();
    await verificationService.createVerification(user.id, verificationToken);

    // Send verification email
    await emailService.sendVerificationEmail(email, verificationToken, user.name);

    logger.info(`Verification email resent to: ${email}`);

    return { message: 'Verification email sent successfully' };
  }
}

export default new AuthService();