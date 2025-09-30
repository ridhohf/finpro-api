import { Request, Response, NextFunction } from "express";
import { PeakSeasonService } from "../services/peak-season.service";

export class PeakSeasonController {
  private peakSeasonService = new PeakSeasonService();

  constructor() {
    this.getPeakSeasons = this.getPeakSeasons.bind(this);
    this.getPeakSeasonById = this.getPeakSeasonById.bind(this);
    this.createPeakSeason = this.createPeakSeason.bind(this);
    this.updatePeakSeason = this.updatePeakSeason.bind(this);
    this.deletePeakSeason = this.deletePeakSeason.bind(this);
  }

  async getPeakSeasons(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.user!.id;
      const roomId = parseInt(req.params.roomId);

      const peakSeasons = await this.peakSeasonService.getPeakSeasons(
        roomId,
        tenantId
      );

      res.status(200).json({
        success: true,
        message: "Peak seasons retrieved successfully",
        data: peakSeasons,
      });
    } catch (error) {
      next(error);
    }
  }

  async getPeakSeasonById(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.user!.id;
      const peakSeasonId = parseInt(req.params.id);

      const peakSeason = await this.peakSeasonService.getPeakSeasonById(
        peakSeasonId,
        tenantId
      );

      res.status(200).json({
        success: true,
        message: "Peak season retrieved successfully",
        data: peakSeason,
      });
    } catch (error) {
      next(error);
    }
  }

  async createPeakSeason(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.user!.id;
      const { roomId, name, startDate, endDate, priceIncreaseType, value } =
        req.body;

      const peakSeason = await this.peakSeasonService.createPeakSeason(
        tenantId,
        {
          roomId: parseInt(roomId),
          name,
          startDate,
          endDate,
          priceIncreaseType,
          value: parseFloat(value),
        }
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

  async updatePeakSeason(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.user!.id;
      const peakSeasonId = parseInt(req.params.id);
      const { name, startDate, endDate, priceIncreaseType, value } = req.body;

      const peakSeason = await this.peakSeasonService.updatePeakSeason(
        peakSeasonId,
        tenantId,
        {
          name,
          startDate,
          endDate,
          priceIncreaseType,
          value: value ? parseFloat(value) : undefined,
        }
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

  async deletePeakSeason(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.user!.id;
      const peakSeasonId = parseInt(req.params.id);

      const result = await this.peakSeasonService.deletePeakSeason(
        peakSeasonId,
        tenantId
      );

      res.status(200).json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }
}
