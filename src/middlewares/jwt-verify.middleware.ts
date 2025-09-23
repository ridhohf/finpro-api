import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from '../utils/app.error';

export class JwtVerify {
  static verifyToken(secretKey: string) {
    return (req: Request, res: Response, next: NextFunction) => {
      const token = req.headers.authorization?.split(' ')[1];

      if (!token || token === 'null') {
        throw new AppError('Bearer token is invalid or missing', 401);
      }

      const payload = jwt.verify(token, secretKey);
      res.locals.payload = payload;

      next();
    };
  }
}
