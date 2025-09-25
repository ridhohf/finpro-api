import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/app.error";
import AuthService from "../services/auth.service";

export class AuthController {
  constructor() {
    this.register = this.register.bind(this);
    this.verifyEmailAndSetPassword = this.verifyEmailAndSetPassword.bind(this);
    this.login = this.login.bind(this);
    this.socialLogin = this.socialLogin.bind(this);
    this.requestPasswordReset = this.requestPasswordReset.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
    this.refreshToken = this.refreshToken.bind(this);
    this.resendVerification = this.resendVerification.bind(this);
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, role, companyName, phone, address } = req.body;

      const result = await AuthService.register({
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
        data: {
          userId: result.userId,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async verifyEmailAndSetPassword(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { token } = req.params;
      const { password } = req.body;

      if (!token) throw new AppError("Verification token is required", 400);
      if (!password) throw new AppError("Password is required", 400);

      const result = await AuthService.verifyEmailAndSetPassword(
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

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, role } = req.body;

      const result = await AuthService.login({ email, password, role });

      res.status(200).json({
        success: true,
        message: "Login successful",
        data: {
          accessToken: result.accessToken,
          refreshToken: result.refreshToken,
          user: result.user,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async socialLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, name, provider, providerId, avatar, role } = req.body;

      const result = await AuthService.socialLogin({
        email,
        name,
        provider,
        providerId,
        avatar,
        role,
      });

      res.status(200).json({
        success: true,
        message: "Social login successful",
        data: {
          accessToken: result.accessToken,
          refreshToken: result.refreshToken,
          user: result.user,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async requestPasswordReset(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;

      const result = await AuthService.requestPasswordReset(email);

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
      const { token } = req.params;
      const { password } = req.body;

      if (!token) throw new AppError("Reset token is required", 400);
      if (!password) throw new AppError("New password is required", 400);

      const result = await AuthService.resetPassword(token, password);

      res.status(200).json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }

  async refreshToken(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) throw new AppError("Refresh token is required", 400);

      const result = await AuthService.refreshToken(refreshToken);

      res.status(200).json({
        success: true,
        message: "Token refreshed successfully",
        data: {
          accessToken: result.accessToken,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async resendVerification(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;

      if (!email) throw new AppError("Email is required", 400);

      const result = await AuthService.resendVerification(email);

      res.status(200).json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }
}
