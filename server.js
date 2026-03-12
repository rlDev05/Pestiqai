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
      from: `"PESTIQ Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We received your inquiry, ${name}!`,
      text: `
Hi ${name},

Thank you for reaching out to PESTIQ regarding "${topic}".

We have received your message and our team will get back to you as soon as possible.

Here is a copy of what you sent us:

"${message}"

Best regards,
The PESTIQ Team
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