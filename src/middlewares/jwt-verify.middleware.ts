import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config";
import { AppError } from "../utils/app.error";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export interface AuthRequest extends Request {
  user?: {
    userId: number;
    role: string;
  };
}

export const verifyToken = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new AppError("Access token is required", 401);
    }

    const token = authHeader.substring(7);

    const decoded = jwt.verify(token, config.jwtSecret) as any;

    // Check if user still exists
    const user = await prisma.users.findUnique({
      where: { id: decoded.userId },
    });

    if (!user) {
      throw new AppError("User no longer exists", 401);
    }

    if (!user.isVerified) {
      throw new AppError("User account is not verified", 401);
    }

    req.user = {
      userId: decoded.userId,
      role: decoded.role,
    };

    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      next(new AppError("Invalid token", 401));
    } else {
      next(error);
    }
  }
};

export const requireRole = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(new AppError("Authentication required", 401));
    }

    if (!roles.includes(req.user.role)) {
      return next(new AppError("Insufficient permissions", 403));
    }

    next();
  };
};
