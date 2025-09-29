import express, {
  json,
  urlencoded,
  Express,
  Request,
  Response,
  NextFunction,
} from "express";
import cors from "cors";
import { PORT } from "./config";
import { MainRouter } from "./routers/main.router";
import { NotFoundMiddleware } from "./middlewares/not-found.middleware";
import { ErrorHandlerMiddleware } from "./middlewares/error-handler.middleware";
import { EmailUtil } from "./utils/email.util";
import { CloudinaryUtil } from "./utils/cloudinary.util";

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.initializeServices();
    this.configure();
    this.routes();
    this.handleError();
  }

  private initializeServices(): void {
    // Initialize email service
    EmailUtil.initialize();

    // Initialize cloudinary
    CloudinaryUtil.initialize();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
  }

  private handleError(): void {
    /*
      🔒 Docs:
      This is a not found error handler.
    */
    this.app.use(NotFoundMiddleware.handle());

    /*
        🔒 Docs:
        This is a centralized error-handling middleware.
    */
    this.app.use(ErrorHandlerMiddleware.handle());
  }

  private routes(): void {
    const mainRouter = new MainRouter();

    this.app.get("/api", (req: Request, res: Response) => {
      res.send(
        `Hello, Purwadhika student 👋. Have fun working on your mini project ☺️`
      );
    });

    this.app.use(mainRouter.getRouter());
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`➜ [API] Local: http://localhost:${PORT}/`);
    });
  }
}
