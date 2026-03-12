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
      from: `"PESTIQ Systems" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `System Notification: Inquiry Received [${topic}]`,
      // Plain text fallback for older email clients
      text: `Hi ${name},\n\nThank you for reaching out to PESTIQ regarding "${topic}".\n\nWe have received your message and our team will get back to you as soon as possible.\n\nHere is a copy of what you sent us:\n"${message}"\n\nBest regards,\nThe PESTIQ Team`,
      // HTML version with Dark Green Techy Theme
      html: `
        <div style="font-family: 'Courier New', Courier, monospace; background-color: #0b1410; padding: 40px 20px; color: #e0e0e0;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #111d18; border: 1px solid #1e3329; border-top: 4px solid #2ecc71; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
            
            <div style="padding: 25px; text-align: center; border-bottom: 1px solid #1e3329; background-color: #0d1713;">
              <h1 style="color: #2ecc71; margin: 0; font-size: 28px; letter-spacing: 3px;">PESTIQ</h1>
              <p style="color: #6a9981; font-size: 12px; margin: 5px 0 0 0; letter-spacing: 1px;">// SECURE COMM LINK ESTABLISHED</p>
            </div>
            
            <div style="padding: 30px;">
              <h2 style="color: #ffffff; font-size: 18px; border-bottom: 1px dashed #2ecc71; padding-bottom: 10px; display: inline-block;">INQUIRY LOGGED</h2>
              
              <p style="font-size: 15px; line-height: 1.6; margin-top: 20px;">User: <strong style="color: #2ecc71;">${name}</strong></p>
              
              <p style="font-size: 15px; line-height: 1.6;">Thank you for initiating contact with PESTIQ regarding <strong>"${topic}"</strong>. Our system has successfully recorded your data transmission. Our team is currently reviewing your request and will respond shortly.</p>

              <div style="background-color: #0b1410; padding: 15px; border-left: 3px solid #2ecc71; margin: 30px 0; border-radius: 0 4px 4px 0;">
                <p style="margin: 0; font-size: 12px; color: #6a9981; margin-bottom: 8px;">> DECRYPTED MESSAGE PAYLOAD:</p>
                <p style="margin: 0; font-style: italic; color: #c4d4cc; font-size: 14px; line-height: 1.5;">"${message}"</p>
              </div>

              <p style="font-size: 15px; line-height: 1.6; color: #2ecc71;">> STATUS: Awaiting Admin Response...</p>
            </div>
            
            <div style="background-color: #080f0c; padding: 20px; text-align: center; font-size: 12px; color: #527562;">
              <p style="margin: 0;">&copy; ${new Date().getFullYear()} PESTIQ Systems. All rights reserved.</p>
              <p style="margin: 8px 0 0 0;">This is an automated system notification. Please do not reply directly to this transmission.</p>
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