import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { sendError } from "../utils/apiResponse";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Error:", err);

  // Handle JWT errors
  if (err instanceof jwt.JsonWebTokenError) {
    return sendError(res, 401, "Token tidak valid");
  }

  if (err instanceof jwt.TokenExpiredError) {
    return sendError(res, 401, "Token kadaluarsa");
  }

  // Handle Zod validation errors
  if (err.name === "ZodError") {
    return sendError(res, 400, "Data tidak valid", err.errors);
  }

  // Handle Prisma errors
  if (err.code && err.code.startsWith("P")) {
    switch (err.code) {
      case "P2002":
        return sendError(res, 400, "Data sudah ada");
      case "P2025":
        return sendError(res, 404, "Data tidak ditemukan");
      default:
        return sendError(res, 400, "Database error", err.message);
    }
  }

  // Handle custom ApiError
  if (err.statusCode && err.message) {
    return sendError(res, err.statusCode, err.message);
  }

  // Default error handling
  return sendError(res, 500, "Internal server error");
};
