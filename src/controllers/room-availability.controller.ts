import { Request, Response, NextFunction } from "express";
import { RoomAvailabilityService } from "../services/room.availability.service";

export class RoomAvailabilityController {
  private roomAvailabilityService = new RoomAvailabilityService();

  constructor() {
    this.getAvailability = this.getAvailability.bind(this);
    this.updateSingleAvailability = this.updateSingleAvailability.bind(this);
    this.bulkUpdateAvailability = this.bulkUpdateAvailability.bind(this);
  }

  async getAvailability(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.user!.id;
      const roomId = parseInt(req.params.roomId);
      const { month, year } = req.query;

      const availabilities = await this.roomAvailabilityService.getAvailability(
        roomId,
        tenantId,
        parseInt(month as string),
        parseInt(year as string)
      );

      res.status(200).json({
        success: true,
        message: "Availability retrieved successfully",
        data: availabilities,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateSingleAvailability(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const tenantId = req.user!.id;
      const roomId = parseInt(req.params.roomId);
      const { date, isAvailable, priceOverride } = req.body;

      const availability =
        await this.roomAvailabilityService.updateSingleAvailability(
          roomId,
          tenantId,
          {
            date,
            isAvailable,
            priceOverride: priceOverride
              ? parseFloat(priceOverride)
              : undefined,
          }
        );

      res.status(200).json({
        success: true,
        message: "Availability updated successfully",
        data: availability,
      });
    } catch (error) {
      next(error);
    }
  }

  async bulkUpdateAvailability(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const tenantId = req.user!.id;
      const roomId = parseInt(req.params.roomId);
      const { startDate, endDate, isAvailable, priceOverride } = req.body;

      const result = await this.roomAvailabilityService.bulkUpdateAvailability(
        roomId,
        tenantId,
        {
          startDate,
          endDate,
          isAvailable,
          priceOverride: priceOverride ? parseFloat(priceOverride) : undefined,
        }
      );

      res.status(200).json({
        success: true,
        message: result.message,
        data: {
          datesUpdated: result.datesUpdated,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}
