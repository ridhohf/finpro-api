import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { PORT } from './config';
import { NotFoundMiddleware } from './middlewares/not-found.middleware';
import { ErrorHandlerMiddleware } from './middlewares/error-handler.middleware';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Cloudinary storage for payment proofs
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'stayinn/payment-proofs',
    allowed_formats: ['jpg', 'jpeg', 'png'],
    transformation: [
      { width: 800, height: 600, crop: 'limit' },
      { quality: 'auto:good' },
    ],
    public_id: (req: any, file: any) => {
      const timestamp = Date.now();
      const transactionId = req.params.id || 'unknown';
      return `payment-${transactionId}-${timestamp}`;
    },
  } as any,
});

// Multer configuration
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024, // 1MB limit as per requirement
    files: 1,
  },
  fileFilter: (req: any, file: any, cb: any) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];

    if (!allowedTypes.includes(file.mimetype)) {
      cb(new Error('Only .jpg, .jpeg, and .png files are allowed'));
      return;
    }

    cb(null, true);
  },
});

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private routes(): void {
    console.log('Cloudinary config loaded:', {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME ? 'Set' : 'Not set',
      api_key: process.env.CLOUDINARY_API_KEY ? 'Set' : 'Not set',
      api_secret: process.env.CLOUDINARY_API_SECRET ? 'Set' : 'Not set',
    });

    // Transaction Status Management Endpoints

    // Tenant confirm payment proof
    this.app.put(
      '/api/transactions/:id/confirm',
      async (req: Request, res: Response) => {
        try {
          const { id } = req.params;
          const transactionId = parseInt(id);

          console.log('=== Confirm payment endpoint hit ===');
          console.log('Transaction ID:', transactionId);

          const { PrismaClient } = require('./generated/prisma');
          const prisma = new PrismaClient();

          // Check if transaction exists and has correct status
          const transaction = await prisma.reservations.findUnique({
            where: { id: transactionId },
            include: {
              paymentProofs: true,
              property: {
                select: { tenantId: true },
              },
            },
          });

          if (!transaction) {
            await prisma.$disconnect();
            return res.status(404).json({
              success: false,
              message: 'Transaction not found',
            });
          }

          if (transaction.status !== 'PENDING_CONFIRMATION') {
            await prisma.$disconnect();
            return res.status(400).json({
              success: false,
              message:
                'Only transactions with PENDING_CONFIRMATION status can be confirmed',
            });
          }

          if (transaction.paymentProofs.length === 0) {
            await prisma.$disconnect();
            return res.status(400).json({
              success: false,
              message: 'No payment proof found for this transaction',
            });
          }

          // Update payment proof as valid
          await prisma.paymentProofs.updateMany({
            where: { reservationId: transactionId },
            data: { isValid: true },
          });

          // Update transaction status to CONFIRMED
          const updatedTransaction = await prisma.reservations.update({
            where: { id: transactionId },
            data: { status: 'CONFIRMED' },
          });

          await prisma.$disconnect();

          res.json({
            success: true,
            message: 'Payment confirmed successfully',
            data: {
              transactionId: updatedTransaction.id,
              status: updatedTransaction.status,
              confirmedAt: new Date().toISOString(),
            },
          });
        } catch (error) {
          console.error('Error confirming payment:', error);
          res.status(500).json({
            success: false,
            error:
              error instanceof Error ? error.message : 'Something went wrong',
          });
        }
      }
    );

    // Tenant reject payment proof
    this.app.put(
      '/api/transactions/:id/reject',
      async (req: Request, res: Response) => {
        try {
          const { id } = req.params;
          const { reason } = req.body; // Optional rejection reason
          const transactionId = parseInt(id);

          console.log('=== Reject payment endpoint hit ===');
          console.log('Transaction ID:', transactionId);
          console.log('Rejection reason:', reason);

          const { PrismaClient } = require('./generated/prisma');
          const prisma = new PrismaClient();

          // Check if transaction exists and has correct status
          const transaction = await prisma.reservations.findUnique({
            where: { id: transactionId },
            include: {
              paymentProofs: true,
              property: {
                select: { tenantId: true },
              },
            },
          });

          if (!transaction) {
            await prisma.$disconnect();
            return res.status(404).json({
              success: false,
              message: 'Transaction not found',
            });
          }

          if (transaction.status !== 'PENDING_CONFIRMATION') {
            await prisma.$disconnect();
            return res.status(400).json({
              success: false,
              message:
                'Only transactions with PENDING_CONFIRMATION status can be rejected',
            });
          }

          if (transaction.paymentProofs.length === 0) {
            await prisma.$disconnect();
            return res.status(400).json({
              success: false,
              message: 'No payment proof found for this transaction',
            });
          }

          // Update payment proof as invalid with rejection reason
          await prisma.paymentProofs.updateMany({
            where: { reservationId: transactionId },
            data: {
              isValid: false,
              rejectedReason: reason || 'Payment proof rejected by tenant',
            },
          });

          // Update transaction status back to PENDING_PAYMENT
          const updatedTransaction = await prisma.reservations.update({
            where: { id: transactionId },
            data: { status: 'PENDING_PAYMENT' },
          });

          await prisma.$disconnect();

          res.json({
            success: true,
            message: 'Payment proof rejected',
            data: {
              transactionId: updatedTransaction.id,
              status: updatedTransaction.status,
              rejectedAt: new Date().toISOString(),
              rejectionReason: reason || 'Payment proof rejected by tenant',
            },
          });
        } catch (error) {
          console.error('Error rejecting payment:', error);
          res.status(500).json({
            success: false,
            error:
              error instanceof Error ? error.message : 'Something went wrong',
          });
        }
      }
    );

    // Cancel transaction
    this.app.put(
      '/api/transactions/:id/cancel',
      async (req: Request, res: Response) => {
        try {
          const { id } = req.params;
          const { reason } = req.body; // Optional cancellation reason
          const transactionId = parseInt(id);

          console.log('=== Cancel transaction endpoint hit ===');
          console.log('Transaction ID:', transactionId);
          console.log('Cancellation reason:', reason);

          const { PrismaClient } = require('./generated/prisma');
          const prisma = new PrismaClient();

          // Check if transaction exists
          const transaction = await prisma.reservations.findUnique({
            where: { id: transactionId },
          });

          if (!transaction) {
            await prisma.$disconnect();
            return res.status(404).json({
              success: false,
              message: 'Transaction not found',
            });
          }

          // Check if transaction can be cancelled
          const cancellableStatuses = [
            'PENDING_PAYMENT',
            'PENDING_CONFIRMATION',
          ];
          if (!cancellableStatuses.includes(transaction.status)) {
            await prisma.$disconnect();
            return res.status(400).json({
              success: false,
              message: 'Only pending transactions can be cancelled',
            });
          }

          // Update transaction status to CANCELLED
          const updatedTransaction = await prisma.reservations.update({
            where: { id: transactionId },
            data: { status: 'CANCELLED' },
          });

          // Optional: Mark payment proofs as invalid if they exist
          await prisma.paymentProofs.updateMany({
            where: { reservationId: transactionId },
            data: {
              isValid: false,
              rejectedReason: reason || 'Transaction cancelled',
            },
          });

          await prisma.$disconnect();

          res.json({
            success: true,
            message: 'Transaction cancelled successfully',
            data: {
              transactionId: updatedTransaction.id,
              status: updatedTransaction.status,
              cancelledAt: new Date().toISOString(),
              cancellationReason: reason || 'Transaction cancelled',
            },
          });
        } catch (error) {
          console.error('Error cancelling transaction:', error);
          res.status(500).json({
            success: false,
            error:
              error instanceof Error ? error.message : 'Something went wrong',
          });
        }
      }
    );

    // Test endpoints
    this.app.get('/health', (req: Request, res: Response) => {
      res.json({ status: 'OK', timestamp: new Date().toISOString() });
    });

    this.app.get('/test', (req: Request, res: Response) => {
      res.send('Simple test OK');
    });

    // Check existing data endpoint
    this.app.get('/api/check-data', async (req: Request, res: Response) => {
      try {
        const { PrismaClient } = require('./generated/prisma');
        const prisma = new PrismaClient();

        const users = await prisma.users.findMany({
          select: { id: true, name: true, role: true, email: true },
        });

        const properties = await prisma.properties.findMany({
          select: { id: true, name: true, tenantId: true },
        });

        const rooms = await prisma.rooms.findMany({
          select: { id: true, name: true, propertyId: true },
        });

        await prisma.$disconnect();

        res.json({
          success: true,
          message: 'Data retrieved successfully',
          data: {
            users,
            properties,
            rooms,
          },
        });
      } catch (error) {
        console.error('Error checking data:', error);
        res.status(500).json({
          success: false,
          error: error instanceof Error ? error.message : 'Error',
        });
      }
    });

    // Setup test data endpoint
    this.app.post(
      '/api/setup-test-data',
      async (req: Request, res: Response) => {
        try {
          const { PrismaClient } = require('./generated/prisma');
          const prisma = new PrismaClient();

          console.log('Creating test user...');
          const user = await prisma.users.create({
            data: {
              name: 'Test User',
              email: 'testuser@example.com',
              role: 'user',
              isVerified: true,
            },
          });
          console.log('User created:', user.id);

          console.log('Creating test tenant...');
          const tenant = await prisma.users.create({
            data: {
              name: 'Test Tenant',
              email: 'tenant@example.com',
              role: 'tenant',
              isVerified: true,
            },
          });
          console.log('Tenant created:', tenant.id);

          console.log('Creating test property category...');
          const category = await prisma.propertyCategories.create({
            data: {
              tenantId: tenant.id,
              name: 'Hotel',
              description: 'Test hotel category',
            },
          });
          console.log('Category created:', category.id);

          console.log('Creating test property...');
          const property = await prisma.properties.create({
            data: {
              tenantId: tenant.id,
              categoryId: category.id,
              name: 'Test Hotel',
              description: 'Test hotel for booking',
              picture: 'test-hotel.jpg',
              address: 'Jl. Test No. 123',
              city: 'Jakarta',
            },
          });
          console.log('Property created:', property.id);

          console.log('Creating test room...');
          const room = await prisma.rooms.create({
            data: {
              propertyId: property.id,
              name: 'Standard Room',
              description: 'Test standard room',
              basePrice: 500000,
            },
          });
          console.log('Room created:', room.id);

          await prisma.$disconnect();

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
      }
    );

    // Transaction endpoint - CREATE
    this.app.post('/api/transactions', async (req: Request, res: Response) => {
      try {
        console.log('=== Transaction endpoint hit ===');
        console.log('Request body:', req.body);

        const { roomId, checkIn, checkOut, duration } = req.body;
        console.log('Parsed data:', { roomId, checkIn, checkOut, duration });

        // Import Prisma client
        console.log('Importing Prisma client...');
        const { PrismaClient } = require('./generated/prisma');
        const prisma = new PrismaClient();
        console.log('Prisma client created');

        // Get first available user with role 'user'
        const user = await prisma.users.findFirst({
          where: { role: 'user' },
        });

        if (!user) {
          return res.status(400).json({
            success: false,
            error: 'No user found. Please create test data first.',
          });
        }

        // Get first available property
        const property = await prisma.properties.findFirst();

        if (!property) {
          return res.status(400).json({
            success: false,
            error: 'No property found. Please create test data first.',
          });
        }

        console.log('Creating reservation...');
        const reservation = await prisma.reservations.create({
          data: {
            userId: user.id,
            propertyId: property.id,
            roomId: parseInt(roomId),
            checkIn: new Date(checkIn),
            checkOut: new Date(checkOut),
            duration: parseInt(duration),
            totalPrice: 500000,
            status: 'PENDING_PAYMENT',
          },
        });
        console.log('Reservation created:', reservation);

        await prisma.$disconnect();
        console.log('Prisma disconnected');

        res.status(201).json({
          success: true,
          message: 'Booking saved to database successfully',
          data: reservation,
        });
      } catch (error) {
        console.error('=== ERROR in transaction endpoint ===');
        console.error('Error details:', error);
        res.status(500).json({
          success: false,
          error:
            error instanceof Error ? error.message : 'Something went wrong',
        });
      }
    });

    // Transaction endpoint - GET ALL
    this.app.get('/api/transactions', async (req: Request, res: Response) => {
      try {
        const { PrismaClient } = require('./generated/prisma');
        const prisma = new PrismaClient();

        const reservations = await prisma.reservations.findMany({
          include: {
            room: { select: { name: true, basePrice: true } },
            property: { select: { name: true, address: true, city: true } },
            user: { select: { name: true, email: true } },
          },
          orderBy: { createdAt: 'desc' },
        });

        await prisma.$disconnect();

        res.json({
          success: true,
          message: 'Transactions retrieved successfully',
          data: reservations,
          count: reservations.length,
        });
      } catch (error) {
        console.error('Error getting transactions:', error);
        res.status(500).json({
          success: false,
          error: error instanceof Error ? error.message : 'Error',
        });
      }
    });

    // Transaction endpoint - GET BY ID
    this.app.get(
      '/api/transactions/:id',
      async (req: Request, res: Response) => {
        try {
          const { id } = req.params;
          const { PrismaClient } = require('./generated/prisma');
          const prisma = new PrismaClient();

          const reservation = await prisma.reservations.findUnique({
            where: { id: parseInt(id) },
            include: {
              room: {
                select: {
                  name: true,
                  basePrice: true,
                  description: true,
                  picture: true,
                },
              },
              property: {
                select: {
                  name: true,
                  address: true,
                  city: true,
                  description: true,
                  picture: true,
                  tenant: {
                    select: { name: true, email: true },
                  },
                },
              },
              user: {
                select: { name: true, email: true },
              },
              paymentProofs: {
                select: {
                  id: true,
                  image: true,
                  isValid: true,
                  uploadedAt: true,
                  rejectedReason: true,
                },
              },
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
            message: 'Transaction details retrieved successfully',
            data: reservation,
          });
        } catch (error) {
          console.error('Error getting transaction by ID:', error);
          res.status(500).json({
            success: false,
            error: error instanceof Error ? error.message : 'Error',
          });
        }
      }
    );

    // Payment Proof Upload endpoint
    this.app.post(
      '/api/transactions/:id/payment-proof',
      upload.single('payment_proof'),
      async (req: Request, res: Response) => {
        try {
          const { id } = req.params;
          const transactionId = parseInt(id);

          console.log('=== Payment proof upload endpoint hit ===');
          console.log('Transaction ID:', transactionId);
          console.log('File info:', req.file);

          if (!req.file) {
            return res.status(400).json({
              success: false,
              message: 'No payment proof image uploaded',
            });
          }

          const { PrismaClient } = require('./generated/prisma');
          const prisma = new PrismaClient();

          // Check if transaction exists and has correct status
          const transaction = await prisma.reservations.findUnique({
            where: { id: transactionId },
          });

          if (!transaction) {
            return res.status(404).json({
              success: false,
              message: 'Transaction not found',
            });
          }

          if (transaction.status !== 'PENDING_PAYMENT') {
            return res.status(400).json({
              success: false,
              message:
                'Payment proof can only be uploaded for transactions with PENDING_PAYMENT status',
            });
          }

          // Check if payment is still within 1 hour limit (as per requirement)
          const createdAt = new Date(transaction.createdAt);
          const oneHourLater = new Date(createdAt.getTime() + 60 * 60 * 1000);

          if (new Date() > oneHourLater) {
            // Auto-cancel expired transaction
            await prisma.reservations.update({
              where: { id: transactionId },
              data: { status: 'CANCELLED' },
            });

            return res.status(400).json({
              success: false,
              message:
                'Payment time has expired. Booking has been automatically cancelled.',
            });
          }

          // Delete existing payment proof if any
          await prisma.paymentProofs.deleteMany({
            where: { reservationId: transactionId },
          });

          // Create new payment proof record
          const paymentProof = await prisma.paymentProofs.create({
            data: {
              reservationId: transactionId,
              image: req.file.path, // Cloudinary URL
              isValid: false, // Will be validated by tenant
            },
          });

          // Update transaction status to PENDING_CONFIRMATION
          await prisma.reservations.update({
            where: { id: transactionId },
            data: { status: 'PENDING_CONFIRMATION' },
          });

          await prisma.$disconnect();

          res.status(200).json({
            success: true,
            message: 'Payment proof uploaded successfully',
            data: {
              paymentProof,
              imageUrl: req.file.path,
              transactionStatus: 'PENDING_CONFIRMATION',
            },
          });
        } catch (error) {
          console.error('=== ERROR in payment proof upload ===');
          console.error('Error details:', error);

          // Handle specific multer errors
          if (
            error instanceof Error &&
            error.message.includes(
              'Only .jpg, .jpeg, and .png files are allowed'
            )
          ) {
            return res.status(400).json({
              success: false,
              message:
                'Invalid file format. Only .jpg, .jpeg, and .png files are allowed',
            });
          }

          if (
            error instanceof Error &&
            error.message.includes('File too large')
          ) {
            return res.status(400).json({
              success: false,
              message: 'File size too large. Maximum size is 1MB',
            });
          }

          res.status(500).json({
            success: false,
            error:
              error instanceof Error ? error.message : 'Something went wrong',
          });
        }
      }
    );
  }

  private handleError(): void {
    this.app.use(NotFoundMiddleware.handle());
    this.app.use(ErrorHandlerMiddleware.handle());
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }
}
