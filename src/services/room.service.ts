// src/services/room.service.ts
import { PrismaClient } from "../generated/prisma";
import { AppError } from "../utils/app.error";
import logger from "../utils/logger";
import { RoomPricingCalculator } from "../utils/room-pricing-calculator";
import { RoomQueryBuilder } from "../utils/room-query-builder";
import { RoomValidator } from "../utils/room.validator";

const prisma = new PrismaClient();

interface GetRoomsParams {
  propertyId: number;
  tenantId: number;
  page: number;
  limit: number;
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

class RoomService {
  async getRooms(params: GetRoomsParams) {
    const { propertyId, tenantId, page, limit } = params;
    const offset = (page - 1) * limit;

    await RoomValidator.verifyPropertyOwnership(propertyId, tenantId);

    const { whereClause, orderByClause } = RoomQueryBuilder.buildQuery(params);

    const [rooms, total] = await Promise.all([
      prisma.rooms.findMany({
        where: whereClause,
        orderBy: orderByClause,
        skip: offset,
        take: limit,
        include: RoomQueryBuilder.getRoomIncludes(),
      }),
      prisma.rooms.count({ where: whereClause }),
    ]);

    return RoomQueryBuilder.formatResponse(rooms, page, limit, total);
  }

  async getRoomById(id: number, propertyId: number, tenantId: number) {
    await RoomValidator.verifyPropertyOwnership(propertyId, tenantId);

    return await prisma.rooms.findFirst({
      where: { id, propertyId },
      include: RoomQueryBuilder.getRoomDetailIncludes(),
    });
  }

  async createRoom(
    data: CreateRoomData,
    tenantId: number,
    file?: Express.Multer.File
  ) {
    const { propertyId, name, description, basePrice, maxGuests } = data;

    await RoomValidator.verifyPropertyOwnership(propertyId, tenantId);

    const roomData = await RoomQueryBuilder.buildCreateData(data, file);

    const room = await prisma.rooms.create({
      data: roomData,
      include: RoomQueryBuilder.getRoomIncludes(),
    });

    logger.info(
      `Room created: ${name} for property ${propertyId} by tenant ${tenantId}`
    );
    return room;
  }

  async updateRoom(
    id: number,
    propertyId: number,
    tenantId: number,
    data: UpdateRoomData,
    file?: Express.Multer.File
  ) {
    await RoomValidator.verifyPropertyOwnership(propertyId, tenantId);
    await RoomValidator.findRoomById(id, propertyId);

    const updateData = await RoomQueryBuilder.buildUpdateData(data, file);

    const room = await prisma.rooms.update({
      where: { id },
      data: updateData,
      include: RoomQueryBuilder.getRoomIncludes(),
    });

    logger.info(`Room updated: ${room.name} by tenant ${tenantId}`);
    return room;
  }

  async deleteRoom(id: number, propertyId: number, tenantId: number) {
    await RoomValidator.verifyPropertyOwnership(propertyId, tenantId);

    const room = await prisma.rooms.findFirst({
      where: { id, propertyId },
      include: { _count: { select: { reservations: true } } },
    });

    if (!room) {
      throw new AppError("Room not found", 404);
    }

    if (room._count.reservations > 0) {
      throw new AppError("Cannot delete room with existing reservations", 400);
    }

    await prisma.rooms.delete({ where: { id } });
    logger.info(`Room deleted: ${room.name} by tenant ${tenantId}`);
  }

  async getRoomAvailability(
    roomId: number,
    propertyId: number,
    tenantId: number,
    startDate: Date,
    endDate: Date
  ) {
    await RoomValidator.verifyPropertyOwnership(propertyId, tenantId);
    await RoomValidator.findRoomById(roomId, propertyId);

    return await prisma.roomAvailabilities.findMany({
      where: {
        roomId,
        date: { gte: startDate, lte: endDate },
      },
      orderBy: { date: "asc" },
    });
  }

  async updateRoomAvailability(
    roomId: number,
    propertyId: number,
    tenantId: number,
    dates: Date[],
    isAvailable: boolean,
    priceOverride?: number | null
  ) {
    await RoomValidator.verifyPropertyOwnership(propertyId, tenantId);
    await RoomValidator.findRoomById(roomId, propertyId);

    const operations = RoomQueryBuilder.buildAvailabilityOperations(
      roomId,
      dates,
      isAvailable,
      priceOverride
    );

    await prisma.$transaction(operations);
    logger.info(
      `Room availability updated for room ${roomId}, ${dates.length} dates`
    );
  }

  async getRoomPricing(roomId: number, startDate: Date, endDate: Date) {
    const room = await prisma.rooms.findUnique({
      where: { id: roomId },
      include: RoomQueryBuilder.getRoomPricingIncludes(startDate, endDate),
    });

    if (!room) {
      throw new AppError("Room not found", 404);
    }

    const pricing = RoomPricingCalculator.calculate(room, startDate, endDate);

    return {
      room: { id: room.id, name: room.name, basePrice: room.basePrice },
      pricing,
    };
  }
}

export default new RoomService();
