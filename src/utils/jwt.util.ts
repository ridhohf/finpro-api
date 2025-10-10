import jwt, { SignOptions } from 'jsonwebtoken';

interface JWTPayload {
  id: number;
  email: string;
  role: string;
}

export class JwtUtil {
  static generateToken(payload: JWTPayload): string {
    const secret = process.env.JWT_SECRET_KEY;
    
    if (!secret) {
      console.error("❌ JWT_SECRET_KEY is not defined!");
      throw new Error('JWT_SECRET_KEY is not defined');
    }

    console.log("🔐 Generating token with JWT_SECRET_KEY:", secret.substring(0, 15) + "...");

    const expiresIn = (process.env.JWT_EXPIRES_IN || '7d') as SignOptions['expiresIn'];
    const options: SignOptions = { expiresIn };

    const token = jwt.sign(payload, secret, options);
    console.log("✅ Token generated successfully");
    
    return token;
  }

  static verifyToken(token: string): JWTPayload {
    const secret = process.env.JWT_SECRET_KEY;
    
    if (!secret) {
      console.error("❌ JWT_SECRET_KEY is not defined!");
      throw new Error('JWT_SECRET_KEY is not defined');
    }


    try {
      const payload = jwt.verify(token, secret) as JWTPayload;
      return payload;
    } catch (error: any) {
      console.error("❌ Token verification failed:", error.message);
      throw error;
    }
  }
}