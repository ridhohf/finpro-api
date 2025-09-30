import { body, query, ValidationChain } from "express-validator";

export class PropertyValidator {
  static create(): ValidationChain[] {
    return [
      body("categoryId")
        .notEmpty()
        .withMessage("Category is required")
        .isInt()
        .withMessage("Category ID must be a number"),

      body("name")
        .trim()
        .notEmpty()
        .withMessage("Property name is required")
        .isLength({ min: 3, max: 255 })
        .withMessage("Property name must be between 3 and 255 characters"),

      body("description")
        .trim()
        .notEmpty()
        .withMessage("Description is required")
        .isLength({ min: 20 })
        .withMessage("Description must be at least 20 characters"),

      body("address").trim().notEmpty().withMessage("Address is required"),

      body("city").trim().notEmpty().withMessage("City is required"),
    ];
  }

  static update(): ValidationChain[] {
    return [
      body("categoryId")
        .optional()
        .isInt()
        .withMessage("Category ID must be a number"),

      body("name")
        .optional()
        .trim()
        .isLength({ min: 3, max: 255 })
        .withMessage("Property name must be between 3 and 255 characters"),

      body("description")
        .optional()
        .trim()
        .isLength({ min: 20 })
        .withMessage("Description must be at least 20 characters"),

      body("address")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Address cannot be empty"),

      body("city")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("City cannot be empty"),
    ];
  }

  static getList(): ValidationChain[] {
    return [
      query("page")
        .optional()
        .isInt({ min: 1 })
        .withMessage("Page must be a positive integer"),

      query("limit")
        .optional()
        .isInt({ min: 1, max: 100 })
        .withMessage("Limit must be between 1 and 100"),

      query("sortBy")
        .optional()
        .isIn(["name", "createdAt"])
        .withMessage("Sort by must be name or createdAt"),

      query("sortOrder")
        .optional()
        .isIn(["asc", "desc"])
        .withMessage("Sort order must be asc or desc"),

      query("categoryId")
        .optional()
        .isInt()
        .withMessage("Category ID must be a number"),
    ];
  }
}
