import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise'; // <-- Import mysql2

// Load environment variables from your .env file
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// --- Database Connection Pool ---
// This connects to your XAMPP MySQL database using .env variables
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.post('/api/send-email', async (req, res) => {
  try {
    const { type, data } = req.body;
    const { name, email, topic, message, device } = data;

    // ==========================================
    // 1. SAVE TO XAMPP MYSQL DATABASE FIRST
    // ==========================================
    const insertQuery = `
      INSERT INTO inquiries (name, email, topic, device, message) 
      VALUES (?, ?, ?, ?, ?)
    `;
    
    // Execute the query. The '?' placeholders protect against SQL injection.
    await pool.execute(insertQuery, [name, email, topic, device, message]);
    console.log('Inquiry saved to database successfully.');

    // ==========================================
    // 2. CONFIGURE NODEMAILER
    // ==========================================
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3. Email going TO YOU (Admin Alert)
    const mailToAdmin = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Inquiry from ${name} - Topic: ${topic}`,
      text: `
        New Inquiry Details:
        Name: ${name}
        Email: ${email}
        Topic: ${topic}
        Device: ${device}
        
        Message:
        ${message}
      `,
    };

    // 4. Email going TO THE USER (Auto-reply with Techy Dark Theme)
    const autoReplyToUser = {
      from: `"PESTIQ Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Transmission Received: ${device} Inquiry [PESTIQ SYSTEM]`,
      text: `Hi ${name},\n\nSystem initialized. We received your message regarding the ${device} (${topic}). Our team will get back to you shortly.\n\nYour message log:\n"${message}"\n\nThe PESTIQ Team`,
      html: `
        <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#001a14" style="background-color: #001a14; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
          <tr>
            <td align="center" style="padding: 40px 20px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#022c22" style="max-width: 500px; background-color: #022c22; border: 1px solid rgba(126, 217, 87, 0.4); border-radius: 12px; overflow: hidden;">
                
                <tr>
                  <td style="padding: 24px; border-bottom: 1px solid rgba(126, 217, 87, 0.2);">
                    <h2 style="color: #7ED957; margin: 0; font-family: monospace; letter-spacing: 2px; text-transform: uppercase; font-size: 18px;">
                      <span style="color: #4a8033;"></span> PESTIQ SUPPORT
                    </h2>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding: 24px;">
                    <p style="color: #ffffff; font-size: 16px; margin-top: 0;">Hi ${name},</p>
                    
                    <p style="color: #9ca3af; font-size: 14px; line-height: 1.6;">
                      System initialized. We have successfully received your inquiry regarding the 
                      <strong style="color: #7ED957; font-weight: bold;">${device}</strong> 
                      (<span style="color: #e5e7eb;">${topic}</span>). 
                      Our support team is processing your data and will transmit a response shortly.
                    </p>
                    
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#001a14" style="margin: 24px 0; border-left: 3px solid #7ED957; border-radius: 0 4px 4px 0;">
                      <tr>
                        <td style="padding: 16px;">
                          <p style="color: #7ED957; margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-family: monospace;">
                            Your Message:
                          </p>
                          <p style="color: #9ca3af; font-family: monospace; font-size: 13px; line-height: 1.5; margin: 0;">
                            "${message}"
                          </p>
                        </td>
                      </tr>
                    </table>
                    
                    <p style="color: #9ca3af; font-size: 14px; margin-bottom: 0;">
                      <br>
                      <strong style="color: #7ED957; font-weight: bold;">The PESTIQ Team</strong>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `
    };

    // 5. Send both emails
    await transporter.sendMail(mailToAdmin);
    await transporter.sendMail(autoReplyToUser);

    res.status(200).json({ success: true, message: 'Saved to DB & Emails sent successfully!' });

  } catch (error) {
    console.error('Error processing inquiry:', error);
    res.status(500).json({ success: false, message: 'Failed to process inquiry.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on https://pestiq.net:${PORT}`);
});