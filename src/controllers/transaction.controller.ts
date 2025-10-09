import { Request, Response } from 'express';
import { TransactionService } from '../services/transaction.service';

interface AuthRequest extends Request {
  user?: {
    id: number;
    role: string;
    email: string;
  };
}

export class TransactionController {
  private transactionService = new TransactionService();

  create = async (req: AuthRequest, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'Authentication required',
        });
      }

      if (req.user.role !== 'user') {
        return res.status(403).json({
          success: false,
          message: 'Only users can create bookings',
        });
      }

      const reservation = await this.transactionService.createTransaction(
        req.user.id,
        req.body
      );

      res.status(201).json({
        success: true,
        message: 'Booking created successfully',
        data: reservation,
      });
    } catch (error) {
      this.handleError(res, error);
    }
  };

  getAll = async (req: AuthRequest, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'Authentication required',
        });
      }

      const { status, propertyId, startDate, endDate } = req.query;

      const filters = {
        status: status as string,
        propertyId: propertyId ? parseInt(propertyId as string) : undefined,
        startDate: startDate as string,
        endDate: endDate as string,
      };

      const reservations = await this.transactionService.getAllTransactions(
        req.user.id,
        req.user.role,
        filters
      );

      res.json({
        success: true,
        message: 'Transactions retrieved successfully',
        data: reservations,
        count: reservations.length,
      });
    } catch (error) {
      this.handleError(res, error);
    }
  };

  getById = async (req: AuthRequest, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'Authentication required',
        });
      }

      const { id } = req.params;
      const reservation = await this.transactionService.getTransactionById(
        parseInt(id),
        req.user.id,
        req.user.role
      );

      res.json({
        success: true,
        message: 'Transaction details retrieved',
        data: reservation,
      });
    } catch (error) {
      this.handleError(res, error, 404);
    }
  };

  uploadPaymentProof = async (req: AuthRequest, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'Authentication required',
        });
      }

      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: 'No payment proof image uploaded',
        });
      }

      const { id } = req.params;

      const result = await this.transactionService.uploadPaymentProof(
        req.user.id,
        parseInt(id),
        req.file.path
      );

      res.status(200).json({
        success: true,
        message: 'Payment proof uploaded successfully',
        data: {
          transactionId: result.id,
          status: result.status,
        },
      });
    } catch (error) {
      this.handleFileUploadError(res, error);
    }
  };

  confirmPayment = async (req: AuthRequest, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'Authentication required',
        });
      }

      if (req.user.role !== 'tenant') {
        return res.status(403).json({
          success: false,
          message: 'Only tenants can confirm payments',
        });
      }

      const { id } = req.params;
      const updatedTransaction = await this.transactionService.confirmPayment(
        req.user.id,
        parseInt(id)
      );

      res.json({
        success: true,
        message: 'Payment confirmed and email sent',
        data: {
          transactionId: updatedTransaction.id,
          status: updatedTransaction.status,
          confirmedAt: new Date().toISOString(),
        },
      });
    } catch (error) {
      this.handleError(res, error);
    }
  };

  rejectPayment = async (req: AuthRequest, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'Authentication required',
        });
      }

      if (req.user.role !== 'tenant') {
        return res.status(403).json({
          success: false,
          message: 'Only tenants can reject payments',
        });
      }

      const { id } = req.params;
      const { reason } = req.body;

      const updatedTransaction = await this.transactionService.rejectPayment(
        req.user.id,
        parseInt(id),
        reason
      );

      res.json({
        success: true,
        message: 'Payment proof rejected',
        data: {
          transactionId: updatedTransaction.id,
          status: updatedTransaction.status,
          rejectedAt: new Date().toISOString(),
        },
      });
    } catch (error) {
      this.handleError(res, error);
    }
  };

  cancelTransaction = async (req: AuthRequest, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'Authentication required',
        });
      }

      const { id } = req.params;
      const { reason } = req.body;

      await this.transactionService.cancelTransaction(
        req.user.id,
        req.user.role,
        parseInt(id),
        reason
      );

      res.json({
        success: true,
        message: 'Transaction cancelled successfully',
        data: {
          transactionId: parseInt(id),
          cancelledAt: new Date().toISOString(),
        },
      });
    } catch (error) {
      this.handleError(res, error);
    }
  };

  private handleError(res: Response, error: unknown, defaultStatus = 500) {
    const errorMessage =
      error instanceof Error ? error.message : 'Internal server error';

    let statusCode = defaultStatus;

    if (errorMessage.includes('not found')) statusCode = 404;
    if (errorMessage.includes('Unauthorized')) statusCode = 403;
    if (errorMessage.includes('not available')) statusCode = 409;
    if (errorMessage.includes('expired')) statusCode = 410;

    res.status(statusCode).json({
      success: false,
      error: errorMessage,
    });
  }

  private handleFileUploadError(res: Response, error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'File upload failed';

    if (errorMessage.includes('Only .jpg')) {
      return res.status(400).json({
        success: false,
        message: 'Invalid file format. Only .jpg, .jpeg, and .png allowed',
      });
    }

    if (errorMessage.includes('File too large')) {
      return res.status(400).json({
        success: false,
        message: 'File too large. Maximum 1MB',
      });
    }

    res.status(500).json({
      success: false,
      error: errorMessage,
    });
  }
}
