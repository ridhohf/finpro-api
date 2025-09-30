import { Request, Response, NextFunction } from "express";
import { PropertyCategoryService } from "../services/property-category.service";

export class PropertyCategoryController {
  private propertyCategoryService = new PropertyCategoryService();

  constructor() {
    this.getCategories = this.getCategories.bind(this);
    this.getCategoryById = this.getCategoryById.bind(this);
    this.createCategory = this.createCategory.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
  }

  async getCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.user!.id;

      const categories =
        await this.propertyCategoryService.getCategories(tenantId);

      res.status(200).json({
        success: true,
        message: "Categories retrieved successfully",
        data: categories,
      });
    } catch (error) {
      next(error);
    }
  }

  async getCategoryById(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.user!.id;
      const categoryId = parseInt(req.params.id);

      const category = await this.propertyCategoryService.getCategoryById(
        categoryId,
        tenantId
      );

      res.status(200).json({
        success: true,
        message: "Category retrieved successfully",
        data: category,
      });
    } catch (error) {
      next(error);
    }
  }

  async createCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.user!.id;
      const { name, description } = req.body;

      const category = await this.propertyCategoryService.createCategory(
        tenantId,
        {
          name,
          description,
        }
      );

      res.status(201).json({
        success: true,
        message: "Category created successfully",
        data: category,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.user!.id;
      const categoryId = parseInt(req.params.id);
      const { name, description } = req.body;

      const category = await this.propertyCategoryService.updateCategory(
        categoryId,
        tenantId,
        { name, description }
      );

      res.status(200).json({
        success: true,
        message: "Category updated successfully",
        data: category,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.user!.id;
      const categoryId = parseInt(req.params.id);

      const result = await this.propertyCategoryService.deleteCategory(
        categoryId,
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
