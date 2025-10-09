import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export class TransactionAuthorization {
  async validateUserOwnership(
    userId: number,
    transactionId: number
  ): Promise<void> {
    const transaction = await prisma.reservations.findUnique({
      where: { id: transactionId },
      select: { userId: true },
    });

    if (!transaction) {
      throw new Error('Transaction not found');
    }

    if (transaction.userId !== userId) {
      throw new Error('Unauthorized: You can only access your own bookings');
    }
  }

  async validateTenantOwnership(
    tenantId: number,
    transactionId: number
  ): Promise<void> {
    const transaction = await prisma.reservations.findUnique({
      where: { id: transactionId },
      include: { property: { select: { tenantId: true } } },
    });

    if (!transaction) {
      throw new Error('Transaction not found');
    }

    if (transaction.property.tenantId !== tenantId) {
      throw new Error(
        'Unauthorized: You can only manage bookings for your properties'
      );
    }
  }

  async canCancelTransaction(
    userId: number,
    transactionId: number,
    userRole: string
  ): Promise<boolean> {
    const transaction = await prisma.reservations.findUnique({
      where: { id: transactionId },
      select: {
        userId: true,
        status: true,
        property: { select: { tenantId: true } },
      },
    });

    if (!transaction) throw new Error('Transaction not found');

    const cancellableStatuses = ['PENDING_PAYMENT', 'PENDING_CONFIRMATION'];
    if (!cancellableStatuses.includes(transaction.status)) {
      return false;
    }

    if (userRole === 'user') {
      return transaction.userId === userId;
    }

    if (userRole === 'tenant') {
      return transaction.property.tenantId === userId;
    }

    return false;
  }

  async canUploadPaymentProof(
    userId: number,
    transactionId: number
  ): Promise<void> {
    const transaction = await prisma.reservations.findUnique({
      where: { id: transactionId },
      select: { userId: true, status: true },
    });

    if (!transaction) throw new Error('Transaction not found');

    if (transaction.userId !== userId) {
      throw new Error('Unauthorized: This is not your booking');
    }

    if (transaction.status !== 'PENDING_PAYMENT') {
      throw new Error(
        'Payment proof can only be uploaded for pending payments'
      );
    }
  }
}

export const transactionAuth = new TransactionAuthorization();
