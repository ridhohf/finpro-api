import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/app.error";
import { JwtUtil } from "../utils/jwt.util";
import prisma from "../utils/prisma";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        email: string;
        role: string;
      };
    }
  }
}

export class AuthMiddleware {
  static authenticate() {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token || token === "null") {
          throw new AppError("Bearer token is invalid or missing", 401);
        }

        const payload = JwtUtil.verifyToken(token);

        const user = await prisma.users.findUnique({
          where: { id: payload.id },
          select: { id: true, email: true, role: true, isVerified: true },
        });

        if (!user) {
          throw new AppError("User not found", 401);
        }

        if (!user.isVerified) {
          throw new AppError("Please verify your email first", 403);
        }

        req.user = {
          id: user.id,
          email: user.email,
          role: user.role,
        };

        next();
      } catch (error) {
        next(error);
      }
    };
  }

  static requireRole(...allowedRoles: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        if (!req.user) {
          throw new AppError("Authentication required", 401);
        }

        if (!allowedRoles.includes(req.user.role)) {
          throw new AppError(
            "You do not have permission to access this resource",
            403
          );
        }

        next();
      } catch (error) {
        next(error);
      }
    };
  }

  static optionalAuth() {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const token = req.headers.authorization?.split(" ")[1];

        if (token && token !== "null") {
          const payload = JwtUtil.verifyToken(token);
          const user = await prisma.users.findUnique({
            where: { id: payload.id },
            select: { id: true, email: true, role: true, isVerified: true },
          });

          if (user && user.isVerified) {
            req.user = {
              id: user.id,
              email: user.email,
              role: user.role,
            };
          }
        }

        next();
      } catch (error) {
        next();
      }
    };
  }
}
