import { config } from "../config";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

class VerificationService {
  async createVerification(userId: number, token: string) {
    return await prisma.emailVerifications.create({
      data: {
        userId,
        token,
        expiresAt: new Date(Date.now() + config.verificationTokenExpiry),
      },
    });
  }

  async findVerification(token: string) {
    return await prisma.emailVerifications.findFirst({
      where: {
        token,
        used: false,
        expiresAt: { gt: new Date() },
      },
      include: { user: true },
    });
  }

  async markVerificationUsed(id: number) {
    return await prisma.emailVerifications.update({
      where: { id },
      data: { used: true },
    });
  }

  async deleteUserVerifications(userId: number) {
    return await prisma.emailVerifications.deleteMany({
      where: { userId },
    });
  }

  async createPasswordReset(userId: number, token: string) {
    return await prisma.resetPasswords.create({
      data: {
        userId,
        token,
        expiresAt: new Date(Date.now() + config.resetPasswordTokenExpiry),
      },
    });
  }

  async findPasswordReset(token: string, userId: number) {
    return await prisma.resetPasswords.findFirst({
      where: {
        token,
        userId,
        used: false,
        expiresAt: { gt: new Date() },
      },
      include: { user: true },
    });
  }

  async markPasswordResetUsed(id: number) {
    return await prisma.resetPasswords.update({
      where: { id },
      data: { used: true },
    });
  }
}

export default new VerificationService();
