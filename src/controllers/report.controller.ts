import { Request, Response } from 'express';
import { ReportService } from '../services/report.service';

export class ReportController {
  private reportService = new ReportService();

  getSalesReport = async (req: Request, res: Response) => {
    try {
      const { tenantId } = req.params;
      const { startDate, endDate, sortBy, propertyId } = req.query;

      const filters = {
        startDate: startDate as string,
        endDate: endDate as string,
        sortBy: (sortBy as string) || 'date',
        propertyId: propertyId ? parseInt(propertyId as string) : undefined,
      };

      const report = await this.reportService.getSalesReport(
        parseInt(tenantId),
        filters
      );

      res.json({
        success: true,
        message: 'Sales report generated',
        data: report,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Error',
      });
    }
  };

  getAvailabilityReport = async (req: Request, res: Response) => {
    try {
      const { tenantId } = req.params;
      const { month, year } = req.query;

      const report = await this.reportService.getAvailabilityReport(
        parseInt(tenantId),
        month ? parseInt(month as string) : undefined,
        year ? parseInt(year as string) : undefined
      );

      res.json({
        success: true,
        message: 'Availability report generated',
        data: report,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Error',
      });
    }
  };
}
