import express, { Express } from 'express';
import cors from 'cors';
import { PORT } from './config';
import { NotFoundMiddleware } from './middlewares/not-found.middleware';
import { ErrorHandlerMiddleware } from './middlewares/error-handler.middleware';
import router from './routers/main.router';
import { setupCronJobs } from './utils/cron.util';

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.setupCronJobs();
    this.routes();
    this.handleError();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private setupCronJobs(): void {
    setupCronJobs();
  }

  private routes(): void {
    // Mount all routes with /api prefix
    this.app.use('/api', router);
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
