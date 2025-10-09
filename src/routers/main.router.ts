import { Router, Request, Response } from 'express';
import transactionRoutes from './transaction.routes';
import reviewRoutes from './review.routes';
import reportRoutes from './report.routes';

export class MainRouter {
  private router: Router;

  constructor() {
    this.router = Router();

    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    // Health check endpoint
    this.router.get('/health', (req: Request, res: Response) => {
      res.json({ status: 'OK', timestamp: new Date().toISOString() });
    });

    // User routes (protected - requires user authentication)
    this.router.use('/transactions', transactionRoutes);

    // Public routes (accessible without authentication)
    this.router.use('/reviews', reviewRoutes);
  }

  public getRouter(): Router {
    return this.router;
  }
}
