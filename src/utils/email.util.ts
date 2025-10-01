import nodemailer from 'nodemailer';

export const emailTransporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendOrderConfirmationEmail(
  userEmail: string,
  userName: string,
  transactionDetails: any
) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: 'Booking Confirmed - Payment Received',
    html: `
      <h2>Dear ${userName},</h2>
      <p>Your payment has been confirmed! Here are your booking details:</p>
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
        <h3>Booking Details</h3>
        <p><strong>Property:</strong> ${transactionDetails.propertyName}</p>
        <p><strong>Room:</strong> ${transactionDetails.roomName}</p>
        <p><strong>Check-in:</strong> ${new Date(
          transactionDetails.checkIn
        ).toLocaleDateString()}</p>
        <p><strong>Check-out:</strong> ${new Date(
          transactionDetails.checkOut
        ).toLocaleDateString()}</p>
        <p><strong>Duration:</strong> ${
          transactionDetails.duration
        } night(s)</p>
        <p><strong>Total Price:</strong> Rp ${transactionDetails.totalPrice.toLocaleString()}</p>
      </div>
      <h3>Property Rules & Guidelines:</h3>
      <ul>
        <li>Check-in time: 14:00 - 23:00</li>
        <li>Check-out time: 12:00</li>
        <li>Please bring valid ID for verification</li>
        <li>No smoking inside the property</li>
        <li>Keep the property clean and tidy</li>
      </ul>
      <p>We look forward to welcoming you!</p>
      <p>Best regards,<br>${transactionDetails.tenantName}</p>
    `,
  };

  try {
    await emailTransporter.sendMail(mailOptions);
    console.log('Order confirmation email sent to:', userEmail);
  } catch (error) {
    console.error('Error sending order confirmation email:', error);
  }
}

export async function sendCheckInReminderEmail(
  userEmail: string,
  userName: string,
  transactionDetails: any
) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: 'Reminder: Your Check-in is Tomorrow!',
    html: `
      <h2>Hi ${userName},</h2>
      <p>This is a friendly reminder that your check-in is tomorrow!</p>
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
        <h3>Booking Summary</h3>
        <p><strong>Property:</strong> ${transactionDetails.propertyName}</p>
        <p><strong>Room:</strong> ${transactionDetails.roomName}</p>
        <p><strong>Check-in Date:</strong> ${new Date(
          transactionDetails.checkIn
        ).toLocaleDateString()}</p>
        <p><strong>Check-in Time:</strong> 14:00 - 23:00</p>
        <p><strong>Address:</strong> ${transactionDetails.address}</p>
      </div>
      <h3>What to Bring:</h3>
      <ul>
        <li>Valid ID (KTP/Passport)</li>
        <li>Booking confirmation (this email)</li>
        <li>Payment receipt</li>
      </ul>
      <p>If you have any questions, please contact the property owner.</p>
      <p>Safe travels!</p>
      <p>Best regards,<br>StayInn Team</p>
    `,
  };

  try {
    await emailTransporter.sendMail(mailOptions);
    console.log('Check-in reminder sent to:', userEmail);
  } catch (error) {
    console.error('Error sending check-in reminder:', error);
  }
}
