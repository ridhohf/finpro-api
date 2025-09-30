import { Request, Response, NextFunction } from "express";
import { RoomService } from "../services/room.service";

export class RoomController {
  private roomService = new RoomService();

  constructor() {
    this.getRoomsByProperty = this.getRoomsByProperty.bind(this);
    this.getRoomById = this.getRoomById.bind(this);
    this.createRoom = this.createRoom.bind(this);
    this.updateRoom = this.updateRoom.bind(this);
    this.deleteRoom = this.deleteRoom.bind(this);
  }

  async getRoomsByProperty(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.user!.id;
      const propertyId = parseInt(req.params.propertyId);

      const rooms = await this.roomService.getRoomsByProperty(
        propertyId,
        tenantId
      );

      res.status(200).json({
        success: true,
        message: "Rooms retrieved successfully",
        data: rooms,
      });
    } catch (error) {
      next(error);
    }
  }

  async getRoomById(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.user!.id;
      const roomId = parseInt(req.params.id);

      const room = await this.roomService.getRoomById(roomId, tenantId);

      res.status(200).json({
        success: true,
        message: "Room retrieved successfully",
        data: room,
      });
    } catch (error) {
      next(error);
    }
  }

  async createRoom(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.user!.id;
      const { propertyId, name, description, basePrice, maxGuests } = req.body;
      const images = req.files as Express.Multer.File[];

      const room = await this.roomService.createRoom(
        tenantId,
        {
          propertyId: parseInt(propertyId),
          name,
          description,
          basePrice: parseFloat(basePrice),
          maxGuests: parseInt(maxGuests),
        },
        images || []
      );

      res.status(201).json({
        success: true,
        message: "Room created successfully",
        data: room,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateRoom(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.user!.id;
      const roomId = parseInt(req.params.id);
      const { name, description, basePrice, maxGuests } = req.body;
      const images = req.files as Express.Multer.File[];

      const room = await this.roomService.updateRoom(
        roomId,
        tenantId,
        {
          name,
          description,
          basePrice: basePrice ? parseFloat(basePrice) : undefined,
          maxGuests: maxGuests ? parseInt(maxGuests) : undefined,
        },
        images
      );

      res.status(200).json({
        success: true,
        message: "Room updated successfully",
        data: room,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteRoom(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.user!.id;
      const roomId = parseInt(req.params.id);

      const result = await this.roomService.deleteRoom(roomId, tenantId);

      res.status(200).json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }
}
