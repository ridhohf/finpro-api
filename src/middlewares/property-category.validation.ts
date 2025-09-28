// src/middlewares/property-category.validation.ts
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/app.error';

export const validatePropertyCategory = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, description } = req.body;

  // For POST requests, both fields are required
  if (req.method === 'POST') {
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return next(new AppError('Category name is required and cannot be empty', 400));
    }
    
    if (!description || typeof description !== 'string' || description.trim().length === 0) {
      return next(new AppError('Category description is required and cannot be empty', 400));
    }
  }

  // For PUT requests, at least one field must be provided
  if (req.method === 'PUT') {
    if (!name && !description) {
      return next(new AppError('At least one field (name or description) must be provided', 400));
    }

    if (name && (typeof name !== 'string' || name.trim().length === 0)) {
      return next(new AppError('Category name cannot be empty if provided', 400));
    }

    if (description && (typeof description !== 'string' || description.trim().length === 0)) {
      return next(new AppError('Category description cannot be empty if provided', 400));
    }
  }

  // Validate length constraints
  if (name && name.trim().length > 255) {
    return next(new AppError('Category name cannot exceed 255 characters', 400));
  }

  if (description && description.trim().length > 1000) {
    return next(new AppError('Category description cannot exceed 1000 characters', 400));
  }

  next();
};