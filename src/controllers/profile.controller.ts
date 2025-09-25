import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/app.error';
import ProfileService from '../services/profile.service';
import { AuthRequest } from '../middlewares/jwt-verify.middleware';

export class ProfileController {
  constructor() {
    this.getProfile = this.getProfile.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }

  async getProfile(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError('User not authenticated', 401);

      const profile = await ProfileService.getProfile(req.user.userId);

      if (!profile) throw new AppError('Profile not found', 404);

      res.status(200).json({
        success: true,
        message: 'Get profile successful',
        data: profile,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateProfile(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError('User not authenticated', 401);

      const updateData = req.body;
      const updatedProfile = await ProfileService.updateProfile(req.user.userId, updateData);

      res.status(200).json({
        success: true,
        message: 'Profile updated successfully',
        data: updatedProfile,
      });
    } catch (error) {
      next(error);
    }
  }

  async updatePassword(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError('User not authenticated', 401);

      const { currentPassword, newPassword } = req.body;

      if (!currentPassword) throw new AppError('Current password is required', 400);
      if (!newPassword) throw new AppError('New password is required', 400);

      await ProfileService.updatePassword(req.user.userId, currentPassword, newPassword);

      res.status(200).json({
        success: true,
        message: 'Password updated successfully',
      });
    } catch (error) {
      next(error);
    }
  }

  async updateAvatar(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError('User not authenticated', 401);

      const file = req.file;
      if (!file) throw new AppError('Avatar file is required', 400);

      const updatedProfile = await ProfileService.updateAvatar(req.user.userId, file);

      res.status(200).json({
        success: true,
        message: 'Avatar updated successfully',
        data: {
          avatar: updatedProfile.avatar,
        }
      });
    } catch (error) {
      next(error);
    }
  }

  async updateEmail(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError('User not authenticated', 401);

      const { newEmail } = req.body;

      if (!newEmail) throw new AppError('New email is required', 400);

      const result = await ProfileService.updateEmail(req.user.userId, newEmail);

      res.status(200).json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }
}