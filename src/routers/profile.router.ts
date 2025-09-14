import express from "express";
import {
  authenticateToken,
  AuthenticatedRequest,
} from "../middlewares/auth.middleware";
import { prisma } from "../lib/prisma";
import { sendSuccess, sendError } from "../utils/apiResponse";
import bcrypt from "bcrypt";

const router = express.Router();

router.get("/", authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const user = await prisma.users.findUnique({
      where: { id: req.user!.id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        avatar: true,
        isVerified: true,
        createdAt: true,
        tenantProfile: true,
      },
    });

    if (!user) {
      return sendError(res, 404, "User tidak ditemukan");
    }

    sendSuccess(res, "Profile data", { user });
  } catch (error) {
    console.error("Profile error:", error);
    sendError(res, 500, "Internal server error");
  }
});

router.put("/", authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { name, avatar } = req.body;

    const user = await prisma.users.update({
      where: { id: req.user!.id },
      data: { name, avatar },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        avatar: true,
        isVerified: true,
        tenantProfile: true,
      },
    });

    sendSuccess(res, "Profile updated", { user });
  } catch (error) {
    console.error("Update profile error:", error);
    sendError(res, 500, "Internal server error");
  }
});

router.put(
  "/password",
  authenticateToken,
  async (req: AuthenticatedRequest, res) => {
    try {
      const { currentPassword, newPassword } = req.body;

      const user = await prisma.users.findUnique({
        where: { id: req.user!.id },
      });

      if (!user || !user.password) {
        return sendError(res, 400, "User tidak valid");
      }

      const isPasswordValid = await bcrypt.compare(
        currentPassword,
        user.password
      );
      if (!isPasswordValid) {
        return sendError(res, 400, "Password saat ini salah");
      }

      const hashedPassword = await bcrypt.hash(newPassword, 12);

      await prisma.users.update({
        where: { id: req.user!.id },
        data: { password: hashedPassword },
      });

      sendSuccess(res, "Password updated");
    } catch (error) {
      console.error("Update password error:", error);
      sendError(res, 500, "Internal server error");
    }
  }
);

export default router;
