import { Request, Response, NextFunction, RequestHandler } from 'express';
import { LoggerService } from '../utils/logger';

export class NotFoundMiddleware {
  private static logger = new LoggerService();
  public static handle(): RequestHandler {
    return (req: Request, res: Response, _: NextFunction): void => {
      if (req.path.includes('/api/')) {
        this.logger.warn('404 Not Found', {
          method: req.method,
          path: req.originalUrl,
          ip: req.ip,
        });

        res.status(404).json({
          success: false,
          message:
            'We are sorry, the endpoint you are trying to access could not be found on this server. Please ensure the URL is correct!',
        });
      }

      return;
    };
  }
}
