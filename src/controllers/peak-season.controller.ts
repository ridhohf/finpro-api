// src/controllers/peak-season.controller.ts
import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/app.error";
import PeakSeasonService from "../services/peak-season.service";
import { AuthRequest } from "../middlewares/jwt-verify.middleware";

export class PeakSeasonController {
  constructor() {
    this.getPeakSeasons = this.getPeakSeasons.bind(this);
    this.getPeakSeasonById = this.getPeakSeasonById.bind(this);
    this.createPeakSeason = this.createPeakSeason.bind(this);
    this.updatePeakSeason = this.updatePeakSeason.bind(this);
    this.deletePeakSeason = this.deletePeakSeason.bind(this);
  }

  async getPeakSeasons(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError("User not authenticated", 401);

      const { propertyId, roomId } = req.params;
      const {
        page = 1,
        limit = 10,
        search,
        year,
        sortBy = "startDate",
        sortOrder = "asc",
      } = req.query;

      const result = await PeakSeasonService.getPeakSeasons({
        roomId: parseInt(roomId),
        propertyId: parseInt(propertyId),
        tenantId: req.user.userId,
        page: parseInt(page as string),
        limit: parseInt(limit as string),
        search: search as string,
        year: year ? parseInt(year as string) : undefined,
        sortBy: sortBy as string,
        sortOrder: sortOrder as "asc" | "desc",
      });

      res.status(200).json({
        success: true,
        message: "Peak seasons retrieved successfully",
        data: result.peakSeasons,
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

  async getPeakSeasonById(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError("User not authenticated", 401);

      const { propertyId, roomId, seasonId } = req.params;

      const peakSeason = await PeakSeasonService.getPeakSeasonById(
        parseInt(seasonId),
        parseInt(roomId),
        parseInt(propertyId),
        req.user.userId
      );

      if (!peakSeason) {
        throw new AppError("Peak season not found", 404);
      }

      res.status(200).json({
        success: true,
        message: "Peak season retrieved successfully",
        data: peakSeason,
      });
    } catch (error) {
      next(error);
    }
  }

  async createPeakSeason(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError("User not authenticated", 401);

      const { propertyId, roomId } = req.params;
      const { name, startDate, endDate, priceIncreaseType, value } = req.body;

      const peakSeasonData = {
        roomId: parseInt(roomId),
        name,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        priceIncreaseType,
        value: parseFloat(value),
      };

      const peakSeason = await PeakSeasonService.createPeakSeason(
        peakSeasonData,
        parseInt(propertyId),
        req.user.userId
      );

      res.status(201).json({
        success: true,
        message: "Peak season created successfully",
        data: peakSeason,
      });
    } catch (error) {
      next(error);
    }
  }

  async updatePeakSeason(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError("User not authenticated", 401);

      const { propertyId, roomId, seasonId } = req.params;
      const updateData = { ...req.body };

      if (updateData.startDate) {
        updateData.startDate = new Date(updateData.startDate);
      }
      if (updateData.endDate) {
        updateData.endDate = new Date(updateData.endDate);
      }
      if (updateData.value) {
        updateData.value = parseFloat(updateData.value);
      }

      const peakSeason = await PeakSeasonService.updatePeakSeason(
        parseInt(seasonId),
        parseInt(roomId),
        parseInt(propertyId),
        req.user.userId,
        updateData
      );

      res.status(200).json({
        success: true,
        message: "Peak season updated successfully",
        data: peakSeason,
      });
    } catch (error) {
      next(error);
    }
  }

  async deletePeakSeason(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError("User not authenticated", 401);

      const { propertyId, roomId, seasonId } = req.params;

      await PeakSeasonService.deletePeakSeason(
        parseInt(seasonId),
        parseInt(roomId),
        parseInt(propertyId),
        req.user.userId
      );

      res.status(200).json({
        success: true,
        message: "Peak season deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}
