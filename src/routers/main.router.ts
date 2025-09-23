import { Router } from 'express';

export class MainRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    // Health check
    this.router.get('/health', (req, res) => {
      res.json({ status: 'OK', timestamp: new Date().toISOString() });
    });

    // Basic API info
    this.router.get('/api', (req, res) => {
      res.json({
        message: 'StayInn API v1.0',
        timestamp: new Date().toISOString(),
      });
    });

    // Transaction endpoints untuk Feature 2
    this.router.post('/api/transactions', this.createTransaction.bind(this));
    this.router.get('/api/transactions', this.getTransactions.bind(this));
    this.router.get(
      '/api/transactions/:id',
      this.getTransactionById.bind(this)
    );
  }

  // Create new booking transaction
  private async createTransaction(req: any, res: any) {
    try {
      const { PrismaClient } = require('../generated/prisma');
      const prisma = new PrismaClient();

      const { roomId, checkIn, checkOut, duration } = req.body;
      const testUserId = 1; // Hardcode untuk testing

      // Basic validation
      if (!roomId || !checkIn || !checkOut || !duration) {
        return res.status(400).json({
          success: false,
          message:
            'Missing required fields: roomId, checkIn, checkOut, duration',
        });
      }

      // Create reservation
      const reservation = await prisma.reservations.create({
        data: {
          userId: testUserId,
          propertyId: 1, // Hardcode untuk testing
          roomId: parseInt(roomId),
          checkIn: new Date(checkIn),
          checkOut: new Date(checkOut),
          duration: parseInt(duration),
          totalPrice: 500000, // Hardcode untuk testing
          status: 'PENDING_PAYMENT',
        },
      });

      await prisma.$disconnect();

      res.status(201).json({
        success: true,
        message: 'Booking created successfully',
        data: reservation,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to create booking',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  // Get user transactions
  private async getTransactions(req: any, res: any) {
    try {
      const { PrismaClient } = require('../generated/prisma');
      const prisma = new PrismaClient();

      const reservations = await prisma.reservations.findMany({
        where: { userId: 1 }, // Hardcode untuk testing
        include: {
          room: { select: { name: true } },
          property: { select: { name: true, city: true } },
        },
        orderBy: { createdAt: 'desc' },
      });

      await prisma.$disconnect();

      res.json({
        success: true,
        data: reservations,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  // Get transaction by ID
  private async getTransactionById(req: any, res: any) {
    try {
      const { PrismaClient } = require('../generated/prisma');
      const prisma = new PrismaClient();

      const { id } = req.params;

      const reservation = await prisma.reservations.findUnique({
        where: { id: parseInt(id) },
        include: {
          room: true,
          property: true,
          paymentProofs: true,
        },
      });

      await prisma.$disconnect();

      if (!reservation) {
        return res.status(404).json({
          success: false,
          message: 'Transaction not found',
        });
      }

      res.json({
        success: true,
        data: reservation,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  public getRouter(): Router {
    return this.router;
  }
}
