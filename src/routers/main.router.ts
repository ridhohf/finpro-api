import { Router } from 'express';
import transactionRoutes from './transaction.routes';
import reviewRoutes from './review.routes';
import reportRoutes from './report.routes';
import { TestDataController } from '../controllers/test-data.controller';

const router = Router();
const testDataController = new TestDataController();

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Test data endpoints
router.get('/check-data', testDataController.checkData);
router.post('/setup-test-data', testDataController.setupTestData);

// Feature routes
router.use('/transactions', transactionRoutes);
router.use('/', reviewRoutes);
router.use('/reports', reportRoutes);

export default router;
