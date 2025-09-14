import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routers/auth.router";
import { errorHandler } from "./middlewares/error-handler.middleware";
import protectedRoutes from "./routers/protected";
import profileRoutes from "./routers/profile.router";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://your-production-domain.com"
        : "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/protected", protectedRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

// Error handling middleware (harus di akhir)
app.use(errorHandler); // Tambahkan ini

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
