import jwt, { SignOptions } from "jsonwebtoken";
import { config } from "../config";

class TokenService {
  generateAccessToken(payload: object): string {
    const options: SignOptions = { expiresIn: config.jwtExpiresIn as any };
    return jwt.sign(payload, config.jwtSecret, options);
  }

  generateRefreshToken(payload: object): string {
    const options: SignOptions = {
      expiresIn: config.jwtRefreshExpiresIn as any,
    };
    return jwt.sign(payload, config.jwtRefreshSecret, options);
  }

  generateVerificationToken(): string {
    return jwt.sign(
      { type: "verification", timestamp: Date.now() },
      config.jwtSecret,
      { expiresIn: "1h" }
    );
  }

  generateResetToken(userId: number): string {
    return jwt.sign(
      { userId, type: "reset", timestamp: Date.now() },
      config.jwtSecret,
      { expiresIn: "1h" }
    );
  }

  verifyToken(token: string, secret: string = config.jwtSecret) {
    return jwt.verify(token, secret);
  }
}

export default new TokenService();
