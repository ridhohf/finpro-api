import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

export class TestDataController {
  private prisma = new PrismaClient();

  checkData = async (req: Request, res: Response) => {
    try {
      const users = await this.prisma.users.findMany({
        select: { id: true, name: true, role: true, email: true },
      });

      const properties = await this.prisma.properties.findMany({
        select: { id: true, name: true, tenantId: true },
      });

      const rooms = await this.prisma.rooms.findMany({
        select: { id: true, name: true, propertyId: true },
      });

      await this.prisma.$disconnect();

      res.json({
        success: true,
        message: 'Data retrieved',
        data: { users, properties, rooms },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Error',
      });
    }
  };

  setupTestData = async (req: Request, res: Response) => {
    try {
      console.log('Creating test user...');
      const user = await this.prisma.users.upsert({
        where: { email: 'testuser@example.com' },
        update: {}, // atau update field yang kamu mau
        create: {
          name: 'Test User',
          email: 'testuser@example.com',
          role: 'user',
          isVerified: true,
        },
      });

      console.log('User created:', user.id);

      console.log('Creating test tenant...');
      const tenant = await this.prisma.users.upsert({
        where: { email: 'apajalahbebas@example.com' },
        update: {},
        create: {
          name: 'Test Tenant',
          email: 'apajalahbebas@example.com',
          role: 'tenant',
          isVerified: true,
        },
      });

      console.log('Tenant created:', tenant.id);

      console.log('Creating test property category...');
      const category = await this.prisma.propertyCategories.create({
        data: {
          tenantId: tenant.id,
          name: 'Hotel',
          description: 'Test hotel category',
        },
      });
      console.log('Category created:', category.id);

      console.log('Creating test property...');
      const property = await this.prisma.properties.create({
        data: {
          tenantId: tenant.id,
          categoryId: category.id,
          name: 'Test Hotel',
          description: 'Test hotel for booking',
          picture: [],
          address: 'Jl. Test No. 123',
          city: 'Jakarta',
        },
      });
      console.log('Property created:', property.id);

      console.log('Creating test room...');
      const room = await this.prisma.rooms.create({
        data: {
          propertyId: property.id,
          name: 'Standard Room',
          description: 'Test standard room',
          basePrice: 500000,
          picture: [],
        },
      });
      console.log('Room created:', room.id);

      await this.prisma.$disconnect();

      res.json({
        success: true,
        message: 'Test data created successfully',
        data: {
          userId: user.id,
          tenantId: tenant.id,
          propertyId: property.id,
          roomId: room.id,
        },
      });
    } catch (error) {
      console.error('Error creating test data:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Error',
      });
    }
  };
}
