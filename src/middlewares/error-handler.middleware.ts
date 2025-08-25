import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { AppError } from '../utils/app.error';
import { LoggerService } from '../utils/logger';

export class ErrorHandlerMiddleware {
  private static logger = new LoggerService();

  public static handle(): ErrorRequestHandler {
    return (error: any, req: Request, res: Response, _: NextFunction): void => {
      const isJwtError =
        error.name === 'TokenExpiredError' ||
        error.name === 'JsonWebTokenError';

      const statusCode = error.statusCode || (isJwtError ? 401 : 500);

      const message =
        error instanceof AppError || error.isOperational
          ? error.message
          : isJwtError
            ? error.message
            : 'Internal server error. Please try again later!';

      this.logger.error(`${req.method} ${req.url} - ${message}`, {
        name: error.name,
        stack: error.stack,
        path: req.originalUrl,
        method: req.method,
        ip: req.ip,
        statusCode,
      });

      if (req.path.includes('/api/')) {
        res.status(statusCode).json({
          success: false,
          message,
        });

        return;
      }
    };
  }
}
