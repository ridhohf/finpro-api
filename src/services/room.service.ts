import prisma from "../utils/prisma";
import { AppError } from "../utils/app.error";
import { CloudinaryUtil } from "../utils/cloudinary.util";
import { Prisma } from "../generated/prisma";

interface CreateRoomDTO {
  propertyId: number;
  name: string;
  description: string;
  basePrice: number;
  maxGuests: number;
}

interface UpdateRoomDTO {
  name?: string;
  description?: string;
  basePrice?: number;
  maxGuests?: number;
}

export class RoomService {
  async getRoomsByProperty(propertyId: number, tenantId: number) {
    // Verify property ownership
    const property = await prisma.properties.findFirst({
      where: {
        id: propertyId,
        tenantId,
      },
    });

    if (!property) {
      throw new AppError("Property not found", 404);
    }

    const rooms = await prisma.rooms.findMany({
      where: { propertyId },
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: {
            reservations: true,
            peakSeasons: true,
          },
        },
      },
    });

    return rooms;
  }

  async getRoomById(roomId: number, tenantId: number) {
    const room = await prisma.rooms.findFirst({
      where: {
        id: roomId,
        property: {
          tenantId,
        },
      },
      include: {
        property: {
          select: {
            id: true,
            name: true,
            tenantId: true,
          },
        },
        peakSeasons: {
          orderBy: { startDate: "asc" },
        },
        _count: {
          select: {
            reservations: true,
          },
        },
      },
    });

    if (!room) {
      throw new AppError("Room not found", 404);
    }

    return room;
  }

  async createRoom(
    tenantId: number,
    data: CreateRoomDTO,
    images: Express.Multer.File[]
  ) {
    // Verify property ownership
    const property = await prisma.properties.findFirst({
      where: {
        id: data.propertyId,
        tenantId,
      },
    });

    if (!property) {
      throw new AppError("Property not found", 404);
    }

    // Upload images
    const imageUrls: string[] = [];
    for (const image of images) {
      const url = await CloudinaryUtil.uploadImage(image, "rooms");
      imageUrls.push(url);
    }

    // Create room
    const room = await prisma.rooms.create({
      data: {
        propertyId: data.propertyId,
        name: data.name,
        description: data.description,
        basePrice: new Prisma.Decimal(data.basePrice),
        maxGuests: data.maxGuests,
        picture: imageUrls,
      },
      include: {
        property: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return room;
  }

  async updateRoom(
    roomId: number,
    tenantId: number,
    data: UpdateRoomDTO,
    images?: Express.Multer.File[]
  ) {
    // Verify ownership
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

    // Upload new images if provided
    let imageUrls = room.picture as string[];
    if (images && images.length > 0) {
      const newImageUrls: string[] = [];
      for (const image of images) {
        const url = await CloudinaryUtil.uploadImage(image, "rooms");
        newImageUrls.push(url);
      }
      imageUrls = [...imageUrls, ...newImageUrls];
    }

    // Update room
    const updatedRoom = await prisma.rooms.update({
      where: { id: roomId },
      data: {
        name: data.name || room.name,
        description: data.description || room.description,
        basePrice: data.basePrice
          ? new Prisma.Decimal(data.basePrice)
          : room.basePrice,
        maxGuests: data.maxGuests || room.maxGuests,
        picture: imageUrls,
      },
      include: {
        property: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return updatedRoom;
  }

  async deleteRoom(roomId: number, tenantId: number) {
    // Verify ownership
    const room = await prisma.rooms.findFirst({
      where: {
        id: roomId,
        property: {
          tenantId,
        },
      },
      include: {
        _count: {
          select: {
            reservations: true,
          },
        },
      },
    });

    if (!room) {
      throw new AppError("Room not found", 404);
    }

    // Check for reservations
    if (room._count.reservations > 0) {
      throw new AppError("Cannot delete room with existing reservations", 400);
    }

    await prisma.rooms.delete({
      where: { id: roomId },
    });

    return { message: "Room deleted successfully" };
  }
}
