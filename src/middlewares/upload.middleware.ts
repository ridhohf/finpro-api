<<<<<<< HEAD
import multer from "multer";
import { AppError } from "../utils/app.error";
import { Request, Response, NextFunction } from "express";

const storage = multer.memoryStorage();

const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  const allowedMimes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new AppError(
        "Invalid file type. Only JPG, JPEG, PNG and GIF allowed",
        400
      )
    );
  }
};

export class UploadMiddleware {
  static single(fieldName: string) {
    return multer({
      storage,
      fileFilter,
      limits: {
        fileSize: 1024 * 1024,
      },
    }).single(fieldName);
  }

  static array(fieldName: string, maxCount: number = 5) {
    return multer({
      storage,
      fileFilter,
      limits: {
        fileSize: 1024 * 1024,
      },
    }).array(fieldName, maxCount);
  }

  static handleMulterError() {
    return (err: any, req: Request, res: Response, next: NextFunction) => {
      if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
          throw new AppError("File size exceeds 1MB limit", 400);
        }
        if (err.code === "LIMIT_UNEXPECTED_FILE") {
          throw new AppError("Too many files uploaded", 400);
        }
        throw new AppError(err.message, 400);
      }

      next(err);
    };
  }
}
=======
import multer from "multer";
import { AppError } from "../utils/app.error";
import { Request, Response, NextFunction } from "express";

const storage = multer.memoryStorage();

const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  const allowedMimes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new AppError(
        "Invalid file type. Only JPG, JPEG, PNG and GIF allowed",
        400
      )
    );
  }
};

export class UploadMiddleware {
  static single(fieldName: string) {
    return multer({
      storage,
      fileFilter,
      limits: {
        fileSize: 1024 * 1024,
      },
    }).single(fieldName);
  }

  static array(fieldName: string, maxCount: number = 5) {
    return multer({
      storage,
      fileFilter,
      limits: {
        fileSize: 1024 * 1024,
      },
    }).array(fieldName, maxCount);
  }

  static handleMulterError() {
    return (err: any, req: Request, res: Response, next: NextFunction) => {
      if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
          throw new AppError("File size exceeds 1MB limit", 400);
        }
        if (err.code === "LIMIT_UNEXPECTED_FILE") {
          throw new AppError("Too many files uploaded", 400);
        }
        throw new AppError(err.message, 400);
      }

      next(err);
    };
  }
}
>>>>>>> feat/feature-2
