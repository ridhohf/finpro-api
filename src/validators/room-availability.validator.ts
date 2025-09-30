import { body, query, ValidationChain } from "express-validator";

export class RoomAvailabilityValidator {
  static getAvailability(): ValidationChain[] {
    return [
      query("month")
        .notEmpty()
        .withMessage("Month is required")
        .isInt({ min: 1, max: 12 })
        .withMessage("Month must be between 1 and 12"),

      query("year")
        .notEmpty()
        .withMessage("Year is required")
        .isInt({ min: 2024, max: 2100 })
        .withMessage("Year must be valid"),
    ];
  }

  static updateSingle(): ValidationChain[] {
    return [
      body("date")
        .notEmpty()
        .withMessage("Date is required")
        .isISO8601()
        .withMessage("Date must be in valid ISO format (YYYY-MM-DD)"),

      body("isAvailable")
        .notEmpty()
        .withMessage("Availability status is required")
        .isBoolean()
        .withMessage("isAvailable must be a boolean"),

      body("priceOverride")
        .optional()
        .isFloat({ min: 0 })
        .withMessage("Price override must be a positive number"),
    ];
  }

  static bulkUpdate(): ValidationChain[] {
    return [
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

      body("isAvailable")
        .notEmpty()
        .withMessage("Availability status is required")
        .isBoolean()
        .withMessage("isAvailable must be a boolean"),

      body("priceOverride")
        .optional()
        .isFloat({ min: 0 })
        .withMessage("Price override must be a positive number"),
    ];
  }
}
