import { PrismaClient, Prisma } from '../generated/prisma';

const prisma = new PrismaClient();

export class PriceCalculator {
  async calculateTotalPrice(
    roomId: number,
    checkIn: Date,
    checkOut: Date
  ): Promise<number> {
    const room = await this.getRoom(roomId);
    const dates = this.getDateRange(checkIn, checkOut);
    const [availabilities, peakSeasons] = await Promise.all([
      this.getRoomAvailabilities(roomId, dates),
      this.getPeakSeasons(roomId),
    ]);

    // Pastikan basePrice adalah number
    const basePrice =
      room.basePrice instanceof Prisma.Decimal
        ? room.basePrice.toNumber()
        : Number(room.basePrice);

    return this.sumDailyPrices(basePrice, dates, availabilities, peakSeasons);
  }

  private async getRoom(roomId: number) {
    const room = await prisma.rooms.findUnique({
      where: { id: roomId },
      select: { basePrice: true },
    });

    if (!room) throw new Error('Room not found');
    return room;
  }

  private getDateRange(start: Date, end: Date): Date[] {
    const dates: Date[] = [];
    const current = new Date(start);

    while (current < end) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return dates;
  }

  private async getRoomAvailabilities(roomId: number, dates: Date[]) {
    return await prisma.roomAvailabilities.findMany({
      where: {
        roomId,
        date: { in: dates },
      },
      select: {
        date: true,
        priceOverride: true,
      },
    });
  }

  private async getPeakSeasons(roomId: number) {
    return await prisma.peakSeasons.findMany({
      where: { roomId },
      select: {
        startDate: true,
        endDate: true,
        priceIncreaseType: true,
        value: true,
      },
    });
  }

  private sumDailyPrices(
    basePrice: number,
    dates: Date[],
    availabilities: { date: Date; priceOverride: Prisma.Decimal | null }[],
    peakSeasons: {
      startDate: Date;
      endDate: Date;
      priceIncreaseType: string;
      value: Prisma.Decimal;
    }[]
  ): number {
    return dates.reduce((total, date) => {
      // 1️⃣ Cek override harga harian
      const availability = availabilities.find(
        (a) => a.date.toDateString() === date.toDateString()
      );

      if (availability?.priceOverride) {
        return total + Number(availability.priceOverride);
      }

      // 2️⃣ Cek apakah tanggal masuk peak season
      const season = peakSeasons.find(
        (s) => date >= s.startDate && date <= s.endDate
      );

      let dailyPrice = basePrice;
      if (season) {
        const value = Number(season.value);
        if (season.priceIncreaseType === 'PERCENTAGE') {
          dailyPrice = basePrice * (1 + value / 100);
        } else if (season.priceIncreaseType === 'FIXED') {
          dailyPrice = basePrice + value;
        }
      }

      return total + dailyPrice;
    }, 0);
  }
}

export const priceCalculator = new PriceCalculator();
