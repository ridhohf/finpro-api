// src/utils/room-query-builder.ts
import { PrismaClient } from "../generated/prisma";
import { Decimal } from "../generated/prisma/runtime/library";
import CloudinaryService from "../services/cloudinary.service";

const prisma = new PrismaClient();

interface GetRoomsParams {
  propertyId: number;
  search?: string;
  sortBy: string;
  sortOrder: "asc" | "desc";
}

interface CreateRoomData {
  propertyId: number;
  name: string;
  description: string;
  basePrice: number;
  maxGuests: number;
}

interface UpdateRoomData {
  name?: string;
  description?: string;
  basePrice?: number;
  maxGuests?: number;
}

export class RoomQueryBuilder {
  static buildQuery(params: GetRoomsParams) {
    const { propertyId, search, sortBy, sortOrder } = params;

    const whereClause: any = { propertyId };

    if (search) {
      whereClause.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    const orderByClause: any = {};
    if (["name", "basePrice", "maxGuests", "createdAt"].includes(sortBy)) {
      orderByClause[sortBy] = sortOrder;
    } else {
      orderByClause.name = "asc";
    }

    return { whereClause, orderByClause };
  }

  static async buildCreateData(
    data: CreateRoomData,
    file?: Express.Multer.File
  ) {
    let pictureUrl = null;
    if (file) {
      pictureUrl = await CloudinaryService.uploadImage(file);
    }

    return {
      propertyId: data.propertyId,
      name: data.name.trim(),
      description: data.description.trim(),
      basePrice: new Decimal(data.basePrice),
      maxGuests: data.maxGuests,
      picture: pictureUrl,
    };
  }

  static async buildUpdateData(
    data: UpdateRoomData,
    file?: Express.Multer.File
  ) {
    const updateData: any = {};

    if (data.name) updateData.name = data.name.trim();
    if (data.description) updateData.description = data.description.trim();
    if (data.basePrice) updateData.basePrice = new Decimal(data.basePrice);
    if (data.maxGuests) updateData.maxGuests = data.maxGuests;

    if (file) {
      updateData.picture = await CloudinaryService.uploadImage(file);
    }

    return updateData;
  }

  static buildAvailabilityOperations(
    roomId: number,
    dates: Date[],
    isAvailable: boolean,
    priceOverride?: number | null
  ) {
    return dates.map((date) =>
      prisma.roomAvailabilities.upsert({
        where: { roomId_date: { roomId, date } },
        update: {
          isAvailable,
          priceOverride: priceOverride ? new Decimal(priceOverride) : null,
        },
        create: {
          roomId,
          date,
          isAvailable,
          priceOverride: priceOverride ? new Decimal(priceOverride) : null,
        },
      })
    );
  }

  static getRoomIncludes() {
    return {
      property: { select: { name: true } },
      _count: { select: { reservations: true } },
    };
  }

  static getRoomDetailIncludes() {
    return {
      property: { select: { name: true, tenantId: true } },
      peakSeasons: { orderBy: { startDate: "asc" as const } },
      roomAvailabilities: {
        where: { date: { gte: new Date() } },
        orderBy: { date: "asc" as const },
        take: 30,
      },
      _count: { select: { reservations: true } },
    };
  }

  static getRoomPricingIncludes(startDate: Date, endDate: Date) {
    return {
      peakSeasons: {
        where: {
          OR: [
            {
              startDate: { lte: endDate },
              endDate: { gte: startDate },
            },
          ],
        },
      },
      roomAvailabilities: {
        where: {
          date: {
            gte: startDate,
            lte: endDate,
          },
        },
      },
    };
  }

  static formatResponse(
    rooms: any[],
    page: number,
    limit: number,
    total: number
  ) {
    return {
      rooms,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    };
  }
}
