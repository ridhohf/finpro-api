// src/middlewares/property.validation.ts
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/app.error';

export const validateProperty = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, description, address, city, categoryId } = req.body;

  // For POST requests, all fields are required
  if (req.method === 'POST') {
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return next(new AppError('Property name is required and cannot be empty', 400));
    }
    
    if (!description || typeof description !== 'string' || description.trim().length === 0) {
      return next(new AppError('Property description is required and cannot be empty', 400));
    }

    if (!address || typeof address !== 'string' || address.trim().length === 0) {
      return next(new AppError('Property address is required and cannot be empty', 400));
    }

    if (!city || typeof city !== 'string' || city.trim().length === 0) {
      return next(new AppError('Property city is required and cannot be empty', 400));
    }

    if (!categoryId || isNaN(parseInt(categoryId))) {
      return next(new AppError('Valid category ID is required', 400));
    }
  }

  // For PUT requests, at least one field must be provided
  if (req.method === 'PUT') {
    if (!name && !description && !address && !city && !categoryId) {
      return next(new AppError('At least one field must be provided for update', 400));
    }
  }

  // Validate field lengths and types if provided
  if (name) {
    if (typeof name !== 'string' || name.trim().length === 0) {
      return next(new AppError('Property name cannot be empty if provided', 400));
    }
    if (name.trim().length > 255) {
      return next(new AppError('Property name cannot exceed 255 characters', 400));
    }
  }

  if (description) {
    if (typeof description !== 'string' || description.trim().length === 0) {
      return next(new AppError('Property description cannot be empty if provided', 400));
    }
    if (description.trim().length > 2000) {
      return next(new AppError('Property description cannot exceed 2000 characters', 400));
    }
  }

  if (address) {
    if (typeof address !== 'string' || address.trim().length === 0) {
      return next(new AppError('Property address cannot be empty if provided', 400));
    }
    if (address.trim().length > 500) {
      return next(new AppError('Property address cannot exceed 500 characters', 400));
    }
  }

  if (city) {
    if (typeof city !== 'string' || city.trim().length === 0) {
      return next(new AppError('Property city cannot be empty if provided', 400));
    }
    if (city.trim().length > 100) {
      return next(new AppError('Property city cannot exceed 100 characters', 400));
    }
  }

  if (categoryId && isNaN(parseInt(categoryId))) {
    return next(new AppError('Category ID must be a valid number', 400));
  }

  next();
};