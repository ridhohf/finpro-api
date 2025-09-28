import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/app.error";
import PropertyCategoryService from "../services/property-category.service";
import { AuthRequest } from "../middlewares/jwt-verify.middleware";

export class PropertyCategoryController {
  constructor() {
    this.getCategories = this.getCategories.bind(this);
    this.getCategoryById = this.getCategoryById.bind(this);
    this.createCategory = this.createCategory.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
  }

  async getCategories(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError("User not authenticated", 401);

      const {
        page = 1,
        limit = 10,
        search,
        sortBy = "name",
        sortOrder = "asc",
      } = req.query;

      const result = await PropertyCategoryService.getCategories({
        tenantId: req.user.userId,
        page: parseInt(page as string),
        limit: parseInt(limit as string),
        search: search as string,
        sortBy: sortBy as string,
        sortOrder: sortOrder as "asc" | "desc",
      });

      res.status(200).json({
        success: true,
        message: "Categories retrieved successfully",
        data: result.categories,
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

  async getCategoryById(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError("User not authenticated", 401);

      const { id } = req.params;
      const categoryId = parseInt(id);

      if (isNaN(categoryId)) {
        throw new AppError("Invalid category ID", 400);
      }

      const category = await PropertyCategoryService.getCategoryById(
        categoryId,
        req.user.userId
      );

      if (!category) {
        throw new AppError("Category not found", 404);
      }

      res.status(200).json({
        success: true,
        message: "Category retrieved successfully",
        data: category,
      });
    } catch (error) {
      next(error);
    }
  }

  async createCategory(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError("User not authenticated", 401);

      const { name, description } = req.body;

      if (!name) throw new AppError("Category name is required", 400);
      if (!description)
        throw new AppError("Category description is required", 400);

      const category = await PropertyCategoryService.createCategory({
        tenantId: req.user.userId,
        name: name.trim(),
        description: description.trim(),
      });

      res.status(201).json({
        success: true,
        message: "Category created successfully",
        data: category,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateCategory(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError("User not authenticated", 401);

      const { id } = req.params;
      const categoryId = parseInt(id);

      if (isNaN(categoryId)) {
        throw new AppError("Invalid category ID", 400);
      }

      const { name, description } = req.body;

      const updateData: any = {};
      if (name) updateData.name = name.trim();
      if (description) updateData.description = description.trim();

      if (Object.keys(updateData).length === 0) {
        throw new AppError("No valid fields to update", 400);
      }

      const category = await PropertyCategoryService.updateCategory(
        categoryId,
        req.user.userId,
        updateData
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

  async deleteCategory(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new AppError("User not authenticated", 401);

      const { id } = req.params;
      const categoryId = parseInt(id);

      if (isNaN(categoryId)) {
        throw new AppError("Invalid category ID", 400);
      }

      await PropertyCategoryService.deleteCategory(categoryId, req.user.userId);

      res.status(200).json({
        success: true,
        message: "Category deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}
