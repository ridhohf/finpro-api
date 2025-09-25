import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { 
  registerValidation, 
  loginValidation, 
  setPasswordValidation, 
  resetPasswordValidation, 
  socialLoginValidation 
} from '../utils/validation';
import { handleValidationErrors } from '../middlewares/validation.middleware';

const router = Router();
const authController = new AuthController();

// Public routes
router.post('/register', registerValidation, handleValidationErrors, authController.register);
router.post('/verify-email/:token', setPasswordValidation, handleValidationErrors, authController.verifyEmailAndSetPassword);
router.post('/login', loginValidation, handleValidationErrors, authController.login);
router.post('/social-login', socialLoginValidation, handleValidationErrors, authController.socialLogin);
router.post('/request-password-reset', resetPasswordValidation, handleValidationErrors, authController.requestPasswordReset);
router.post('/reset-password/:token', setPasswordValidation, handleValidationErrors, authController.resetPassword);
router.post('/refresh-token', authController.refreshToken);
router.post('/resend-verification', resetPasswordValidation, handleValidationErrors, authController.resendVerification);

export default router;