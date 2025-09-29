import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth.service";

export class AuthController {
  private authService = new AuthService();

  constructor() {
    this.register = this.register.bind(this);
    this.socialLogin = this.socialLogin.bind(this);
    this.verifyEmail = this.verifyEmail.bind(this);
    this.login = this.login.bind(this);
    this.resendVerification = this.resendVerification.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
    this.confirmResetPassword = this.confirmResetPassword.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, role, companyName, phone, address } = req.body;

      const result = await this.authService.register({
        name,
        email,
        role,
        companyName,
        phone,
        address,
      });

      res.status(201).json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }

  async socialLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const { provider, providerId, email, name, role, avatar } = req.body;

      const result = await this.authService.socialLogin({
        provider,
        providerId,
        email,
        name,
        role,
        avatar,
      });

      res.status(200).json({
        success: true,
        message: "Login successful",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async verifyEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const { token, password } = req.body;

      const result = await this.authService.verifyEmail({
        token,
        password,
      });

      res.status(200).json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const result = await this.authService.login({
        email,
        password,
      });

      res.status(200).json({
        success: true,
        message: "Login successful",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async resendVerification(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;

      const result = await this.authService.resendVerification(email);

      res.status(200).json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }

  async resetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;

      const result = await this.authService.resetPassword(email);

      res.status(200).json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }

  async confirmResetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { token, password } = req.body;

      const result = await this.authService.confirmResetPassword(
        token,
        password
      );

      res.status(200).json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }

  async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;

      const user = await this.authService.getProfile(userId);

      res.status(200).json({
        success: true,
        message: "Profile retrieved successfully",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;
      const { name, email, phone, address, companyName } = req.body;
      const avatar = req.file;

      const result = await this.authService.updateProfile(
        userId,
        {
          name,
          email,
          phone,
          address,
          companyName,
        },
        avatar
      );

      res.status(200).json({
        success: true,
        message: result.message,
        data: {
          emailChanged: result.emailChanged,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async updatePassword(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;
      const { oldPassword, newPassword } = req.body;

      const result = await this.authService.updatePassword(
        userId,
        oldPassword,
        newPassword
      );

      res.status(200).json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }
}
