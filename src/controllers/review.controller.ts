import { Request, Response } from 'express';
import { ReviewService } from '../services/review.service';

export class ReviewController {
  private reviewService = new ReviewService();

  submitReview = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { rating, comment } = req.body;

      if (!rating || !comment) {
        return res.status(400).json({
          success: false,
          message: 'Rating and comment are required',
        });
      }

      if (rating < 1 || rating > 5) {
        return res.status(400).json({
          success: false,
          message: 'Rating must be between 1 and 5',
        });
      }

      const review = await this.reviewService.submitReview(
        parseInt(id),
        parseInt(rating),
        comment
      );

      res.status(201).json({
        success: true,
        message: 'Review submitted',
        data: {
          review: {
            id: review.id,
            rating: review.rating,
            comment: review.comment,
            reviewDate: review.createdAt,
            user: review.user.name,
            property: review.property.name,
          },
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Error',
      });
    }
  };

  replyToReview = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { reply } = req.body;

      if (!reply || reply.trim().length === 0) {
        return res.status(400).json({
          success: false,
          message: 'Reply message required',
        });
      }

      const result = await this.reviewService.replyToReview(
        parseInt(id),
        reply
      );

      res.json({
        success: true,
        message: 'Reply submitted',
        data: {
          review: {
            id: result.updatedReview.id,
            rating: result.updatedReview.rating,
            comment: result.updatedReview.comment,
            reviewDate: result.updatedReview.createdAt,
            tenantReply: result.updatedReview.tenantReply,
            replyDate: result.updatedReview.repliedAt,
            user: result.review.user.name,
            property: result.review.property.name,
            tenant: result.review.property.tenant.name,
          },
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Error',
      });
    }
  };

  getPropertyReviews = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await this.reviewService.getPropertyReviews(parseInt(id));

      res.json({
        success: true,
        message: 'Reviews retrieved',
        data: {
          propertyId: result.propertyId,
          averageRating: result.averageRating,
          totalReviews: result.totalReviews,
          reviews: result.reviews.map((r: any) => ({
            id: r.id,
            rating: r.rating,
            comment: r.comment,
            reviewDate: r.createdAt,
            tenantReply: r.tenantReply,
            replyDate: r.repliedAt,
            user: r.user.name,
          })),
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Error',
      });
    }
  };
}
