import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

// CORS configuration
app.use(cors({
  origin: [
    'https://pestiq.net',
    'https://www.pestiq.net',
    'http://localhost:5173',
    'http://localhost:3000'
  ],
  methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true
}));

// DATABASE CONNECTION
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.post('/send-email', async (req, res) => {
  try {

    const { type, data } = req.body;
    const { name, email, topic, message, device } = data;

    // =========================
    // 1. SAVE TO DATABASE
    // =========================
    const insertQuery = `
      INSERT INTO inquiries (name, email, topic, device, message)
      VALUES (?, ?, ?, ?, ?)
    `;

    await pool.execute(insertQuery, [name, email, topic, device, message]);

    console.log('Inquiry saved to database successfully.');

    // =========================
    // 2. CONFIGURE NODEMAILER
    // =========================
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // =========================
    // 3. EMAIL TO ADMIN
    // =========================
    const mailToAdmin = {
      from: `"PESTIQ Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Inquiry from ${name} - Topic: ${topic}`,
      text: `
Name: ${name}
Email: ${email}
Topic: ${topic}
Device: ${device}

Message:
${message}
      `,
    };

// =========================
    // 4. AUTO REPLY TO CLIENT
    // =========================
    const mailToClient = {
      from: `"PESTIQ" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We got your message! [${topic}]`,
      // Plain text fallback for older email clients
      text: `Hi ${name},\n\nThank you for reaching out to PESTIQ about "${topic}"!\n\nWe just wanted to send a quick note to say we received your message safely. One of our team members will review it and get back to you shortly.\n\nHere is what you sent us:\n"${message}"\n\nBest,\nThe PESTIQ Team`,
      // HTML version with Light, Clean, Layman-friendly Theme
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f7f6; padding: 40px 20px; color: #333333;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e1e8ed; border-top: 4px solid #10b981; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
            
            <div style="padding: 30px; text-align: center; border-bottom: 1px solid #f0f4f8; background-color: #ffffff;">
              <h1 style="color: #10b981; margin: 0; font-size: 26px; font-weight: bold; letter-spacing: 1px;">PESTIQ</h1>
              <p style="color: #718096; font-size: 13px; margin: 8px 0 0 0; text-transform: uppercase; letter-spacing: 1px;">Message Received</p>
            </div>
            
            <div style="padding: 30px 40px;">
              <h2 style="color: #2d3748; font-size: 20px; font-weight: 600; margin-top: 0;">Hi ${name},</h2>
              
              <p style="font-size: 16px; line-height: 1.6; color: #4a5568; margin-top: 15px;">
                Thank you for reaching out to us about <strong>"${topic}"</strong>! We just wanted to send a quick note to let you know that your message safely reached our inbox. 
              </p>
              
              <p style="font-size: 16px; line-height: 1.6; color: #4a5568;">
                One of our team members will take a look and get back to you as soon as possible.
              </p>

              <div style="background-color: #f8fafc; padding: 20px; border-left: 4px solid #10b981; margin: 30px 0; border-radius: 4px;">
                <p style="margin: 0 0 10px 0; font-size: 13px; color: #718096; text-transform: uppercase; font-weight: bold;">Here's what you sent us:</p>
                <p style="margin: 0; font-style: italic; color: #4a5568; font-size: 15px; line-height: 1.6;">"${message}"</p>
              </div>

              <p style="font-size: 16px; line-height: 1.6; color: #4a5568; margin-bottom: 0;">
                Best,<br>
                <strong>The PESTIQ Team</strong>
              </p>
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; text-align: center; font-size: 13px; color: #a0aec0; border-top: 1px solid #e1e8ed;">
              <p style="margin: 0;">&copy; ${new Date().getFullYear()} PESTIQ. All rights reserved.</p>
              <p style="margin: 10px 0 0 0;">This is an automated email just to let you know we're on it. Please do not reply directly to this message.</p>
            </div>

          </div>
        </div>
      `,
    };

    // =========================
    // 5. SEND BOTH EMAILS
    // =========================
    await transporter.sendMail(mailToAdmin);
    await transporter.sendMail(mailToClient);

    console.log("Admin and client emails sent successfully.");

    res.status(200).json({
      success: true,
      message: 'Saved to DB & Emails sent successfully!'
    });

  } catch (error) {

    console.error('Error processing inquiry:', error);

    res.status(500).json({
      success: false,
      message: 'Failed to process inquiry.',
      exact_error: error.message,
      error_stack: error.stack
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});