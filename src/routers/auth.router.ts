import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { AuthValidator } from "../validators/auth.validator";
import { ValidationMiddleware } from "../middlewares/validation.middleware";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { UploadMiddleware } from "../middlewares/upload.middleware";

export class AuthRouter {
  private router: Router;
  private authController: AuthController;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      "/google-login",
      ValidationMiddleware.validate(AuthValidator.googleLogin()),
      this.authController.googleLogin
    );
    this.router.post(
      "/register",
      ValidationMiddleware.validate(AuthValidator.register()),
      this.authController.register
    );

    this.router.post(
      "/social-login",
      ValidationMiddleware.validate(AuthValidator.socialLogin()),
      this.authController.socialLogin
    );

    this.router.post(
      "/verify-email",
      ValidationMiddleware.validate(AuthValidator.verifyEmail()),
      this.authController.verifyEmail
    );

    this.router.post(
      "/login",
      ValidationMiddleware.validate(AuthValidator.login()),
      this.authController.login
    );

    this.router.post(
      "/resend-verification",
      ValidationMiddleware.validate(AuthValidator.resendVerification()),
      this.authController.resendVerification
    );

    this.router.post(
      "/reset-password",
      ValidationMiddleware.validate(AuthValidator.resetPassword()),
      this.authController.resetPassword
    );

    this.router.post(
      "/confirm-reset-password",
      ValidationMiddleware.validate(AuthValidator.confirmResetPassword()),
      this.authController.confirmResetPassword
    );

    this.router.get(
      "/profile",
      AuthMiddleware.authenticate(),
      this.authController.getProfile
    );

    this.router.put(
      "/profile",
      AuthMiddleware.authenticate(),
      UploadMiddleware.single("avatar"),
      UploadMiddleware.handleMulterError(),
      ValidationMiddleware.validate(AuthValidator.updateProfile()),
      this.authController.updateProfile
    );

    this.router.put(
      "/password",
      AuthMiddleware.authenticate(),
      ValidationMiddleware.validate(AuthValidator.updatePassword()),
      this.authController.updatePassword
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
