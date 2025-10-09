import { PrismaClient, ReservationStatus } from '../generated/prisma';

const prisma = new PrismaClient();

export class AvailabilityChecker {
  async checkRoomAvailability(
    roomId: number,
    checkIn: Date,
    checkOut: Date
  ): Promise<void> {
    const overlapping = await this.findOverlappingBookings(
      roomId,
      checkIn,
      checkOut
    );

    if (overlapping) {
      throw new Error('Room not available for selected dates');
    }
  }

  private async findOverlappingBookings(
    roomId: number,
    checkIn: Date,
    checkOut: Date
  ) {
    return await prisma.reservations.findFirst({
      where: {
        roomId,
        status: {
          in: [
            ReservationStatus.CONFIRMED,
            ReservationStatus.PENDING_CONFIRMATION,
          ],
        },
        OR: [
          {
            checkIn: { lte: checkIn },
            checkOut: { gt: checkIn },
          },
          {
            checkIn: { lt: checkOut },
            checkOut: { gte: checkOut },
          },
          {
            checkIn: { gte: checkIn },
            checkOut: { lte: checkOut },
          },
        ],
      },
    });
  }

  async validateBookingDates(checkIn: Date, checkOut: Date): Promise<void> {
    const now = new Date();

    if (checkIn < now) {
      throw new Error('Check-in date cannot be in the past');
    }

    if (checkOut <= checkIn) {
      throw new Error('Check-out must be after check-in');
    }

    const maxDuration = 30; // Max 30 nights
    const duration = this.calculateDuration(checkIn, checkOut);

    if (duration > maxDuration) {
      throw new Error(`Maximum booking duration is ${maxDuration} nights`);
    }
  }

  calculateDuration(checkIn: Date, checkOut: Date): number {
    const diffTime = checkOut.getTime() - checkIn.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
}

export const availabilityChecker = new AvailabilityChecker();
