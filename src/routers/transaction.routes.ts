import { Router } from 'express';
import { TransactionController } from '../controllers/transaction.controller';
import { upload } from '../utils/upload.util';
// Import sesuai nama middleware dari Feature 1
import { jwtVerify } from '../middlewares/jwt-verify.middleware';

const router = Router();
const controller = new TransactionController();

// All routes require authentication
router.use(jwtVerify);

// User routes - Create booking
router.post('/', controller.create);

// User & Tenant routes - Get transactions
router.get('/', controller.getAll);
router.get('/:id', controller.getById);

// User routes - Upload payment proof
router.post(
  '/:id/payment-proof',
  upload.single('payment_proof'),
  controller.uploadPaymentProof
);

// Tenant routes - Confirm/Reject payment
router.put('/:id/confirm', controller.confirmPayment);
router.put('/:id/reject', controller.rejectPayment);

// User & Tenant routes - Cancel transaction
router.put('/:id/cancel', controller.cancelTransaction);

export default router;
