import { config } from 'dotenv';
import { resolve } from 'path';

export const NODE_ENV = process.env.NODE_ENV || 'development';

const envFile = NODE_ENV === 'development' ? '.env.development' : '.env';

config({ path: resolve(__dirname, `../${envFile}`) });
config({ path: resolve(__dirname, `../${envFile}.local`), override: true });

// Load all environment variables from `.env` file
export const PORT = process.env.PORT || 8000;
export const DATABASE_URL = process.env.DATABASE_URL || '';

// JWT
export const JWT_SECRET_KEY =
  process.env.JWT_SECRET_KEY || 'ccb3f75b4ab7d102dd2926444a71d029';
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

// Email
export const EMAIL_HOST = process.env.EMAIL_HOST || 'smtp.gmail.com';
export const EMAIL_PORT = process.env.EMAIL_PORT || 587;
export const EMAIL_USER = process.env.EMAIL_USER || '';
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || '';
export const EMAIL_FROM =
  process.env.EMAIL_FROM || 'StayInn <twiceoncess2015@gmail.com>';

// Cloudinary
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || '';
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || '';
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || '';

// OpenCage Geocoding API
export const OPENCAGE_API_KEY = process.env.OPENCAGE_API_KEY || '';

// OAuth
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';

// Client URL
export const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';
