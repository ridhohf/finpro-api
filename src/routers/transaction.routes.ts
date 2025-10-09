import { Router } from 'express';
import { TransactionController } from '../controllers/transaction.controller';
import { JwtVerify } from '../middlewares/jwt-verify.middleware';
import { upload } from '../utils/upload.util';

const router = Router();
const transactionController = new TransactionController();

// JWT Secret Key - pastikan ini sesuai dengan konfigurasi Anda
const JWT_SECRET = process.env.JWT_SECRET || 'ccb3f75b4ab7d102dd2926444a71d029';

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
