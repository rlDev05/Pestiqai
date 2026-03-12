import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

// Load environment variables
dotenv.config();

const app = express();

app.use(express.json());

// CORS configuration - allowing your main site to talk to the API
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

// Database Connection Pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Notice the route is just '/send-email' to match your frontend fetch
app.post('/send-email', async (req, res) => {
  try {
    const { type, data } = req.body;
    const { name, email, topic, message, device } = data;

    // 1. SAVE TO DATABASE
    const insertQuery = `
      INSERT INTO inquiries (name, email, topic, device, message) 
      VALUES (?, ?, ?, ?, ?)
    `;
    await pool.execute(insertQuery, [name, email, topic, device, message]);
    console.log('Inquiry saved to database successfully.');

    // 2. CONFIGURE NODEMAILER
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3. Email going TO YOU
    const mailToAdmin = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Inquiry from ${name} - Topic: ${topic}`,
      text: `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\nDevice: ${device}\nMessage: ${message}`,
    };

    // 4. Send email
    await transporter.sendMail(mailToAdmin);

    res.status(200).json({ success: true, message: 'Saved to DB & Emails sent successfully!' });

  } catch (error) {
    console.error('Error processing inquiry:', error);
    res.status(500).json({ success: false, message: 'Failed to process inquiry.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  // Hostinger handles the ports, so we just log that it started
  console.log(`Backend server is running and listening for Hostinger traffic on port ${PORT}`);
});