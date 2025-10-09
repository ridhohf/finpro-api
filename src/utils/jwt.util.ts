import jwt, { SignOptions } from "jsonwebtoken";

interface JWTPayload {
  id: number;
  email: string;
  role: string;
}

export class JwtUtil {
  static generateToken(payload: JWTPayload): string {
    const secret = process.env.JWT_SECRET_KEY;
    if (!secret) {
      throw new Error("JWT_SECRET_KEY is not defined");
    }

    const expiresIn = (process.env.JWT_EXPIRES_IN ||
      "7d") as SignOptions["expiresIn"];

    const options: SignOptions = { expiresIn };

    return jwt.sign(payload, secret, options);
  }

  static verifyToken(token: string): JWTPayload {
    const secret = process.env.JWT_SECRET_KEY;
    if (!secret) {
      throw new Error("JWT_SECRET_KEY is not defined");
    }

    return jwt.verify(token, secret) as JWTPayload;
  }
}
