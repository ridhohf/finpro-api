// src/middlewares/room.validation.ts
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/app.error';

export const validateRoom = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, description, basePrice, maxGuests } = req.body;

  // For POST requests, all fields are required
  if (req.method === 'POST') {
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return next(new AppError('Room name is required and cannot be empty', 400));
    }
    
    if (!description || typeof description !== 'string' || description.trim().length === 0) {
      return next(new AppError('Room description is required and cannot be empty', 400));
    }

    if (!basePrice || isNaN(parseFloat(basePrice)) || parseFloat(basePrice) <= 0) {
      return next(new AppError('Valid base price greater than 0 is required', 400));
    }

    if (!maxGuests || isNaN(parseInt(maxGuests)) || parseInt(maxGuests) <= 0) {
      return next(new AppError('Valid max guests greater than 0 is required', 400));
    }
  }

  // For PUT requests, at least one field must be provided
  if (req.method === 'PUT') {
    if (!name && !description && !basePrice && !maxGuests) {
      return next(new AppError('At least one field must be provided for update', 400));
    }
  }

  // Validate field types and ranges if provided
  if (name) {
    if (typeof name !== 'string' || name.trim().length === 0) {
      return next(new AppError('Room name cannot be empty if provided', 400));
    }
    if (name.trim().length > 255) {
      return next(new AppError('Room name cannot exceed 255 characters', 400));
    }
  }

  if (description) {
    if (typeof description !== 'string' || description.trim().length === 0) {
      return next(new AppError('Room description cannot be empty if provided', 400));
    }
    if (description.trim().length > 1000) {
      return next(new AppError('Room description cannot exceed 1000 characters', 400));
    }
  }

  if (basePrice) {
    const price = parseFloat(basePrice);
    if (isNaN(price) || price <= 0) {
      return next(new AppError('Base price must be a valid number greater than 0', 400));
    }
    if (price > 999999999.99) {
      return next(new AppError('Base price is too high', 400));
    }
  }

  if (maxGuests) {
    const guests = parseInt(maxGuests);
    if (isNaN(guests) || guests <= 0) {
      return next(new AppError('Max guests must be a valid number greater than 0', 400));
    }
    if (guests > 50) {
      return next(new AppError('Max guests cannot exceed 50', 400));
    }
  }

  next();
};