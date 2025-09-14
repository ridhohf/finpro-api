import express from "express";
import {
  authenticateToken,
  requireRole,
  AuthenticatedRequest,
} from "../middlewares/auth.middleware";
import { sendSuccess } from "../utils/apiResponse";

const router = express.Router();

router.get("/profile", authenticateToken, (req: AuthenticatedRequest, res) => {
  sendSuccess(res, "Profile data", { user: req.user });
});

router.get(
  "/admin-only",
  authenticateToken,
  requireRole(["TENANT"]),
  (req: AuthenticatedRequest, res) => {
    sendSuccess(res, "Hanya untuk tenant", { user: req.user });
  }
);

router.get(
  "/user-only",
  authenticateToken,
  requireRole(["USER"]),
  (req: AuthenticatedRequest, res) => {
    sendSuccess(res, "Hanya untuk user", { user: req.user });
  }
);

export default router;
