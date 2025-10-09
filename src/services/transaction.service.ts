import { PrismaClient, ReservationStatus } from '../generated/prisma';
import { priceCalculator } from '../helpers/price-calculator.helper';
import { availabilityChecker } from '../helpers/availability-checker.helper';
import { transactionAuth } from '../helpers/transaction-authorization.helper';
import {
  sendOrderConfirmationEmail,
  sendCheckInReminderEmail,
} from '../utils/email.util2';

export class TransactionService {
  private prisma = new PrismaClient();

  async createTransaction(
    userId: number,
    data: {
      roomId: number;
      checkIn: string;
      checkOut: string;
    }
  ) {
    const checkInDate = new Date(data.checkIn);
    const checkOutDate = new Date(data.checkOut);

    await availabilityChecker.validateBookingDates(checkInDate, checkOutDate);
    await availabilityChecker.checkRoomAvailability(
      data.roomId,
      checkInDate,
      checkOutDate
    );

    const room = await this.getRoomWithProperty(data.roomId);
    const totalPrice = await priceCalculator.calculateTotalPrice(
      data.roomId,
      checkInDate,
      checkOutDate
    );
    const duration = availabilityChecker.calculateDuration(
      checkInDate,
      checkOutDate
    );

    return await this.createReservation(
      userId,
      room,
      checkInDate,
      checkOutDate,
      duration,
      totalPrice
    );
  }

  private async getRoomWithProperty(roomId: number) {
    const room = await this.prisma.rooms.findUnique({
      where: { id: roomId },
      include: { property: { select: { id: true } } },
    });

    if (!room) throw new Error('Room not found');
    return room;
  }

  private async createReservation(
    userId: number,
    room: any,
    checkIn: Date,
    checkOut: Date,
    duration: number,
    totalPrice: number
  ) {
    const reservation = await this.prisma.reservations.create({
      data: {
        userId,
        propertyId: room.property.id,
        roomId: room.id,
        checkIn,
        checkOut,
        duration,
        totalPrice,
        status: ReservationStatus.PENDING_PAYMENT,
      },
    });

    await this.prisma.$disconnect();
    return reservation;
  }

  async getAllTransactions(
    userId: number,
    role: string,
    filters: {
      status?: string;
      propertyId?: number;
      startDate?: string;
      endDate?: string;
    }
  ) {
    const whereClause: any = {};

    if (role === 'user') {
      whereClause.userId = userId;
    } else if (role === 'tenant') {
      whereClause.property = { tenantId: userId };
    }

    if (filters.status) {
      whereClause.status = filters.status as ReservationStatus;
    }
    if (filters.propertyId) whereClause.propertyId = filters.propertyId;
    if (filters.startDate && filters.endDate) {
      whereClause.checkIn = {
        gte: new Date(filters.startDate),
        lte: new Date(filters.endDate),
      };
    }

    return await this.fetchTransactions(whereClause);
  }

  private async fetchTransactions(whereClause: any) {
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

  async getTransactionById(id: number, userId: number, role: string) {
    if (role === 'user') {
      await transactionAuth.validateUserOwnership(userId, id);
    } else if (role === 'tenant') {
      await transactionAuth.validateTenantOwnership(userId, id);
    }

    return await this.fetchTransactionDetail(id);
  }

  private async fetchTransactionDetail(id: number) {
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

  async uploadPaymentProof(
    userId: number,
    transactionId: number,
    filePath: string
  ) {
    await transactionAuth.canUploadPaymentProof(userId, transactionId);
    await this.validatePaymentDeadline(transactionId);
    await this.savePaymentProof(transactionId, filePath);

    return await this.updateTransactionStatus(
      transactionId,
      ReservationStatus.PENDING_CONFIRMATION
    );
  }

  private async validatePaymentDeadline(transactionId: number) {
    const transaction = await this.prisma.reservations.findUnique({
      where: { id: transactionId },
      select: { createdAt: true, status: true },
    });

    if (!transaction) throw new Error('Transaction not found');

    if (transaction.status !== ReservationStatus.PENDING_PAYMENT) {
      throw new Error('Payment proof already uploaded');
    }

    const oneHourLater = new Date(
      transaction.createdAt.getTime() + 60 * 60 * 1000
    );

    if (new Date() > oneHourLater) {
      await this.updateTransactionStatus(
        transactionId,
        ReservationStatus.CANCELLED
      );
      throw new Error('Payment time expired. Booking cancelled automatically');
    }
  }

  private async savePaymentProof(transactionId: number, filePath: string) {
    await this.prisma.paymentProofs.deleteMany({
      where: { reservationId: transactionId },
    });

    return await this.prisma.paymentProofs.create({
      data: {
        reservationId: transactionId,
        image: filePath,
        isValid: false,
      },
    });
  }

  private async updateTransactionStatus(id: number, status: ReservationStatus) {
    const updated = await this.prisma.reservations.update({
      where: { id },
      data: { status },
    });

    await this.prisma.$disconnect();
    return updated;
  }

  async confirmPayment(tenantId: number, transactionId: number) {
    await transactionAuth.validateTenantOwnership(tenantId, transactionId);

    const transaction = await this.validateConfirmationEligibility(
      transactionId
    );
    await this.markPaymentAsValid(transactionId);
    await this.updateTransactionStatus(
      transactionId,
      ReservationStatus.CONFIRMED
    );
    await this.sendConfirmationEmail(transaction);

    return transaction;
  }

  private async validateConfirmationEligibility(transactionId: number) {
    const transaction = await this.prisma.reservations.findUnique({
      where: { id: transactionId },
      include: {
        paymentProofs: true,
        property: { select: { name: true, address: true } },
        room: { select: { name: true } },
        user: { select: { email: true, name: true } },
      },
    });

    if (!transaction) throw new Error('Transaction not found');
    if (transaction.status !== ReservationStatus.PENDING_CONFIRMATION) {
      throw new Error('Only pending confirmations can be confirmed');
    }
    if (transaction.paymentProofs.length === 0) {
      throw new Error('No payment proof found');
    }

    return transaction;
  }

  private async markPaymentAsValid(transactionId: number) {
    await this.prisma.paymentProofs.updateMany({
      where: { reservationId: transactionId },
      data: { isValid: true },
    });
  }

  private async sendConfirmationEmail(transaction: any) {
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
        tenantName: 'Property Owner',
      }
    );
  }

