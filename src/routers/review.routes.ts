import { Router } from 'express';
import { ReviewController } from '../controllers/review.controller';

const router = Router();
const controller = new ReviewController();

// Submit review untuk transaction
router.post('/transactions/:id/review', controller.submitReview);

// Reply to review
router.put('/reviews/:id/reply', controller.replyToReview);

// Get property reviews
router.get('/properties/:id/reviews', controller.getPropertyReviews);

export default router;
