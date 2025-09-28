// src/controllers/room.controller.ts
import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/app.error";
import RoomService from "../services/room.service";
import { AuthRequest } from "../middlewares/jwt-verify.middleware";

export class RoomController {
  constructor() {
    this.getRooms = this.getRooms.bind(this);
    this.getRoomById = this.getRoomById.bind(this);
    this.createRoom = this.createRoom.bind(this);
    this.updateRoom = this.updateRoom.bind(this);
    this.deleteRoom = this.deleteRoom.bind(this);
    this.getRoomAvailability = this.getRoomAvailability.bind(this);
    this.updateRoomAvailability = this.updateRoomAvailability.bind(this);
    this.getRoomPricing = this.getRoomPricing.bind(this);
  }

  async getRooms(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError("User not authenticated", 401);

      const { propertyId } = req.params;
      const {
        page = 1,
        limit = 10,
        search,
        sortBy = "name",
        sortOrder = "asc",
      } = req.query;

      const result = await RoomService.getRooms({
        propertyId: parseInt(propertyId),
        tenantId: req.user.userId,
        page: parseInt(page as string),
        limit: parseInt(limit as string),
        search: search as string,
        sortBy: sortBy as string,
        sortOrder: sortOrder as "asc" | "desc",
      });

      res.status(200).json({
        success: true,
        message: "Rooms retrieved successfully",
        data: result.rooms,
        pagination: {
          page: result.page,
          limit: result.limit,
          total: result.total,
          totalPages: result.totalPages,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async getRoomById(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError("User not authenticated", 401);

      const { propertyId, roomId } = req.params;

      const room = await RoomService.getRoomById(
        parseInt(roomId),
        parseInt(propertyId),
        req.user.userId
      );

      if (!room) {
        throw new AppError("Room not found", 404);
      }

      res.status(200).json({
        success: true,
        message: "Room retrieved successfully",
        data: room,
      });
    } catch (error) {
      next(error);
    }
  }

  async createRoom(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError("User not authenticated", 401);

      const { propertyId } = req.params;
      const roomData = {
        ...req.body,
        propertyId: parseInt(propertyId),
        basePrice: parseFloat(req.body.basePrice),
        maxGuests: parseInt(req.body.maxGuests),
      };

      const room = await RoomService.createRoom(
        roomData,
        req.user.userId,
        req.file
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

  async updateRoom(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError("User not authenticated", 401);

      const { propertyId, roomId } = req.params;
      const updateData = { ...req.body };

      if (updateData.basePrice) {
        updateData.basePrice = parseFloat(updateData.basePrice);
      }
      if (updateData.maxGuests) {
        updateData.maxGuests = parseInt(updateData.maxGuests);
      }

      const room = await RoomService.updateRoom(
        parseInt(roomId),
        parseInt(propertyId),
        req.user.userId,
        updateData,
        req.file
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

  async deleteRoom(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError("User not authenticated", 401);

      const { propertyId, roomId } = req.params;

      await RoomService.deleteRoom(
        parseInt(roomId),
        parseInt(propertyId),
        req.user.userId
      );

      res.status(200).json({
        success: true,
        message: "Room deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  async getRoomAvailability(
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) {
    try {
      if (!req.user) throw new AppError("User not authenticated", 401);

      const { propertyId, roomId } = req.params;
      const { startDate, endDate } = req.query;

      if (!startDate || !endDate) {
        throw new AppError("Start date and end date are required", 400);
      }

      const availability = await RoomService.getRoomAvailability(
        parseInt(roomId),
        parseInt(propertyId),
        req.user.userId,
        new Date(startDate as string),
        new Date(endDate as string)
      );

      res.status(200).json({
        success: true,
        message: "Room availability retrieved successfully",
        data: availability,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateRoomAvailability(
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) {
    try {
      if (!req.user) throw new AppError("User not authenticated", 401);

      const { propertyId, roomId } = req.params;
      const { dates, isAvailable, priceOverride } = req.body;

      if (!Array.isArray(dates) || dates.length === 0) {
        throw new AppError("Dates array is required", 400);
      }

      await RoomService.updateRoomAvailability(
        parseInt(roomId),
        parseInt(propertyId),
        req.user.userId,
        dates.map((date) => new Date(date)),
        typeof isAvailable === "boolean" ? isAvailable : true,
        priceOverride ? parseFloat(priceOverride) : null
      );

      res.status(200).json({
        success: true,
        message: "Room availability updated successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  async getRoomPricing(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const { propertyId, roomId } = req.params;
      const { startDate, endDate } = req.query;

      if (!startDate || !endDate) {
        throw new AppError("Start date and end date are required", 400);
      }

      const pricing = await RoomService.getRoomPricing(
        parseInt(roomId),
        new Date(startDate as string),
        new Date(endDate as string)
      );

      res.status(200).json({
        success: true,
        message: "Room pricing retrieved successfully",
        data: pricing,
      });
    } catch (error) {
      next(error);
    }
  }
}
