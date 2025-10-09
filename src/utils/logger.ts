<<<<<<< HEAD
import { createLogger, format, transports, Logger } from "winston";
import "winston-daily-rotate-file";
=======
import { createLogger, format, transports, Logger } from 'winston';
import 'winston-daily-rotate-file';
>>>>>>> feat/feature-2

const { combine, timestamp, printf, colorize, errors } = format;

const logFormat = printf(({ timestamp, level, message, stack, ...rest }) => {
<<<<<<< HEAD
  const meta = rest.meta ? JSON.stringify(rest.meta, null, 2) : "";
  return `[${timestamp}] ${level.toUpperCase()}: ${message} ${
    stack ? `\nStack: ${stack}` : ""
=======
  const meta = rest.meta ? JSON.stringify(rest.meta, null, 2) : '';
  return `[${timestamp}] ${level.toUpperCase()}: ${message} ${
    stack ? `\nStack: ${stack}` : ''
>>>>>>> feat/feature-2
  } ${meta}`;
});

export class LoggerService {
  private logger: Logger;

  constructor() {
    this.logger = createLogger({
<<<<<<< HEAD
      level: process.env.NODE_ENV === "production" ? "info" : "debug",
      format: combine(
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
=======
      level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
      format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
>>>>>>> feat/feature-2
        errors({ stack: true })
      ),
      transports: [
        new transports.Console({
          format: combine(
            colorize(),
            printf(({ message }) =>
<<<<<<< HEAD
              typeof message === "string" ? message : JSON.stringify(message)
=======
              typeof message === 'string' ? message : JSON.stringify(message)
>>>>>>> feat/feature-2
            )
          ),
        }),
        new transports.File({
<<<<<<< HEAD
          filename: "logs/error.log",
          level: "error",
          format: logFormat,
        }),
        new transports.File({
          filename: "logs/warn.log",
          level: "warn",
          format: logFormat,
        }),
        new transports.File({
          filename: "logs/combined.log",
          format: logFormat,
        }),
        new (transports as any).DailyRotateFile({
          filename: "logs/%DATE%-app.log",
          datePattern: "YYYY-MM-DD",
          zippedArchive: true,
          maxSize: "20m",
          maxFiles: "14d",
=======
          filename: 'logs/error.log',
          level: 'error',
          format: logFormat,
        }),
        new transports.File({
          filename: 'logs/warn.log',
          level: 'warn',
          format: logFormat,
        }),
        new transports.File({
          filename: 'logs/combined.log',
          format: logFormat,
        }),
        new (transports as any).DailyRotateFile({
          filename: 'logs/%DATE%-app.log',
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d',
>>>>>>> feat/feature-2
          format: logFormat,
        }),
      ],
    });
  }

  public error(message: string, meta?: unknown): void {
    this.logger.error({ message, meta });
  }

  public warn(message: string, meta?: unknown): void {
    this.logger.warn({ message, meta });
  }

  public info(message: string, meta?: unknown): void {
    this.logger.info({ message, meta });
  }

  public http(message: string, meta?: unknown): void {
    this.logger.http({ message, meta });
  }

  public debug(message: string, meta?: unknown): void {
    this.logger.debug({ message, meta });
  }
}
