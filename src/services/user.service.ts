import bcrypt from "bcrypt";
import { config } from "../config";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

interface CreateUserData {
  name: string;
  email: string;
  role: "user" | "tenant";
  provider?: string;
  providerId?: string;
  avatar?: string;
  isVerified?: boolean;
}

interface CreateTenantProfileData {
  userId: number;
  companyName: string;
  phone?: string;
  address?: string;
}

class UserService {
  async findByEmail(email: string) {
    return await prisma.users.findUnique({
      where: { email },
      include: {
        tenantProfile: true,
        socialLogins: true,
      },
    });
  }

  async findByEmailAndRole(email: string, role: string) {
    return await prisma.users.findFirst({
      where: { email, role },
      include: { tenantProfile: true },
    });
  }

  async findById(id: number) {
    return await prisma.users.findUnique({
      where: { id },
      include: { tenantProfile: true },
    });
  }

  async createUser(data: CreateUserData) {
    return await prisma.users.create({
      data,
      include: {
        tenantProfile: true,
        socialLogins: true,
      },
    });
  }

  async createTenantProfile(data: CreateTenantProfileData) {
    return await prisma.tenantProfile.create({
      data,
    });
  }

  async updateUser(id: number, data: any) {
    return await prisma.users.update({
      where: { id },
      data,
      include: { tenantProfile: true },
    });
  }

  async verifyPassword(
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, config.bcryptSaltRounds);
  }

  async createSocialLogin(
    userId: number,
    provider: string,
    providerId: string
  ) {
    return await prisma.socialLogins.create({
      data: { userId, provider, providerId },
    });
  }

  async findSocialLogin(provider: string, providerId: string) {
    return await prisma.socialLogins.findUnique({
      where: {
        provider_providerId: { provider, providerId },
      },
      include: { user: true },
    });
  }
}

export default new UserService();
