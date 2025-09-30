import prisma from "../utils/prisma";
import { AppError } from "../utils/app.error";
import { Prisma } from "../generated/prisma";

interface CreatePeakSeasonDTO {
  roomId: number;
  name: string;
  startDate: string;
  endDate: string;
  priceIncreaseType: "percentage" | "nominal";
  value: number;
}

interface UpdatePeakSeasonDTO {
  name?: string;
  startDate?: string;
  endDate?: string;
  priceIncreaseType?: "percentage" | "nominal";
  value?: number;
}

export class PeakSeasonService {
  async getPeakSeasons(roomId: number, tenantId: number) {
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

    const peakSeasons = await prisma.peakSeasons.findMany({
      where: { roomId },
      orderBy: { startDate: "asc" },
    });

    return peakSeasons;
  }

  async getPeakSeasonById(peakSeasonId: number, tenantId: number) {
    const peakSeason = await prisma.peakSeasons.findFirst({
      where: {
        id: peakSeasonId,
        room: {
          property: {
            tenantId,
          },
        },
      },
      include: {
        room: {
          select: {
            id: true,
            name: true,
            basePrice: true,
          },
        },
      },
    });

    if (!peakSeason) {
      throw new AppError("Peak season not found", 404);
    }

    return peakSeason;
  }

  async createPeakSeason(tenantId: number, data: CreatePeakSeasonDTO) {
    // Verify room ownership
    const room = await prisma.rooms.findFirst({
      where: {
        id: data.roomId,
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

    // Check for overlapping peak seasons
    const overlapping = await prisma.peakSeasons.findFirst({
      where: {
        roomId: data.roomId,
        OR: [
          {
            AND: [
              { startDate: { lte: startDate } },
              { endDate: { gte: startDate } },
            ],
          },
          {
            AND: [
              { startDate: { lte: endDate } },
              { endDate: { gte: endDate } },
            ],
          },
          {
            AND: [
              { startDate: { gte: startDate } },
              { endDate: { lte: endDate } },
            ],
          },
        ],
      },
    });

    if (overlapping) {
      throw new AppError("Date range overlaps with existing peak season", 400);
    }

    const peakSeason = await prisma.peakSeasons.create({
      data: {
        roomId: data.roomId,
        name: data.name,
        startDate,
        endDate,
        priceIncreaseType: data.priceIncreaseType,
        value: new Prisma.Decimal(data.value),
      },
    });

    return peakSeason;
  }

  async updatePeakSeason(
    peakSeasonId: number,
    tenantId: number,
    data: UpdatePeakSeasonDTO
  ) {
    // Verify ownership
    const peakSeason = await prisma.peakSeasons.findFirst({
      where: {
        id: peakSeasonId,
        room: {
          property: {
            tenantId,
          },
        },
      },
    });

    if (!peakSeason) {
      throw new AppError("Peak season not found", 404);
    }

    const startDate = data.startDate
      ? new Date(data.startDate)
      : peakSeason.startDate;
    const endDate = data.endDate ? new Date(data.endDate) : peakSeason.endDate;

    if (startDate > endDate) {
      throw new AppError("Start date must be before end date", 400);
    }

    // Check for overlapping (excluding current peak season)
    if (data.startDate || data.endDate) {
      const overlapping = await prisma.peakSeasons.findFirst({
        where: {
          roomId: peakSeason.roomId,
          id: { not: peakSeasonId },
          OR: [
            {
              AND: [
                { startDate: { lte: startDate } },
                { endDate: { gte: startDate } },
              ],
            },
            {
              AND: [
                { startDate: { lte: endDate } },
                { endDate: { gte: endDate } },
              ],
            },
            {
              AND: [
                { startDate: { gte: startDate } },
                { endDate: { lte: endDate } },
              ],
            },
          ],
        },
      });

      if (overlapping) {
        throw new AppError(
          "Date range overlaps with existing peak season",
          400
        );
      }
    }

    const updatedPeakSeason = await prisma.peakSeasons.update({
      where: { id: peakSeasonId },
      data: {
        name: data.name || peakSeason.name,
        startDate,
        endDate,
        priceIncreaseType:
          data.priceIncreaseType || peakSeason.priceIncreaseType,
        value: data.value ? new Prisma.Decimal(data.value) : peakSeason.value,
      },
    });

    return updatedPeakSeason;
  }

  async deletePeakSeason(peakSeasonId: number, tenantId: number) {
    // Verify ownership
    const peakSeason = await prisma.peakSeasons.findFirst({
      where: {
        id: peakSeasonId,
        room: {
          property: {
            tenantId,
          },
        },
      },
    });

    if (!peakSeason) {
      throw new AppError("Peak season not found", 404);
    }

    await prisma.peakSeasons.delete({
      where: { id: peakSeasonId },
    });

    return { message: "Peak season deleted successfully" };
  }
}
