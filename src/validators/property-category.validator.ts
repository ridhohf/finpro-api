import { body, ValidationChain } from "express-validator";

export class PropertyCategoryValidator {
  static create(): ValidationChain[] {
    return [
      body("name")
        .trim()
        .notEmpty()
        .withMessage("Category name is required")
        .isLength({ min: 2, max: 255 })
        .withMessage("Category name must be between 2 and 255 characters"),

      body("description")
        .trim()
        .notEmpty()
        .withMessage("Description is required")
        .isLength({ min: 10 })
        .withMessage("Description must be at least 10 characters"),
    ];
  }

  static update(): ValidationChain[] {
    return [
      body("name")
        .optional()
        .trim()
        .isLength({ min: 2, max: 255 })
        .withMessage("Category name must be between 2 and 255 characters"),

      body("description")
        .optional()
        .trim()
        .isLength({ min: 10 })
        .withMessage("Description must be at least 10 characters"),
    ];
  }
}
