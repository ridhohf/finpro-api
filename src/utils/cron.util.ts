import cron from 'node-cron';
import { TransactionService } from '../services/transaction.service';

const transactionService = new TransactionService();

export function setupCronJobs() {
  // Auto-cancel expired bookings every 10 minutes
  cron.schedule('*/10 * * * *', async () => {
    console.log('Running auto-cancel job...');
    try {
      await transactionService.autoCancelExpired();
    } catch (error) {
      console.error('Error in auto-cancel job:', error);
    }
  });

  // Send check-in reminders every hour
  cron.schedule('0 * * * *', async () => {
    console.log('Running check-in reminder job...');
    try {
      await transactionService.sendUpcomingCheckInReminders();
    } catch (error) {
      console.error('Error in check-in reminder job:', error);
    }
  });

  console.log('Cron jobs initialized');
}
