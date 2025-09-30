import { Request, Response, NextFunction } from "express";
import { PropertyCatalogService } from "../services/property-catalog.service";
import { AppError } from "../utils/app.error";

export class PropertyCatalogController {
  private propertyCatalogService = new PropertyCatalogService();

  constructor() {
    this.searchProperties = this.searchProperties.bind(this);
    this.getPropertyDetail = this.getPropertyDetail.bind(this);
    this.getRoomPriceCalendar = this.getRoomPriceCalendar.bind(this);
  }

  async searchProperties(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        city,
        checkIn,
        checkOut,
        guests,
        categoryId,
        search,
        sortBy,
        sortOrder,
        page,
        limit,
      } = req.query;

      const result = await this.propertyCatalogService.searchProperties({
        city: city as string,
        checkIn: checkIn as string,
        checkOut: checkOut as string,
        guests: guests ? parseInt(guests as string) : undefined,
        categoryId: categoryId ? parseInt(categoryId as string) : undefined,
        search: search as string,
        sortBy: sortBy as "name" | "price",
        sortOrder: sortOrder as "asc" | "desc",
        page: page ? parseInt(page as string) : undefined,
        limit: limit ? parseInt(limit as string) : undefined,
      });

      res.status(200).json({
        success: true,
        message: "Properties retrieved successfully",
        data: result.properties,
        pagination: result.pagination,
        filters: result.filters,
      });
    } catch (error) {
      next(error);
    }
  }

  async getPropertyDetail(req: Request, res: Response, next: NextFunction) {
    try {
      const propertyId = parseInt(req.params.id);
      const { checkIn, checkOut } = req.query;

      const property = await this.propertyCatalogService.getPropertyDetail(
        propertyId,
        checkIn as string,
        checkOut as string
      );

      if (!property) {
        throw new AppError("Property not found", 404);
      }

      res.status(200).json({
        success: true,
        message: "Property detail retrieved successfully",
        data: property,
      });
    } catch (error) {
      next(error);
    }
  }

  async getRoomPriceCalendar(req: Request, res: Response, next: NextFunction) {
    try {
      const roomId = parseInt(req.params.roomId);
      const { month, year } = req.query;

      const calendar = await this.propertyCatalogService.getRoomPriceCalendar(
        roomId,
        parseInt(month as string),
        parseInt(year as string)
      );

      if (!calendar) {
        throw new AppError("Room not found", 404);
      }

      res.status(200).json({
        success: true,
        message: "Price calendar retrieved successfully",
        data: calendar,
      });
    } catch (error) {
      next(error);
    }
  }
}
