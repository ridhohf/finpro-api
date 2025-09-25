import app from "./app";
import { config } from "./config";
import logger from "./utils/logger";
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const startServer = async () => {
  try {
    // Test database connection
    await prisma.$connect();
    logger.info("✅ Database connected successfully");

    // Start server
    app.listen(config.port, () => {
      logger.info(`🚀 Server running on port ${config.port}`);
      logger.info(`📱 Environment: ${config.nodeEnv}`);
      logger.info(`🌐 Frontend URL: ${config.frontendUrl}`);
    });
  } catch (error) {
    logger.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

// Graceful shutdown
process.on("SIGINT", async () => {
  logger.info("🔄 Shutting down gracefully...");
  await prisma.$disconnect();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  logger.info("🔄 Shutting down gracefully...");
  await prisma.$disconnect();
  process.exit(0);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err: any) => {
  logger.error("Unhandled Promise Rejection:", err);
  process.exit(1);
});

startServer();
