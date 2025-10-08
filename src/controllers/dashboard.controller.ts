import { Request, Response, NextFunction } from "express";
import { DashboardService } from "../services/dashboard.service";

export class DashboardController {
  private dashboardService = new DashboardService();

  constructor() {
    this.getTenantDashboard = this.getTenantDashboard.bind(this);
  }

  async getTenantDashboard(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.user!.id;

      const dashboard = await this.dashboardService.getTenantDashboard(
        tenantId
      );

      res.status(200).json({
        success: true,
        message: "Dashboard data retrieved successfully",
        data: dashboard,
      });
    } catch (error) {
      next(error);
    }
  }
}