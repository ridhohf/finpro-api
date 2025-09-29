import nodemailer, { Transporter } from "nodemailer";

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export class EmailUtil {
  private static transporter: Transporter;

  static initialize(): void {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    this.transporter.verify((error) => {
      if (error) {
        console.error("Email configuration error:", error);
      } else {
        console.log("✓ Email server is ready");
      }
    });
  }

  static async send({ to, subject, html }: EmailOptions): Promise<void> {
    await this.transporter.sendMail({
      from:
        process.env.EMAIL_FROM ||
        "Property Renting <noreply@propertyrenting.com>",
      to,
      subject,
      html,
    });
  }

  static generateVerificationEmail(name: string, token: string): string {
    const verificationUrl = `${process.env.CLIENT_URL}/verify-email?token=${token}`;
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .button { 
              display: inline-block; 
              padding: 12px 24px; 
              background-color: #4F46E5; 
              color: white; 
              text-decoration: none; 
              border-radius: 6px; 
              margin: 20px 0;
            }
            .footer { margin-top: 30px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>Welcome to Property Renting!</h2>
            <p>Hi ${name},</p>
            <p>Thank you for registering. Please verify your email address and set your password by clicking the button below:</p>
            <a href="${verificationUrl}" class="button">Verify Email & Set Password</a>
            <p>Or copy this link to your browser:</p>
            <p>${verificationUrl}</p>
            <p><strong>This link will expire in 1 hour.</strong></p>
            <div class="footer">
              <p>If you didn't create an account, please ignore this email.</p>
            </div>
          </div>
        </body>
      </html>
    `;
  }

  static generateResetPasswordEmail(name: string, token: string): string {
    const resetUrl = `${process.env.CLIENT_URL}/reset-password?token=${token}`;
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .button { 
              display: inline-block; 
              padding: 12px 24px; 
              background-color: #4F46E5; 
              color: white; 
              text-decoration: none; 
              border-radius: 6px; 
              margin: 20px 0;
            }
            .footer { margin-top: 30px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>Reset Your Password</h2>
            <p>Hi ${name},</p>
            <p>We received a request to reset your password. Click the button below to proceed:</p>
            <a href="${resetUrl}" class="button">Reset Password</a>
            <p>Or copy this link to your browser:</p>
            <p>${resetUrl}</p>
            <p><strong>This link will expire in 1 hour.</strong></p>
            <div class="footer">
              <p>If you didn't request a password reset, please ignore this email.</p>
            </div>
          </div>
        </body>
      </html>
    `;
  }
}
