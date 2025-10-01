import { PrismaClient } from '../generated/prisma';
import {
  sendOrderConfirmationEmail,
  sendCheckInReminderEmail,
} from '../utils/email.util';

export class TransactionService {
  private prisma = new PrismaClient();

  async createTransaction(data: {
    roomId: number;
    checkIn: string;
    checkOut: string;
    duration: number;
  }) {
    const user = await this.prisma.users.findFirst({ where: { role: 'user' } });
    if (!user) throw new Error('No user found. Please create test data first.');

    const property = await this.prisma.properties.findFirst();
    if (!property)
      throw new Error('No property found. Please create test data first.');

    const reservation = await this.prisma.reservations.create({
      data: {
        userId: user.id,
        propertyId: property.id,
        roomId: parseInt(data.roomId.toString()),
        checkIn: new Date(data.checkIn),
        checkOut: new Date(data.checkOut),
        duration: parseInt(data.duration.toString()),
        totalPrice: 500000,
        status: 'PENDING_PAYMENT',
      },
    });

    await this.prisma.$disconnect();
    return reservation;
  }

  async getAllTransactions(filters: {
    status?: string;
    userId?: number;
    propertyId?: number;
    startDate?: string;
    endDate?: string;
  }) {
    const whereClause: any = {};

    if (filters.status) whereClause.status = filters.status;
    if (filters.userId) whereClause.userId = filters.userId;
    if (filters.propertyId) whereClause.propertyId = filters.propertyId;
    if (filters.startDate && filters.endDate) {
      whereClause.checkIn = {
        gte: new Date(filters.startDate),
        lte: new Date(filters.endDate),
      };
    }

    const reservations = await this.prisma.reservations.findMany({
      where: whereClause,
      include: {
        room: { select: { name: true, basePrice: true } },
        property: { select: { name: true, address: true, city: true } },
        user: { select: { name: true, email: true } },
      },
      orderBy: { createdAt: 'desc' },
    });

    await this.prisma.$disconnect();
    return reservations;
  }

  async getTransactionById(id: number) {
    const reservation = await this.prisma.reservations.findUnique({
      where: { id },
      include: {
        room: {
          select: {
            name: true,
            basePrice: true,
            description: true,
            picture: true,
          },
        },
        property: {
          select: {
            name: true,
            address: true,
            city: true,
            description: true,
            picture: true,
            tenant: { select: { name: true, email: true } },
          },
        },
        user: { select: { name: true, email: true } },
        paymentProofs: {
          select: {
            id: true,
            image: true,
            isValid: true,
            uploadedAt: true,
            rejectedReason: true,
          },
        },
      },
    });

    await this.prisma.$disconnect();
    if (!reservation) throw new Error('Transaction not found');
    return reservation;
  }

  async uploadPaymentProof(transactionId: number, filePath: string) {
    const transaction = await this.prisma.reservations.findUnique({
      where: { id: transactionId },
    });

    if (!transaction) throw new Error('Transaction not found');
    if (transaction.status !== 'PENDING_PAYMENT') {
      throw new Error(
        'Payment proof can only be uploaded for PENDING_PAYMENT status'
      );
    }

    const createdAt = new Date(transaction.createdAt);
    const oneHourLater = new Date(createdAt.getTime() + 60 * 60 * 1000);

    if (new Date() > oneHourLater) {
      await this.prisma.reservations.update({
        where: { id: transactionId },
        data: { status: 'CANCELLED' },
      });
      throw new Error('Payment time expired. Booking automatically cancelled.');
    }

    await this.prisma.paymentProofs.deleteMany({
      where: { reservationId: transactionId },
    });

    const paymentProof = await this.prisma.paymentProofs.create({
      data: {
        reservationId: transactionId,
        image: filePath,
        isValid: false,
      },
    });

    await this.prisma.reservations.update({
      where: { id: transactionId },
      data: { status: 'PENDING_CONFIRMATION' },
    });

    await this.prisma.$disconnect();
    return { paymentProof, status: 'PENDING_CONFIRMATION' };
  }

