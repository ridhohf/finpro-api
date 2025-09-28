// src/controllers/property.controller.ts
import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/app.error";
import PropertyService from "../services/property.service";
import { AuthRequest } from "../middlewares/jwt-verify.middleware";

export class PropertyController {
  constructor() {
    this.getProperties = this.getProperties.bind(this);
    this.getPropertyById = this.getPropertyById.bind(this);
    this.createProperty = this.createProperty.bind(this);
    this.updateProperty = this.updateProperty.bind(this);
    this.deleteProperty = this.deleteProperty.bind(this);
    this.getPublicProperties = this.getPublicProperties.bind(this);
    this.getPublicPropertyDetail = this.getPublicPropertyDetail.bind(this);
  }

  async getProperties(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError("User not authenticated", 401);

      const {
        page = 1,
        limit = 10,
        search,
        categoryId,
        city,
        sortBy = "name",
        sortOrder = "asc",
      } = req.query;

      const result = await PropertyService.getProperties({
        tenantId: req.user.userId,
        page: parseInt(page as string),
        limit: parseInt(limit as string),
        search: search as string,
        categoryId: categoryId ? parseInt(categoryId as string) : undefined,
        city: city as string,
        sortBy: sortBy as string,
        sortOrder: sortOrder as "asc" | "desc",
      });

      res.status(200).json({
        success: true,
        message: "Properties retrieved successfully",
        data: result.properties,
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

  async getPropertyById(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError("User not authenticated", 401);

      const { id } = req.params;
      const propertyId = parseInt(id);

      if (isNaN(propertyId)) {
        throw new AppError("Invalid property ID", 400);
      }

      const property = await PropertyService.getPropertyById(
        propertyId,
        req.user.userId
      );

      if (!property) {
        throw new AppError("Property not found", 404);
      }

      res.status(200).json({
        success: true,
        message: "Property retrieved successfully",
        data: property,
      });
    } catch (error) {
      next(error);
    }
  }

  async createProperty(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError("User not authenticated", 401);

      const file = req.file;
      if (!file) throw new AppError("Property image is required", 400);

      const propertyData = {
        ...req.body,
        tenantId: req.user.userId,
        categoryId: parseInt(req.body.categoryId),
      };

      const property = await PropertyService.createProperty(propertyData, file);

      res.status(201).json({
        success: true,
        message: "Property created successfully",
        data: property,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateProperty(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError("User not authenticated", 401);

      const { id } = req.params;
      const propertyId = parseInt(id);

      if (isNaN(propertyId)) {
        throw new AppError("Invalid property ID", 400);
      }

      const updateData = { ...req.body };
      if (updateData.categoryId) {
        updateData.categoryId = parseInt(updateData.categoryId);
      }

      const property = await PropertyService.updateProperty(
        propertyId,
        req.user.userId,
        updateData,
        req.file
      );

      res.status(200).json({
        success: true,
        message: "Property updated successfully",
        data: property,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteProperty(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError("User not authenticated", 401);

      const { id } = req.params;
      const propertyId = parseInt(id);

      if (isNaN(propertyId)) {
        throw new AppError("Invalid property ID", 400);
      }

      await PropertyService.deleteProperty(propertyId, req.user.userId);

      res.status(200).json({
        success: true,
        message: "Property deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  // Public endpoints for users
  async getPublicProperties(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        city,
        checkIn,
        checkOut,
        guests = 1,
        page = 1,
        limit = 10,
        categoryId,
        sortBy = "price",
        sortOrder = "asc",
        search,
      } = req.query;

      if (!city) throw new AppError("City is required", 400);
      if (!checkIn) throw new AppError("Check-in date is required", 400);
      if (!checkOut) throw new AppError("Check-out date is required", 400);

      const result = await PropertyService.getPublicProperties({
        city: city as string,
        checkIn: new Date(checkIn as string),
        checkOut: new Date(checkOut as string),
        guests: parseInt(guests as string),
        page: parseInt(page as string),
        limit: parseInt(limit as string),
        categoryId: categoryId ? parseInt(categoryId as string) : undefined,
        sortBy: sortBy as string,
        sortOrder: sortOrder as "asc" | "desc",
        search: search as string,
      });

      res.status(200).json({
        success: true,
        message: "Properties retrieved successfully",
        data: result.properties,
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

  async getPublicPropertyDetail(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const propertyId = parseInt(id);

      if (isNaN(propertyId)) {
        throw new AppError("Invalid property ID", 400);
      }

      const property =
        await PropertyService.getPublicPropertyDetail(propertyId);

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
}
