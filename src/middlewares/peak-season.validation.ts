// src/middlewares/peak-season.validation.ts
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/app.error';

export const validatePeakSeason = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, startDate, endDate, priceIncreaseType, value } = req.body;

  // For POST requests, all fields are required
  if (req.method === 'POST') {
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return next(new AppError('Peak season name is required and cannot be empty', 400));
    }
    
    if (!startDate) {
      return next(new AppError('Start date is required', 400));
    }

    if (!endDate) {
      return next(new AppError('End date is required', 400));
    }

    if (!priceIncreaseType || !['PERCENTAGE', 'FIXED'].includes(priceIncreaseType)) {
      return next(new AppError('Price increase type must be either PERCENTAGE or FIXED', 400));
    }

    if (value === undefined || isNaN(parseFloat(value))) {
      return next(new AppError('Price increase value is required and must be a valid number', 400));
    }
  }

  // For PUT requests, at least one field must be provided
  if (req.method === 'PUT') {
    if (!name && !startDate && !endDate && !priceIncreaseType && value === undefined) {
      return next(new AppError('At least one field must be provided for update', 400));
    }
  }

  // Validate individual fields if provided
  if (name) {
    if (typeof name !== 'string' || name.trim().length === 0) {
      return next(new AppError('Peak season name cannot be empty if provided', 400));
    }
    if (name.trim().length > 255) {
      return next(new AppError('Peak season name cannot exceed 255 characters', 400));
    }
  }

  if (startDate) {
    const start = new Date(startDate);
    if (isNaN(start.getTime())) {
      return next(new AppError('Start date must be a valid date', 400));
    }
  }

  if (endDate) {
    const end = new Date(endDate);
    if (isNaN(end.getTime())) {
      return next(new AppError('End date must be a valid date', 400));
    }
  }

  if (startDate && endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (start >= end) {
      return next(new AppError('Start date must be before end date', 400));
    }
  }

  if (priceIncreaseType && !['PERCENTAGE', 'FIXED'].includes(priceIncreaseType)) {
    return next(new AppError('Price increase type must be either PERCENTAGE or FIXED', 400));
  }

  if (value !== undefined) {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      return next(new AppError('Price increase value must be a valid number', 400));
    }
    if (numValue < 0) {
      return next(new AppError('Price increase value cannot be negative', 400));
    }
    if (priceIncreaseType === 'PERCENTAGE' && numValue > 1000) {
      return next(new AppError('Percentage increase cannot exceed 1000%', 400));
    }
  }

  next();
};