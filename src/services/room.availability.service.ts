import prisma from "../utils/prisma";
import { AppError } from "../utils/app.error";
import { Prisma } from "../generated/prisma";

interface UpdateAvailabilityDTO {
  date: string;
  isAvailable: boolean;
  priceOverride?: number;
}

interface BulkUpdateAvailabilityDTO {
  startDate: string;
  endDate: string;
  isAvailable: boolean;
  priceOverride?: number;
}

export class RoomAvailabilityService {
  async getAvailability(
    roomId: number,
    tenantId: number,
    month: number,
    year: number
  ) {
    // Verify room ownership
    const room = await prisma.rooms.findFirst({
      where: {
        id: roomId,
        property: {
          tenantId,
        },
      },
    });

    if (!room) {
      throw new AppError("Room not found", 404);
    }

    // Calculate date range for the month
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);

    const availabilities = await prisma.roomAvailabilities.findMany({
      where: {
        roomId,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      orderBy: {
        date: "asc",
      },
    });

    return availabilities;
  }

  async updateSingleAvailability(
    roomId: number,
    tenantId: number,
    data: UpdateAvailabilityDTO
  ) {
    // Verify room ownership
    const room = await prisma.rooms.findFirst({
      where: {
        id: roomId,
        property: {
          tenantId,
        },
      },
    });

    if (!room) {
      throw new AppError("Room not found", 404);
    }

    const date = new Date(data.date);

    // Upsert availability
    const availability = await prisma.roomAvailabilities.upsert({
      where: {
        roomId_date: {
          roomId,
          date,
        },
      },
      update: {
        isAvailable: data.isAvailable,
        priceOverride: data.priceOverride
          ? new Prisma.Decimal(data.priceOverride)
          : null,
      },
      create: {
        roomId,
        date,
        isAvailable: data.isAvailable,
        priceOverride: data.priceOverride
          ? new Prisma.Decimal(data.priceOverride)
          : null,
      },
    });

    return availability;
  }

  async bulkUpdateAvailability(
    roomId: number,
    tenantId: number,
    data: BulkUpdateAvailabilityDTO
  ) {
    // Verify room ownership
    const room = await prisma.rooms.findFirst({
      where: {
        id: roomId,
        property: {
          tenantId,
        },
      },
    });

    if (!room) {
      throw new AppError("Room not found", 404);
    }

    const startDate = new Date(data.startDate);
    const endDate = new Date(data.endDate);

    if (startDate > endDate) {
      throw new AppError("Start date must be before end date", 400);
    }

    // Generate dates between start and end
    const dates: Date[] = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Bulk upsert
    const operations = dates.map((date) =>
      prisma.roomAvailabilities.upsert({
        where: {
          roomId_date: {
            roomId,
            date,
          },
        },
        update: {
          isAvailable: data.isAvailable,
          priceOverride: data.priceOverride
            ? new Prisma.Decimal(data.priceOverride)
            : null,
        },
        create: {
          roomId,
          date,
          isAvailable: data.isAvailable,
          priceOverride: data.priceOverride
            ? new Prisma.Decimal(data.priceOverride)
            : null,
        },
      })
    );

    await prisma.$transaction(operations);

    return {
      message: `Updated availability for ${dates.length} dates`,
      datesUpdated: dates.length,
    };
  }
}
