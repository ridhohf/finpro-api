import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma";
import { sendVerificationEmail, sendPasswordResetEmail } from "../lib/email";

const JWT_SECRET = process.env.JWT_SECRET!;

export interface JwtPayload {
  userId: number;
  email: string;
  role: string;
}

export interface RegisterData {
  email: string;
  role: "USER" | "TENANT";
  name?: string;
  companyName?: string;
  phone?: string;
  address?: string;
}

export class AuthService {
  static async register(registerData: RegisterData) {
    const { email, role, name, companyName, phone, address } = registerData;

    // Check if user already exists
    const existingUser = await prisma.users.findUnique({ where: { email } });
    if (existingUser) {
      throw new Error("Email sudah terdaftar");
    }

    // Create user without password
    const user = await prisma.users.create({
      data: {
        email,
        role,
        name: name || "",
        isVerified: false,
        provider: "email",

        ...(role === "TENANT" && {
          tenantProfile: {
            create: {
              companyName: companyName || "",
              phone: phone || "",
              address: address || "",
            },
          },
        }),
      },
      include: {
        tenantProfile: role === "TENANT",
      },
    });

    // Generate verification token
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Save verification token
    await prisma.emailVerifications.create({
      data: {
        userId: user.id,
        token,
        expiresAt: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
      },
    });

    // Send verification email
    await sendVerificationEmail(email, token);

    return {
      message: "Email verifikasi telah dikirim",
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
        ...(role === "TENANT" && {
          tenantProfile: user.tenantProfile,
        }),
      },
    };
  }

  static async verifyEmail(token: string, password: string) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

      // Check if token already used
      const verification = await prisma.emailVerifications.findFirst({
        where: { token, used: false, expiresAt: { gt: new Date() } },
      });

      if (!verification) {
        throw new Error("Token tidak valid atau sudah kadaluarsa");
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 12);

      // Update user with password and verify
      await prisma.users.update({
        where: { id: decoded.userId },
        data: {
          password: hashedPassword,
          isVerified: true,
        },
      });

      // Mark token as used
      await prisma.emailVerifications.update({
        where: { id: verification.id },
        data: { used: true },
      });

      return { message: "Email berhasil diverifikasi" };
    } catch (error) {
      throw new Error("Token tidak valid");
    }
  }

  static async login(email: string, password: string) {
    const user = await prisma.users.findUnique({
      where: { email },
      include: {
        tenantProfile: true,
      },
    });

    if (!user || !user.password) {
      throw new Error("Email atau password salah");
    }

    if (!user.isVerified) {
      throw new Error("Email belum diverifikasi");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Email atau password salah");
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        avatar: user.avatar,
        ...(user.role === "TENANT" && {
          tenantProfile: user.tenantProfile,
        }),
      },
    };
  }

  static async forgotPassword(email: string) {
    const user = await prisma.users.findUnique({ where: { email } });

    if (!user) {
      // Untuk security, jangan return error jika email tidak ditemukan
      return {
        message: "Jika email terdaftar, link reset password akan dikirim",
      };
    }

    if (!user.password) {
      throw new Error(
        "Akun ini menggunakan social login, tidak bisa reset password"
      );
    }

    // Generate reset token
    const token = jwt.sign(
      { userId: user.id, email: user.email, purpose: "password_reset" },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Save reset token
    await prisma.resetPasswords.create({
      data: {
        userId: user.id,
        token,
        expiresAt: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
      },
    });

    // Send reset password email
    await sendPasswordResetEmail(email, token);

    return { message: "Link reset password telah dikirim ke email" };
  }

  static async resetPassword(token: string, newPassword: string) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload & {
        purpose: string;
      };

      if (decoded.purpose !== "password_reset") {
        throw new Error("Token tidak valid");
      }

      // Check if token already used
      const resetRequest = await prisma.resetPasswords.findFirst({
        where: {
          token,
          used: false,
          expiresAt: { gt: new Date() },
          userId: decoded.userId,
        },
      });

      if (!resetRequest) {
        throw new Error("Token tidak valid atau sudah kadaluarsa");
      }

      // Hash new password
      const hashedPassword = await bcrypt.hash(newPassword, 12);

      // Update user password
      await prisma.users.update({
        where: { id: decoded.userId },
        data: { password: hashedPassword },
      });

      // Mark token as used
      await prisma.resetPasswords.update({
        where: { id: resetRequest.id },
        data: { used: true },
      });

      return { message: "Password berhasil direset" };
    } catch (error) {
      throw new Error("Token tidak valid");
    }
  }

  static async resendVerification(email: string) {
    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error("Email tidak ditemukan");
    }

    if (user.isVerified) {
      throw new Error("Email sudah terverifikasi");
    }

    // Generate new verification token
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Delete old verification tokens
    await prisma.emailVerifications.deleteMany({
      where: { userId: user.id },
    });

    // Create new verification token
    await prisma.emailVerifications.create({
      data: {
        userId: user.id,
        token,
        expiresAt: new Date(Date.now() + 60 * 60 * 1000),
      },
    });

    // Send verification email
    await sendVerificationEmail(email, token);

    return { message: "Email verifikasi telah dikirim ulang" };
  }
}
