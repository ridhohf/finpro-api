import nodemailer from "nodemailer";
import { config } from "../config";
import logger from "../utils/logger";

class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: config.emailHost,
      port: config.emailPort,
      secure: config.emailPort === 465,
      auth: {
        user: config.emailUser,
        pass: config.emailPassword,
      },
    });
  }

  async sendVerificationEmail(
    email: string,
    token: string,
    name: string
  ): Promise<void> {
    const verificationUrl = `${config.frontendUrl}/verify-email/${token}`;

    const mailOptions = {
      from: config.emailFrom,
      to: email,
      subject: "Verify Your Email - Property Renting App",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Welcome to Property Renting App!</h2>
          <p>Hello ${name},</p>
          <p>Thank you for registering. Please click the button below to verify your email and set your password:</p>
          <a href="${verificationUrl}" style="background-color: #4CAF50; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 20px 0;">
            Verify Email & Set Password
          </a>
          <p>Or copy and paste this link in your browser:</p>
          <p style="word-break: break-all;">${verificationUrl}</p>
          <p><strong>This link will expire in 1 hour.</strong></p>
          <p>If you didn't create an account, please ignore this email.</p>
          <p>Best regards,<br>Property Renting App Team</p>
        </div>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      logger.info(`Verification email sent to ${email}`);
    } catch (error) {
      logger.error("Failed to send verification email:", error);
      throw error;
    }
  }

  async sendPasswordResetEmail(
    email: string,
    token: string,
    name: string
  ): Promise<void> {
    const resetUrl = `${config.frontendUrl}/reset-password/${token}`;

    const mailOptions = {
      from: config.emailFrom,
      to: email,
      subject: "Reset Your Password - Property Renting App",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Password Reset Request</h2>
          <p>Hello ${name},</p>
          <p>You requested to reset your password. Click the button below to create a new password:</p>
          <a href="${resetUrl}" style="background-color: #FF6B6B; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 20px 0;">
            Reset Password
          </a>
          <p>Or copy and paste this link in your browser:</p>
          <p style="word-break: break-all;">${resetUrl}</p>
          <p><strong>This link will expire in 1 hour.</strong></p>
          <p>If you didn't request this, please ignore this email.</p>
          <p>Best regards,<br>Property Renting App Team</p>
        </div>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      logger.info(`Password reset email sent to ${email}`);
    } catch (error) {
      logger.error("Failed to send password reset email:", error);
      throw error;
    }
  }

  async sendWelcomeEmail(
    email: string,
    name: string,
    role: string
  ): Promise<void> {
    const loginUrl = `${config.frontendUrl}/login`;

    const mailOptions = {
      from: config.emailFrom,
      to: email,
      subject: "Welcome to Property Renting App!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Welcome to Property Renting App!</h2>
          <p>Hello ${name},</p>
          <p>Your ${role} account has been successfully verified and activated!</p>
          <p>You can now log in and start ${role === "tenant" ? "managing your properties" : "booking amazing stays"}.</p>
          <a href="${loginUrl}" style="background-color: #4CAF50; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 20px 0;">
            Login Now
          </a>
          <p>Thank you for joining our community!</p>
          <p>Best regards,<br>Property Renting App Team</p>
        </div>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      logger.info(`Welcome email sent to ${email}`);
    } catch (error) {
      logger.error("Failed to send welcome email:", error);
      throw error;
    }
  }
}

export default new EmailService();
