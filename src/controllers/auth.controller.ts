import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import {
  registerSchema,
  verifyEmailSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  resendVerificationSchema,
} from "../utils/validation";
import { sendSuccess, sendError } from "../utils/apiResponse";

export const register = async (req: Request, res: Response) => {
  try {
    const validatedData = registerSchema.parse(req.body);

    const result = await AuthService.register({
      email: validatedData.email,
      role: validatedData.role,
      name: validatedData.name,
      companyName: validatedData.companyName,
      phone: validatedData.phone,
      address: validatedData.address,
    });

    sendSuccess(res, "Email verifikasi telah dikirim", result);
  } catch (error) {
    if (error instanceof Error) {
      sendError(res, 400, error.message);
    } else {
      sendError(res, 500, "Internal server error");
    }
  }
};

export const verifyEmail = async (req: Request, res: Response) => {
  try {
    const validatedData = verifyEmailSchema.parse(req.body);

    const result = await AuthService.verifyEmail(
      validatedData.token,
      validatedData.password
    );

    sendSuccess(res, "Email berhasil diverifikasi", result);
  } catch (error) {
    if (error instanceof Error) {
      sendError(res, 400, error.message);
    } else {
      sendError(res, 500, "Internal server error");
    }
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const validatedData = loginSchema.parse(req.body);

    const result = await AuthService.login(
      validatedData.email,
      validatedData.password
    );

    sendSuccess(res, "Login berhasil", result);
  } catch (error) {
    if (error instanceof Error) {
      sendError(res, 401, error.message);
    } else {
      sendError(res, 500, "Internal server error");
    }
  }
};

export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const validatedData = forgotPasswordSchema.parse(req.body);

    const result = await AuthService.forgotPassword(validatedData.email);

    sendSuccess(res, result.message);
  } catch (error) {
    if (error instanceof Error) {
      sendError(res, 400, error.message);
    } else {
      sendError(res, 500, "Internal server error");
    }
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const validatedData = resetPasswordSchema.parse(req.body);

    const result = await AuthService.resetPassword(
      validatedData.token,
      validatedData.password
    );

    sendSuccess(res, "Password berhasil direset", result);
  } catch (error) {
    if (error instanceof Error) {
      sendError(res, 400, error.message);
    } else {
      sendError(res, 500, "Internal server error");
    }
  }
};

export const resendVerification = async (req: Request, res: Response) => {
  try {
    const validatedData = resendVerificationSchema.parse(req.body);

    const result = await AuthService.resendVerification(validatedData.email);

    sendSuccess(res, "Email verifikasi telah dikirim ulang", result);
  } catch (error) {
    if (error instanceof Error) {
      sendError(res, 400, error.message);
    } else {
      sendError(res, 500, "Internal server error");
    }
  }
};
