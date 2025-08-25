import { SampleRouter } from './sample.router';
import { Router } from 'express';

export class MainRouter {
  private router: Router;
  private sampleRouter: SampleRouter;

  constructor() {
    this.router = Router();
    this.sampleRouter = new SampleRouter();

    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.use('/api/samples', this.sampleRouter.getRouter());
  }

  public getRouter(): Router {
    return this.router;
  }
}
