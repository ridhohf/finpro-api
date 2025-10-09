<<<<<<< HEAD
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../utils/app.error";

export class JwtVerify {
  static verifyToken(secretKey: string) {
    return (req: Request, res: Response, next: NextFunction) => {
      const token = req.headers.authorization?.split(" ")[1];

      if (!token || token === "null") {
        throw new AppError("Bearer token is invalid or missing", 401);
      }

      const payload = jwt.verify(token, secretKey);
      res.locals.payload = payload;

      next();
    };
  }
}
=======
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

// Add alias export for compatibility
export const jwtVerify = verifyToken;
>>>>>>> feat/feature-2
