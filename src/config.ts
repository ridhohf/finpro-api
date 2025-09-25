import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 8000,
  nodeEnv: process.env.NODE_ENV || "development",

  // Database
  databaseUrl: process.env.DATABASE_URL!,
  directUrl: process.env.DIRECT_URL,

  // JWT
  jwtSecret: process.env.JWT_SECRET!,
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET!,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "24h",
  jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d",

  // Email
  emailHost: process.env.EMAIL_HOST!,
  emailPort: parseInt(process.env.EMAIL_PORT || "587"),
  emailUser: process.env.EMAIL_USER!,
  emailPassword: process.env.EMAIL_PASSWORD!,
  emailFrom: process.env.EMAIL_FROM!,

  // Frontend URLs
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:3000",

  // Google OAuth
  googleClientId: process.env.GOOGLE_CLIENT_ID!,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET!,

  // Cloudinary
  cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME!,
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY!,
  cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET!,

  // Security
  bcryptSaltRounds: 12,
  verificationTokenExpiry: 60 * 60 * 1000, // 1 hour
  resetPasswordTokenExpiry: 60 * 60 * 1000, // 1 hour
};
