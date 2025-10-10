import { Router } from 'express';
import { TransactionController } from '../controllers/transaction.controller';
import { JwtVerify } from '../middlewares/jwt-verify.middleware';
import { upload } from '../utils/upload.util';

const router = Router();
const transactionController = new TransactionController();

// ✅ FIXED: Use JWT_SECRET_KEY to match jwt.util.ts
if (!process.env.JWT_SECRET_KEY) {
  throw new Error("❌ JWT_SECRET_KEY is not defined in environment variables!");
}

const JWT_SECRET = process.env.JWT_SECRET_KEY;  // ✅ Changed from JWT_SECRET

console.log("🔐 Transaction routes using JWT_SECRET_KEY:", JWT_SECRET.substring(0, 15) + "...");

// Middleware untuk verifikasi JWT
const verifyToken = JwtVerify.verifyToken(JWT_SECRET);

// Routes untuk transactions
router.post('/', verifyToken, transactionController.create);
router.get('/', verifyToken, transactionController.getAll);
router.get('/:id', verifyToken, transactionController.getById);
router.post(
  '/:id/upload-payment',
  verifyToken,
  upload.single('paymentProof'),
  transactionController.uploadPaymentProof
);
router.patch('/:id/confirm', verifyToken, transactionController.confirmPayment);
router.patch('/:id/reject', verifyToken, transactionController.rejectPayment);
router.patch(
  '/:id/cancel',
  verifyToken,
  transactionController.cancelTransaction
);

export default router;