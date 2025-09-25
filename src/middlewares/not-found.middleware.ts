import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/app.error";

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const err = new AppError(
    `Can't find ${req.originalUrl} on this server!`,
    404
  );
  next(err);
};
