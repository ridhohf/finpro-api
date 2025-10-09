import { PrismaClient } from '../generated/prisma';

export class ReviewService {
  private prisma = new PrismaClient();

  async submitReview(transactionId: number, rating: number, comment: string) {
    const transaction = await this.prisma.reservations.findUnique({
      where: { id: transactionId },
      include: {
        property: true,
        user: { select: { id: true, name: true } },
      },
    });

    if (!transaction) throw new Error('Transaction not found');

    if (transaction.status !== 'CONFIRMED') {
      throw new Error('Reviews only for confirmed bookings');
    }

    const checkOutDate = new Date(transaction.checkOut);
    const today = new Date();

    if (today < checkOutDate) {
      throw new Error('Reviews only after checkout');
    }

    const existingReview = await this.prisma.reviews.findFirst({
      where: {
        reservationId: transactionId,
        userId: transaction.userId,
      },
    });

    if (existingReview) {
      throw new Error('Review already submitted');
    }

    const review = await this.prisma.reviews.create({
      data: {
        userId: transaction.userId,
        propertyId: transaction.propertyId,
        reservationId: transactionId,
        rating: rating,
        comment: comment.trim(),
      },
      include: {
        user: { select: { name: true } },
        property: { select: { name: true } },
      },
    });

    await this.prisma.$disconnect();
    return review;
  }

  async replyToReview(reviewId: number, reply: string) {
    const review = await this.prisma.reviews.findUnique({
      where: { id: reviewId },
      include: {
        user: { select: { name: true } },
        property: {
          select: {
            name: true,
            tenant: { select: { name: true } },
          },
        },
      },
    });

    if (!review) throw new Error('Review not found');

    const updatedReview = await this.prisma.reviews.update({
      where: { id: reviewId },
      data: {
        tenantReply: reply.trim(),
        repliedAt: new Date(),
      },
    });

    await this.prisma.$disconnect();
    return { updatedReview, review };
  }

  async getPropertyReviews(propertyId: number) {
    const reviews = await this.prisma.reviews.findMany({
      where: { propertyId: propertyId },
      include: {
        user: { select: { name: true } },
        property: { select: { name: true } },
      },
      orderBy: { createdAt: 'desc' },
    });

    await this.prisma.$disconnect();

    const averageRating =
      reviews.length > 0
        ? reviews.reduce((sum: number, r: any) => sum + r.rating, 0) /
          reviews.length
        : 0;

    return {
      propertyId,
      averageRating: Math.round(averageRating * 10) / 10,
      totalReviews: reviews.length,
      reviews,
    };
  }
}
