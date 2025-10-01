import { Router } from 'express';
import { ReportController } from '../controllers/report.controller';

const router = Router();
const controller = new ReportController();

router.get('/tenant/:tenantId/sales', controller.getSalesReport);
router.get('/tenant/:tenantId/availability', controller.getAvailabilityReport);

export default router;
