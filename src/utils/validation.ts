import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.string().email("Email tidak valid"),
    role: z.enum(["USER", "TENANT"]),
    name: z.string().min(2, "Nama minimal 2 karakter").optional(),
    companyName: z
      .string()
      .min(2, "Nama perusahaan minimal 2 karakter")
      .optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.role === "TENANT") {
        return data.companyName && data.companyName.length >= 2;
      }
      return true;
    },
    {
      message: "Nama perusahaan diperlukan untuk tenant",
      path: ["companyName"],
    }
  );

export const verifyEmailSchema = z.object({
  token: z.string().min(1, "Token diperlukan"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

export const loginSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(1, "Password diperlukan"),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email("Email tidak valid"),
});

export const resetPasswordSchema = z.object({
  token: z.string().min(1, "Token diperlukan"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

export const resendVerificationSchema = z.object({
  email: z.string().email("Email tidak valid"),
});
