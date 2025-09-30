import { query, param, ValidationChain } from "express-validator";

export class PropertyCatalogValidator {
  static search(): ValidationChain[] {
    return [
      query("page")
        .optional()
        .isInt({ min: 1 })
        .withMessage("Page must be a positive integer"),

      query("limit")
        .optional()
        .isInt({ min: 1, max: 100 })
        .withMessage("Limit must be between 1 and 100"),

      query("guests")
        .optional()
        .isInt({ min: 1 })
        .withMessage("Guests must be a positive integer"),

      query("categoryId")
        .optional()
        .isInt()
        .withMessage("Category ID must be a number"),

      query("sortBy")
        .optional()
        .isIn(["name", "price"])
        .withMessage("Sort by must be name or price"),

      query("sortOrder")
        .optional()
        .isIn(["asc", "desc"])
        .withMessage("Sort order must be asc or desc"),

      query("checkIn")
        .optional()
        .isISO8601()
        .withMessage("Check-in date must be in valid ISO format (YYYY-MM-DD)"),

      query("checkOut")
        .optional()
        .isISO8601()
        .withMessage("Check-out date must be in valid ISO format (YYYY-MM-DD)"),
    ];
  }

  static getRoomCalendar(): ValidationChain[] {
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

  static getDetail(): ValidationChain[] {
    return [
      param("id")
        .notEmpty()
        .withMessage("Property ID is required")
        .isInt()
        .withMessage("Property ID must be a valid number"),
    ];
  }
}
