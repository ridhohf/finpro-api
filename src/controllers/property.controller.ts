import { Request, Response, NextFunction } from "express";
import { PropertyService } from "../services/property.service";

export class PropertyController {
  private propertyService = new PropertyService();

  constructor() {
    this.getProperties = this.getProperties.bind(this);
    this.getPropertyById = this.getPropertyById.bind(this);
    this.createProperty = this.createProperty.bind(this);
    this.updateProperty = this.updateProperty.bind(this);
    this.deleteProperty = this.deleteProperty.bind(this);
    this.getCities = this.getCities.bind(this);
  }

  async getProperties(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.user!.id;
      const { page, limit, search, categoryId, sortBy, sortOrder } = req.query;

      const result = await this.propertyService.getProperties(tenantId, {
        page: page ? parseInt(page as string) : undefined,
        limit: limit ? parseInt(limit as string) : undefined,
        search: search as string,
        categoryId: categoryId ? parseInt(categoryId as string) : undefined,
        sortBy: sortBy as "name" | "createdAt",
        sortOrder: sortOrder as "asc" | "desc",
      });

      res.status(200).json({
        success: true,
        message: "Properties retrieved successfully",
        data: result.properties,
        pagination: result.pagination,
      });
    } catch (error) {
      next(error);
    }
  }

  async getPropertyById(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.user!.id;
      const propertyId = parseInt(req.params.id);

      const property = await this.propertyService.getPropertyById(
        propertyId,
        tenantId
      );

      res.status(200).json({
        success: true,
        message: "Property retrieved successfully",
        data: property,
      });
    } catch (error) {
      next(error);
    }
  }

  async createProperty(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.user!.id;
      const { categoryId, name, description, address, city } = req.body;
      const images = req.files as Express.Multer.File[];

      const property = await this.propertyService.createProperty(
        tenantId,
        {
          categoryId: parseInt(categoryId),
          name,
          description,
          address,
          city,
        },
        images || []
      );

      res.status(201).json({
        success: true,
        message: "Property created successfully",
        data: property,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateProperty(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.user!.id;
      const propertyId = parseInt(req.params.id);
      const { categoryId, name, description, address, city } = req.body;
      const images = req.files as Express.Multer.File[];

      const property = await this.propertyService.updateProperty(
        propertyId,
        tenantId,
        {
          categoryId: categoryId ? parseInt(categoryId) : undefined,
          name,
          description,
          address,
          city,
        },
        images
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

  async deleteProperty(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.user!.id;
      const propertyId = parseInt(req.params.id);

      const result = await this.propertyService.deleteProperty(
        propertyId,
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

  async getCities(req: Request, res: Response, next: NextFunction) {
    try {
      const cities = await this.propertyService.getCities();

      res.status(200).json({
        success: true,
        message: "Cities retrieved successfully",
        data: cities,
      });
    } catch (error) {
      next(error);
    }
  }
}
