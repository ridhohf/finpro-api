import { Router } from 'express';
import { TransactionController } from '../controllers/transaction.controller';
import { upload } from '../utils/upload.util';

const router = Router();
const controller = new TransactionController();

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post(
  '/:id/payment-proof',
  upload.single('payment_proof'),
  controller.uploadPaymentProof
);
router.put('/:id/confirm', controller.confirmPayment);
router.put('/:id/reject', controller.rejectPayment);
router.put('/:id/cancel', controller.cancelTransaction);

export default router;
