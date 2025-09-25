import { Router } from 'express';
import { ProfileController } from '../controllers/profile.controller';
import { verifyToken } from '../middlewares/jwt-verify.middleware';
import { uploadAvatar } from '../middlewares/upload.middleware';
import { 
  updateProfileValidation, 
  updatePasswordValidation, 
  updateEmailValidation 
} from '../utils/validation';
import { handleValidationErrors } from '../middlewares/validation.middleware';

const router = Router();
const profileController = new ProfileController();

// Protected routes - require authentication
router.use(verifyToken);

router.get('/', profileController.getProfile);
router.put('/', updateProfileValidation, handleValidationErrors, profileController.updateProfile);
router.put('/password', updatePasswordValidation, handleValidationErrors, profileController.updatePassword);
router.put('/avatar', uploadAvatar, profileController.updateAvatar);
router.put('/email', updateEmailValidation, handleValidationErrors, profileController.updateEmail);

export default router;