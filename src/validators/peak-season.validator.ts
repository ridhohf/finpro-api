import { body, ValidationChain } from "express-validator";

export class PeakSeasonValidator {
  static create(): ValidationChain[] {
    return [
      body("roomId")
        .notEmpty()
        .withMessage("Room ID is required")
        .isInt()
        .withMessage("Room ID must be a number"),

      body("name")
        .trim()
        .notEmpty()
        .withMessage("Peak season name is required")
        .isLength({ min: 2, max: 255 })
        .withMessage("Name must be between 2 and 255 characters"),

      body("startDate")
        .notEmpty()
        .withMessage("Start date is required")
        .isISO8601()
        .withMessage("Start date must be in valid ISO format (YYYY-MM-DD)"),

      body("endDate")
        .notEmpty()
        .withMessage("End date is required")
        .isISO8601()
        .withMessage("End date must be in valid ISO format (YYYY-MM-DD)"),

      body("priceIncreaseType")
        .notEmpty()
        .withMessage("Price increase type is required")
        .isIn(["percentage", "nominal"])
        .withMessage("Price increase type must be percentage or nominal"),

      body("value")
        .notEmpty()
        .withMessage("Value is required")
        .isFloat({ min: 0 })
        .withMessage("Value must be a positive number"),
    ];
  }

  static update(): ValidationChain[] {
    return [
      body("name")
        .optional()
        .trim()
        .isLength({ min: 2, max: 255 })
        .withMessage("Name must be between 2 and 255 characters"),

      body("startDate")
        .optional()
        .isISO8601()
        .withMessage("Start date must be in valid ISO format (YYYY-MM-DD)"),

      body("endDate")
        .optional()
        .isISO8601()
        .withMessage("End date must be in valid ISO format (YYYY-MM-DD)"),

      body("priceIncreaseType")
        .optional()
        .isIn(["percentage", "nominal"])
        .withMessage("Price increase type must be percentage or nominal"),

      body("value")
        .optional()
        .isFloat({ min: 0 })
        .withMessage("Value must be a positive number"),
    ];
  }
}