  async rejectPayment(
    tenantId: number,
    transactionId: number,
    reason?: string
  ) {
    await transactionAuth.validateTenantOwnership(tenantId, transactionId);

    const transaction = await this.validateRejectionEligibility(transactionId);
    await this.markPaymentAsRejected(transactionId, reason);
    await this.updateTransactionStatus(
      transactionId,
      ReservationStatus.PENDING_PAYMENT
    );

    return transaction;
  }

  private async validateRejectionEligibility(transactionId: number) {
    const transaction = await this.prisma.reservations.findUnique({
      where: { id: transactionId },
    });

    if (!transaction) throw new Error('Transaction not found');
    if (transaction.status !== ReservationStatus.PENDING_CONFIRMATION) {
      throw new Error('Only pending confirmations can be rejected');
    }

    return transaction;
  }

  private async markPaymentAsRejected(transactionId: number, reason?: string) {
    await this.prisma.paymentProofs.updateMany({
      where: { reservationId: transactionId },
      data: {
        isValid: false,
        rejectedReason: reason || 'Payment proof rejected',
      },
    });
  }

  async cancelTransaction(
    userId: number,
    role: string,
    transactionId: number,
    reason?: string
  ) {
    const canCancel = await transactionAuth.canCancelTransaction(
      userId,
      transactionId,
      role
    );

    if (!canCancel) {
      throw new Error('Cannot cancel this transaction');
    }

    await this.updateTransactionStatus(
      transactionId,
      ReservationStatus.CANCELLED
    );
    await this.invalidatePaymentProofs(transactionId, reason);

    return { success: true };
  }

  private async invalidatePaymentProofs(
    transactionId: number,
    reason?: string
  ) {
    await this.prisma.paymentProofs.updateMany({
      where: { reservationId: transactionId },
      data: {
        isValid: false,
        rejectedReason: reason || 'Transaction cancelled',
      },
    });
  }

  async autoCancelExpired() {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    const expiredBookings = await this.findExpiredBookings(oneHourAgo);

    for (const booking of expiredBookings) {
      await this.cancelExpiredBooking(booking.id);
    }

    await this.prisma.$disconnect();
  }

  private async findExpiredBookings(oneHourAgo: Date) {
    return await this.prisma.reservations.findMany({
      where: {
        status: ReservationStatus.PENDING_PAYMENT,
        createdAt: { lte: oneHourAgo },
      },
    });
  }

  private async cancelExpiredBooking(bookingId: number) {
    await this.prisma.reservations.update({
      where: { id: bookingId },
      data: { status: ReservationStatus.CANCELLED },
    });
    console.log(`Auto-cancelled booking ID: ${bookingId}`);
  }

  async sendUpcomingCheckInReminders() {
    const tomorrow = this.getTomorrowDateRange();
    const upcomingBookings = await this.findUpcomingBookings(tomorrow);

    for (const booking of upcomingBookings) {
      await this.sendReminder(booking);
      await this.markReminderSent(booking.id);
    }

    await this.prisma.$disconnect();
  }

  private getTomorrowDateRange() {
    const start = new Date();
    start.setDate(start.getDate() + 1);
    start.setHours(0, 0, 0, 0);

    const end = new Date(start);
    end.setDate(end.getDate() + 1);

    return { start, end };
  }

  private async findUpcomingBookings(tomorrow: { start: Date; end: Date }) {
    return await this.prisma.reservations.findMany({
      where: {
        status: ReservationStatus.CONFIRMED,
        checkIn: { gte: tomorrow.start, lt: tomorrow.end },
        reminderSentAt: null,
      },
      include: {
        user: { select: { email: true, name: true } },
        property: { select: { name: true, address: true } },
        room: { select: { name: true } },
      },
    });
  }

  private async sendReminder(booking: any) {
    await sendCheckInReminderEmail(booking.user.email, booking.user.name, {
      propertyName: booking.property.name,
      roomName: booking.room.name,
      checkIn: booking.checkIn,
      address: booking.property.address,
    });
  }

  private async markReminderSent(bookingId: number) {
    await this.prisma.reservations.update({
      where: { id: bookingId },
      data: { reminderSentAt: new Date() },
    });
  }
}
