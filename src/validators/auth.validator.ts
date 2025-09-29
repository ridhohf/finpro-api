import { body, ValidationChain } from "express-validator";

export class AuthValidator {
  static register(): ValidationChain[] {
    return [
      body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ min: 2, max: 255 })
        .withMessage("Name must be between 2 and 255 characters"),

      body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email format")
        .normalizeEmail(),

      body("role")
        .trim()
        .notEmpty()
        .withMessage("Role is required")
        .isIn(["user", "tenant"])
        .withMessage("Role must be either user or tenant"),

      body("companyName")
        .if(body("role").equals("tenant"))
        .trim()
        .notEmpty()
        .withMessage("Company name is required for tenants")
        .isLength({ min: 2, max: 255 })
        .withMessage("Company name must be between 2 and 255 characters"),

      body("phone")
        .optional()
        .trim()
        .matches(/^[0-9+\-\s()]+$/)
        .withMessage("Invalid phone number format"),

      body("address").optional().trim(),
    ];
  }

  static verifyEmail(): ValidationChain[] {
    return [
      body("token")
        .trim()
        .notEmpty()
        .withMessage("Verification token is required"),

      body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .withMessage(
          "Password must contain at least one uppercase, one lowercase, and one number"
        ),
    ];
  }

  static login(): ValidationChain[] {
    return [
      body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email format")
        .normalizeEmail(),

      body("password").trim().notEmpty().withMessage("Password is required"),
    ];
  }

  static socialLogin(): ValidationChain[] {
    return [
      body("provider")
        .trim()
        .notEmpty()
        .withMessage("Provider is required")
        .isIn(["google", "facebook"])
        .withMessage("Invalid provider"),

      body("providerId")
        .trim()
        .notEmpty()
        .withMessage("Provider ID is required"),

      body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email format")
        .normalizeEmail(),

      body("name").trim().notEmpty().withMessage("Name is required"),

      body("role")
        .trim()
        .notEmpty()
        .withMessage("Role is required")
        .isIn(["user", "tenant"])
        .withMessage("Role must be either user or tenant"),
    ];
  }

  static resendVerification(): ValidationChain[] {
    return [
      body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email format")
        .normalizeEmail(),
    ];
  }

  static resetPassword(): ValidationChain[] {
    return [
      body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email format")
        .normalizeEmail(),
    ];
  }

  static confirmResetPassword(): ValidationChain[] {
    return [
      body("token").trim().notEmpty().withMessage("Reset token is required"),

      body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .withMessage(
          "Password must contain at least one uppercase, one lowercase, and one number"
        ),
    ];
  }

  static updateProfile(): ValidationChain[] {
    return [
      body("name")
        .optional()
        .trim()
        .isLength({ min: 2, max: 255 })
        .withMessage("Name must be between 2 and 255 characters"),

      body("email")
        .optional()
        .trim()
        .isEmail()
        .withMessage("Invalid email format")
        .normalizeEmail(),

      body("phone")
        .optional()
        .trim()
        .matches(/^[0-9+\-\s()]+$/)
        .withMessage("Invalid phone number format"),

      body("address").optional().trim(),

      body("companyName")
        .optional()
        .trim()
        .isLength({ min: 2, max: 255 })
        .withMessage("Company name must be between 2 and 255 characters"),
    ];
  }

  static updatePassword(): ValidationChain[] {
    return [
      body("oldPassword")
        .trim()
        .notEmpty()
        .withMessage("Old password is required"),

      body("newPassword")
        .trim()
        .notEmpty()
        .withMessage("New password is required")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .withMessage(
          "Password must contain at least one uppercase, one lowercase, and one number"
        ),
    ];
  }
}
