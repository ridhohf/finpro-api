import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendVerificationEmail = async (email: string, token: string) => {
  const verificationUrl = `http://localhost:3000/verify-email?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verifikasi Email - Property Renting App",
    html: `
      <h2>Verifikasi Email Anda</h2>
      <p>Klik link berikut untuk verifikasi email dan set password:</p>
      <a href="${verificationUrl}">${verificationUrl}</a>
      <p>Link akan kadaluarsa dalam 1 jam.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetUrl = `http://localhost:3000/reset-password?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Reset Password - Property Renting App",
    html: `
      <h2>Reset Password</h2>
      <p>Klik link berikut untuk reset password:</p>
      <a href="${resetUrl}">${resetUrl}</a>
      <p>Link akan kadaluarsa dalam 1 jam.</p>
      <p>Jika Anda tidak meminta reset password, abaikan email ini.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
