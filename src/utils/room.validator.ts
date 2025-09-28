// src/utils/room-validator.ts
import { PrismaClient } from '../generated/prisma';
import { AppError } from './app.error';

const prisma = new PrismaClient();

export class RoomValidator {
  static async findRoomById(id: number, propertyId: number) {
    const room = await prisma.rooms.findFirst({
      where: { id, propertyId },
    });

    if (!room) {
      throw new AppError('Room not found', 404);
    }

    return room;
  }

  static async verifyPropertyOwnership(propertyId: number, tenantId: number) {
    const property = await prisma.properties.findFirst({
      where: { id: propertyId, tenantId },
    });

    if (!property) {
      throw new AppError('Property not found or access denied', 404);
    }

    return property;
  }
}