import express, {
  json,
  urlencoded,
  Express,
  Request,
  Response,
  NextFunction,
} from 'express';
import cors from 'cors';
import { PORT } from './config';
import { MainRouter } from './routers/main.router';
import { NotFoundMiddleware } from './middlewares/not-found.middleware';
import { ErrorHandlerMiddleware } from './middlewares/error-handler.middleware';
import { EmailUtil } from './utils/email.util2';
import { CloudinaryUtil } from './utils/cloudinary.util2';
import { setupCronJobs } from './utils/cron.util';

export default class App {
  private app: Express;
  private mainRouter: MainRouter;

  constructor() {
    this.app = express();
    this.mainRouter = new MainRouter();
    this.initializeServices();
    this.configure();
    this.setupCronJobs();
    this.routes();
    this.handleError();
  }

  /**
   * Initialize external services (Email, Cloudinary, etc.)
   */
  private initializeServices(): void {
    console.log('🔧 Initializing services...');

    // Initialize email service
    EmailUtil.initialize();
    console.log('✅ Email service initialized');

    // Initialize cloudinary for image uploads
    CloudinaryUtil.initialize();
    console.log('✅ Cloudinary initialized');
  }

  /**
   * Configure Express middleware
   */
  private configure(): void {
    // Enable CORS
    this.app.use(cors());

    // Parse JSON bodies
    this.app.use(json());

    // Parse URL-encoded bodies
    this.app.use(urlencoded({ extended: true }));

    // Serve static files (optional - for uploaded files)
    // this.app.use('/uploads', express.static('uploads'));
  }

  /**
   * Setup cron jobs for automated tasks
   * - Auto-cancel unpaid orders after 1 hour
   * - Send H-1 check-in reminders
   */
  private setupCronJobs(): void {
    console.log('⏰ Setting up cron jobs...');
    setupCronJobs();
    console.log('✅ Cron jobs initialized');
  }

  /**
   * Setup application routes
   */
  private routes(): void {
    // Root endpoint - API information
    this.app.get('/', (req: Request, res: Response) => {
      res.json({
        success: true,
        message: 'Property Renting API',
        version: '1.0.0',
        documentation: '/api/docs',
        endpoints: {
          health: '/health',
          auth: '/auth',
          properties: '/properties',
          transactions: '/transactions',
          reviews: '/reviews',
          tenant: {
            categories: '/tenant/categories',
            properties: '/tenant/properties',
            rooms: '/tenant/rooms',
            availability: '/tenant/room-availability',
            peakSeasons: '/tenant/peak-seasons',
            reports: '/tenant/reports',
          },
        },
      });
    });

    // Mount all routes with / prefix
    this.app.use('/', this.mainRouter.getRouter());
  }

  /**
   * Setup error handling middleware
   */
  private handleError(): void {
    // 404 Not Found handler (must be after all routes)
    this.app.use(NotFoundMiddleware.handle());

    // Centralized error-handling middleware (must be last)
    this.app.use(ErrorHandlerMiddleware.handle());
  }

  /**
   * Start the Express server
   */
  public start(): void {
    this.app.listen(PORT, () => {
      console.log('\n🚀 ====================================');
      console.log(`🚀 Property Renting API Server Started`);
      console.log(`🚀 ====================================`);
      console.log(`➜ Local:   http://localhost:${PORT}`);
      console.log('🚀 ====================================\n');
    });
  }

  /**
   * Get Express app instance (useful for testing)
   */
  public getApp(): Express {
    return this.app;
  }
}
