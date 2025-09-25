import { body, ValidationChain } from "express-validator";

export const registerValidation: ValidationChain[] = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters"),

  body("email")
    .isEmail()
    .withMessage("Please provide a valid email")
    .normalizeEmail(),

  body("role")
    .isIn(["user", "tenant"])
    .withMessage("Role must be either user or tenant"),

  body("companyName")
    .if(body("role").equals("tenant"))
    .notEmpty()
    .withMessage("Company name is required for tenants")
    .isLength({ min: 2, max: 100 })
    .withMessage("Company name must be between 2 and 100 characters"),

  body("phone")
    .optional({ nullable: true, checkFalsy: true })
    .custom((value) => {
      // Only validate if value exists and is not empty
      if (value && value.trim() !== "") {
        // Basic phone validation - at least 8 digits
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
        if (!phoneRegex.test(value)) {
          throw new Error("Please provide a valid phone number");
        }
      }
      return true;
    }),

  body("address")
    .optional({ nullable: true, checkFalsy: true })
    .trim()
    .isLength({ max: 500 })
    .withMessage("Address must not exceed 500 characters"),
];

export const loginValidation: ValidationChain[] = [
  body("email")
    .isEmail()
    .withMessage("Please provide a valid email")
    .normalizeEmail(),

  body("password").notEmpty().withMessage("Password is required"),

  body("role")
    .isIn(["user", "tenant"])
    .withMessage("Role must be either user or tenant"),
];

export const setPasswordValidation: ValidationChain[] = [
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    .withMessage(
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),

  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password confirmation does not match password");
    }
    return true;
  }),
];

export const resetPasswordValidation: ValidationChain[] = [
  body("email")
    .isEmail()
    .withMessage("Please provide a valid email")
    .normalizeEmail(),
];

export const socialLoginValidation: ValidationChain[] = [
  body("email")
    .isEmail()
    .withMessage("Please provide a valid email")
    .normalizeEmail(),

  body("name").trim().notEmpty().withMessage("Name is required"),

  body("provider")
    .isIn(["google", "facebook", "twitter"])
    .withMessage("Provider must be google, facebook, or twitter"),

  body("providerId").notEmpty().withMessage("Provider ID is required"),

  body("role")
    .isIn(["user", "tenant"])
    .withMessage("Role must be either user or tenant"),
];

export const updateProfileValidation: ValidationChain[] = [
  body("name")
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters"),

  body("companyName")
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Company name must be between 2 and 100 characters"),

  body("phone")
    .optional({ nullable: true, checkFalsy: true })
    .custom((value) => {
      if (value && value.trim() !== "") {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
        if (!phoneRegex.test(value)) {
          throw new Error("Please provide a valid phone number");
        }
      }
      return true;
    }),

  body("address")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("Address must not exceed 500 characters"),
];

export const updatePasswordValidation: ValidationChain[] = [
  body("currentPassword")
    .notEmpty()
    .withMessage("Current password is required"),

  body("newPassword")
    .isLength({ min: 8 })
    .withMessage("New password must be at least 8 characters long")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    .withMessage(
      "New password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),

  body("confirmNewPassword").custom((value, { req }) => {
    if (value !== req.body.newPassword) {
      throw new Error("Password confirmation does not match new password");
    }
    return true;
  }),
];

export const updateEmailValidation: ValidationChain[] = [
  body("newEmail")
    .isEmail()
    .withMessage("Please provide a valid email")
    .normalizeEmail(),
];
