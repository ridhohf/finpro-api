import crypto from "crypto";

export class TokenUtil {
  static generate(): string {
    return crypto.randomBytes(32).toString("hex");
  }

  static getExpiry(hours: number = 1): Date {
    return new Date(Date.now() + hours * 60 * 60 * 1000);
  }
}
