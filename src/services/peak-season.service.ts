// src/services/peak-season.service.ts
import { PrismaClient } from "../generated/prisma";
import { Decimal } from "../generated/prisma/runtime/library";
import { AppError } from "../utils/app.error";
import logger from "../utils/logger";
import { PeakSeasonQueryBuilder } from "../utils/peak-season-query-builder";

const prisma = new PrismaClient();

interface GetPeakSeasonsParams {
  roomId: number;
  propertyId: number;
  tenantId: number;
  page: number;
  limit: number;
  search?: string;
  year?: number;
  sortBy: string;
  sortOrder: "asc" | "desc";
}

interface CreatePeakSeasonData {
  roomId: number;
  name: string;
  startDate: Date;
  endDate: Date;
  priceIncreaseType: "PERCENTAGE" | "FIXED";
  value: number;
}

interface UpdatePeakSeasonData {
  name?: string;
  startDate?: Date;
  endDate?: Date;
  priceIncreaseType?: "PERCENTAGE" | "FIXED";
  value?: number;
}

class PeakSeasonService {
  async getPeakSeasons(params: GetPeakSeasonsParams) {
    const { roomId, propertyId, tenantId, page, limit } = params;
    const offset = (page - 1) * limit;

    await this.verifyRoomOwnership(roomId, propertyId, tenantId);

    const { whereClause, orderByClause } =
      PeakSeasonQueryBuilder.buildQuery(params);

    const [peakSeasons, total] = await Promise.all([
      prisma.peakSeasons.findMany({
        where: whereClause,
        orderBy: orderByClause,
        skip: offset,
        take: limit,
        include: {
          room: { select: { name: true, basePrice: true } },
        },
      }),
      prisma.peakSeasons.count({ where: whereClause }),
    ]);

    return {
      peakSeasons,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    };
  }

  async getPeakSeasonById(
    id: number,
    roomId: number,
    propertyId: number,
    tenantId: number
  ) {
    await this.verifyRoomOwnership(roomId, propertyId, tenantId);

    return await prisma.peakSeasons.findFirst({
      where: { id, roomId },
      include: {
        room: { select: { name: true, basePrice: true } },
      },
    });
  }

  async createPeakSeason(
    data: CreatePeakSeasonData,
    propertyId: number,
    tenantId: number
  ) {
    const { roomId, name, startDate, endDate, priceIncreaseType, value } = data;

    await this.verifyRoomOwnership(roomId, propertyId, tenantId);
    await this.checkOverlappingSeasons(roomId, startDate, endDate);

    const peakSeason = await prisma.peakSeasons.create({
      data: {
        roomId,
        name: name.trim(),
        startDate,
        endDate,
        priceIncreaseType,
        value: new Decimal(value),
      },
      include: {
        room: { select: { name: true, basePrice: true } },
      },
    });

    logger.info(
      `Peak season created: ${name} for room ${roomId} by tenant ${tenantId}`
    );
    return peakSeason;
  }

  async updatePeakSeason(
    id: number,
    roomId: number,
    propertyId: number,
    tenantId: number,
    data: UpdatePeakSeasonData
  ) {
    await this.verifyRoomOwnership(roomId, propertyId, tenantId);

    const existingPeakSeason = await this.findPeakSeasonById(id, roomId);

    const newStartDate = data.startDate || existingPeakSeason.startDate;
    const newEndDate = data.endDate || existingPeakSeason.endDate;

    if (data.startDate || data.endDate) {
      await this.checkOverlappingSeasons(roomId, newStartDate, newEndDate, id);
    }

    const updateData = PeakSeasonQueryBuilder.buildUpdateData(data);

    const peakSeason = await prisma.peakSeasons.update({
      where: { id },
      data: updateData,
      include: {
        room: { select: { name: true, basePrice: true } },
      },
    });

    logger.info(
      `Peak season updated: ${peakSeason.name} by tenant ${tenantId}`
    );
    return peakSeason;
  }

  async deletePeakSeason(
    id: number,
    roomId: number,
    propertyId: number,
    tenantId: number
  ) {
    await this.verifyRoomOwnership(roomId, propertyId, tenantId);

    const peakSeason = await this.findPeakSeasonById(id, roomId);

    await prisma.peakSeasons.delete({ where: { id } });
    logger.info(
      `Peak season deleted: ${peakSeason.name} by tenant ${tenantId}`
    );
  }

  private async findPeakSeasonById(id: number, roomId: number) {
    const peakSeason = await prisma.peakSeasons.findFirst({
      where: { id, roomId },
    });

    if (!peakSeason) {
      throw new AppError("Peak season not found", 404);
    }

    return peakSeason;
  }

  private async checkOverlappingSeasons(
    roomId: number,
    startDate: Date,
    endDate: Date,
    excludeId?: number
  ) {
    const whereClause: any = {
      roomId,
      OR: [
        { startDate: { lte: startDate }, endDate: { gte: startDate } },
        { startDate: { lte: endDate }, endDate: { gte: endDate } },
        { startDate: { gte: startDate }, endDate: { lte: endDate } },
      ],
    };

    if (excludeId) {
      whereClause.NOT = { id: excludeId };
    }

    const overlapping = await prisma.peakSeasons.findFirst({
      where: whereClause,
    });

    if (overlapping) {
      throw new AppError(
        "Peak season overlaps with existing peak season period",
        400
      );
    }
  }

  private async verifyRoomOwnership(
    roomId: number,
    propertyId: number,
    tenantId: number
  ) {
    const room = await prisma.rooms.findFirst({
      where: {
        id: roomId,
        propertyId,
        property: { tenantId },
      },
    });

    if (!room) {
      throw new AppError("Room not found or access denied", 404);
    }

    return room;
  }
}

export default new PeakSeasonService();