  async confirmPayment(transactionId: number) {
    const transaction = await this.prisma.reservations.findUnique({
      where: { id: transactionId },
      include: {
        paymentProofs: true,
        property: { select: { tenantId: true, name: true, address: true } },
        room: { select: { name: true } },
        user: { select: { email: true, name: true } },
      },
    });

    if (!transaction) throw new Error('Transaction not found');
    if (transaction.status !== 'PENDING_CONFIRMATION') {
      throw new Error(
        'Only PENDING_CONFIRMATION transactions can be confirmed'
      );
    }
    if (transaction.paymentProofs.length === 0) {
      throw new Error('No payment proof found');
    }

    await this.prisma.paymentProofs.updateMany({
      where: { reservationId: transactionId },
      data: { isValid: true },
    });

    const updatedTransaction = await this.prisma.reservations.update({
      where: { id: transactionId },
      data: { status: 'CONFIRMED' },
    });

    const tenant = await this.prisma.users.findUnique({
      where: { id: transaction.property.tenantId },
      select: { name: true },
    });

    await sendOrderConfirmationEmail(
      transaction.user.email,
      transaction.user.name,
      {
        propertyName: transaction.property.name,
        roomName: transaction.room.name,
        checkIn: transaction.checkIn,
        checkOut: transaction.checkOut,
        duration: transaction.duration,
        totalPrice: transaction.totalPrice,
        tenantName: tenant?.name || 'Property Owner',
      }
    );

    await this.prisma.$disconnect();
    return updatedTransaction;
  }

  async rejectPayment(transactionId: number, reason?: string) {
    const transaction = await this.prisma.reservations.findUnique({
      where: { id: transactionId },
      include: { paymentProofs: true },
    });

    if (!transaction) throw new Error('Transaction not found');
    if (transaction.status !== 'PENDING_CONFIRMATION') {
      throw new Error('Only PENDING_CONFIRMATION transactions can be rejected');
    }

    await this.prisma.paymentProofs.updateMany({
      where: { reservationId: transactionId },
      data: {
        isValid: false,
        rejectedReason: reason || 'Payment proof rejected',
      },
    });

    const updatedTransaction = await this.prisma.reservations.update({
      where: { id: transactionId },
      data: { status: 'PENDING_PAYMENT' },
    });

    await this.prisma.$disconnect();
    return updatedTransaction;
  }

  async cancelTransaction(transactionId: number, reason?: string) {
    const transaction = await this.prisma.reservations.findUnique({
      where: { id: transactionId },
    });

    if (!transaction) throw new Error('Transaction not found');

    const cancellableStatuses = ['PENDING_PAYMENT', 'PENDING_CONFIRMATION'];
    if (!cancellableStatuses.includes(transaction.status)) {
      throw new Error('Only pending transactions can be cancelled');
    }

    const updatedTransaction = await this.prisma.reservations.update({
      where: { id: transactionId },
      data: { status: 'CANCELLED' },
    });

    await this.prisma.paymentProofs.updateMany({
      where: { reservationId: transactionId },
      data: {
        isValid: false,
        rejectedReason: reason || 'Transaction cancelled',
      },
    });

    await this.prisma.$disconnect();
    return updatedTransaction;
  }

  async autoCancelExpired() {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

    const expiredBookings = await this.prisma.reservations.findMany({
      where: {
        status: 'PENDING_PAYMENT',
        createdAt: { lte: oneHourAgo },
      },
    });

    for (const booking of expiredBookings) {
      await this.prisma.reservations.update({
        where: { id: booking.id },
        data: { status: 'CANCELLED' },
      });
      console.log(`Auto-cancelled booking ID: ${booking.id}`);
    }

    await this.prisma.$disconnect();
  }

  async sendUpcomingCheckInReminders() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const dayAfterTomorrow = new Date(tomorrow);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 1);

    const upcomingBookings = await this.prisma.reservations.findMany({
      where: {
        status: 'CONFIRMED',
        checkIn: { gte: tomorrow, lt: dayAfterTomorrow },
        reminderSentAt: null,
      },
      include: {
        user: { select: { email: true, name: true } },
        property: { select: { name: true, address: true } },
        room: { select: { name: true } },
      },
    });

    for (const booking of upcomingBookings) {
      await sendCheckInReminderEmail(booking.user.email, booking.user.name, {
        propertyName: booking.property.name,
        roomName: booking.room.name,
        checkIn: booking.checkIn,
        address: booking.property.address,
      });

      await this.prisma.reservations.update({
        where: { id: booking.id },
        data: { reminderSentAt: new Date() },
      });
    }

    await this.prisma.$disconnect();
  }
}
