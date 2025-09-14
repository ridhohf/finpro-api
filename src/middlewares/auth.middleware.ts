import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma";
import { sendError } from "../utils/apiResponse";

export interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    email: string;
    role: string;
  };
}

export const authenticateToken = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return sendError(res, 401, "Token akses diperlukan");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: number;
      email: string;
      role: string;
    };

    // Verify user still exists in database
    const user = await prisma.users.findUnique({
      where: { id: decoded.userId },
      select: { id: true, email: true, role: true, isVerified: true },
    });

    if (!user) {
      return sendError(res, 401, "User tidak ditemukan");
    }

    if (!user.isVerified) {
      return sendError(res, 401, "Email belum diverifikasi");
    }

    req.user = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    next();
  } catch (error) {
    return sendError(res, 403, "Token tidak valid");
  }
};

// Middleware untuk role-based authorization
export const requireRole = (roles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return sendError(res, 401, "Unauthorized");
    }

    if (!roles.includes(req.user.role)) {
      return sendError(res, 403, "Akses ditolak. Role tidak sesuai.");
    }

    next();
  };
};

// Middleware khusus untuk tenant saja
export const requireTenant = requireRole(["TENANT"]);

// Middleware khusus untuk user biasa saja
export const requireUser = requireRole(["USER"]);
