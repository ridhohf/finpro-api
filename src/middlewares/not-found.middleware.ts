<<<<<<< HEAD
import { Request, Response, NextFunction, RequestHandler } from "express";
import { LoggerService } from "../utils/logger";
=======
import { Request, Response, NextFunction, RequestHandler } from 'express';
import { LoggerService } from '../utils/logger';
>>>>>>> feat/feature-2

export class NotFoundMiddleware {
  private static logger = new LoggerService();
  public static handle(): RequestHandler {
    return (req: Request, res: Response, _: NextFunction): void => {
<<<<<<< HEAD
      if (req.path.includes("/api/")) {
        this.logger.warn("404 Not Found", {
=======
      if (req.path.includes('/api/')) {
        this.logger.warn('404 Not Found', {
>>>>>>> feat/feature-2
          method: req.method,
          path: req.originalUrl,
          ip: req.ip,
        });

        res.status(404).json({
          success: false,
          message:
<<<<<<< HEAD
            "We are sorry, the endpoint you are trying to access could not be found on this server. Please ensure the URL is correct!",
=======
            'We are sorry, the endpoint you are trying to access could not be found on this server. Please ensure the URL is correct!',
>>>>>>> feat/feature-2
        });
      }

      return;
    };
  }
}
