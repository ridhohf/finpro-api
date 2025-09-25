import { Router } from "express";
import authRoutes from "./auth.router";
import profileRoutes from "./profile.router";

const router = Router();

router.use("/auth", authRoutes);
router.use("/profile", profileRoutes);

// Health check endpoint
router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running properly",
    timestamp: new Date().toISOString(),
  });
});

export default router;
