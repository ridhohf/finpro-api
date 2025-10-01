import { Request, Response } from 'express';
import { TransactionService } from '../services/transaction.service';

export class TransactionController {
  private transactionService = new TransactionService();

  create = async (req: Request, res: Response) => {
    try {
      const reservation = await this.transactionService.createTransaction(
        req.body
      );
      res.status(201).json({
        success: true,
        message: 'Booking created successfully',
        data: reservation,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Error',
      });
    }
  };

  getAll = async (req: Request, res: Response) => {
    try {
      const { status, userId, propertyId, startDate, endDate } = req.query;

      const filters = {
        status: status as string,
        userId: userId ? parseInt(userId as string) : undefined,
        propertyId: propertyId ? parseInt(propertyId as string) : undefined,
        startDate: startDate as string,
        endDate: endDate as string,
      };

      const reservations = await this.transactionService.getAllTransactions(
        filters
      );

      res.json({
        success: true,
        message: 'Transactions retrieved successfully',
        data: reservations,
        count: reservations.length,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Error',
      });
    }
  };

  getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const reservation = await this.transactionService.getTransactionById(
        parseInt(id)
      );

      res.json({
        success: true,
        message: 'Transaction details retrieved',
        data: reservation,
      });
    } catch (error) {
      const statusCode =
        error instanceof Error && error.message === 'Transaction not found'
          ? 404
          : 500;
      res.status(statusCode).json({
        success: false,
        error: error instanceof Error ? error.message : 'Error',
      });
    }
  };

  uploadPaymentProof = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: 'No payment proof image uploaded',
        });
      }

      const result = await this.transactionService.uploadPaymentProof(
        parseInt(id),
        req.file.path
      );

      res.status(200).json({
        success: true,
        message: 'Payment proof uploaded successfully',
        data: {
          paymentProof: result.paymentProof,
          imageUrl: req.file.path,
          transactionStatus: result.status,
        },
      });
    } catch (error) {
      if (
        error instanceof Error &&
        error.message.includes('Only .jpg, .jpeg, and .png files are allowed')
      ) {
        return res.status(400).json({
          success: false,
          message: 'Invalid file format. Only .jpg, .jpeg, and .png allowed',
        });
      }

      if (error instanceof Error && error.message.includes('File too large')) {
        return res.status(400).json({
          success: false,
          message: 'File too large. Maximum 1MB',
        });
      }

      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Error',
      });
    }
  };

  confirmPayment = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedTransaction = await this.transactionService.confirmPayment(
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
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Error',
      });
    }
  };

  rejectPayment = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { reason } = req.body;

      const updatedTransaction = await this.transactionService.rejectPayment(
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
          rejectionReason: reason || 'Payment proof rejected',
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Error',
      });
    }
  };

  cancelTransaction = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { reason } = req.body;

      const updatedTransaction =
        await this.transactionService.cancelTransaction(parseInt(id), reason);

      res.json({
        success: true,
        message: 'Transaction cancelled',
        data: {
          transactionId: updatedTransaction.id,
          status: updatedTransaction.status,
          cancelledAt: new Date().toISOString(),
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Error',
      });
    }
  };
}
