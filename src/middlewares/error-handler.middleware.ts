<<<<<<< HEAD
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { AppError } from "../utils/app.error";
import { LoggerService } from "../utils/logger";
=======
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { AppError } from '../utils/app.error';
import { LoggerService } from '../utils/logger';
>>>>>>> feat/feature-2

export class ErrorHandlerMiddleware {
  private static logger = new LoggerService();

  public static handle(): ErrorRequestHandler {
    return (error: any, req: Request, res: Response, _: NextFunction): void => {
      const isJwtError =
<<<<<<< HEAD
        error.name === "TokenExpiredError" ||
        error.name === "JsonWebTokenError";
=======
        error.name === 'TokenExpiredError' ||
        error.name === 'JsonWebTokenError';
>>>>>>> feat/feature-2

      const statusCode = error.statusCode || (isJwtError ? 401 : 500);

      const message =
        error instanceof AppError || error.isOperational
          ? error.message
          : isJwtError
            ? error.message
<<<<<<< HEAD
            : "Internal server error. Please try again later!";
=======
            : 'Internal server error. Please try again later!';
>>>>>>> feat/feature-2

      this.logger.error(`${req.method} ${req.url} - ${message}`, {
        name: error.name,
        stack: error.stack,
        path: req.originalUrl,
        method: req.method,
        ip: req.ip,
        statusCode,
      });

<<<<<<< HEAD
      if (req.path.includes("/api/")) {
=======
      if (req.path.includes('/api/')) {
>>>>>>> feat/feature-2
        res.status(statusCode).json({
          success: false,
          message,
        });

        return;
      }
    };
  }
}
