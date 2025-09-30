import { body, ValidationChain } from "express-validator";

export class RoomValidator {
  static create(): ValidationChain[] {
    return [
      body("propertyId")
        .notEmpty()
        .withMessage("Property ID is required")
        .isInt()
        .withMessage("Property ID must be a number"),

      body("name")
        .trim()
        .notEmpty()
        .withMessage("Room name is required")
        .isLength({ min: 2, max: 255 })
        .withMessage("Room name must be between 2 and 255 characters"),

      body("description")
        .trim()
        .notEmpty()
        .withMessage("Description is required")
        .isLength({ min: 10 })
        .withMessage("Description must be at least 10 characters"),

      body("basePrice")
        .notEmpty()
        .withMessage("Base price is required")
        .isFloat({ min: 0 })
        .withMessage("Base price must be a positive number"),

      body("maxGuests")
        .notEmpty()
        .withMessage("Max guests is required")
        .isInt({ min: 1 })
        .withMessage("Max guests must be at least 1"),
    ];
  }

  static update(): ValidationChain[] {
    return [
      body("name")
        .optional()
        .trim()
        .isLength({ min: 2, max: 255 })
        .withMessage("Room name must be between 2 and 255 characters"),

      body("description")
        .optional()
        .trim()
        .isLength({ min: 10 })
        .withMessage("Description must be at least 10 characters"),

      body("basePrice")
        .optional()
        .isFloat({ min: 0 })
        .withMessage("Base price must be a positive number"),

      body("maxGuests")
        .optional()
        .isInt({ min: 1 })
        .withMessage("Max guests must be at least 1"),
    ];
  }
}
