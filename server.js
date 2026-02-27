import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Resend with API key validation
const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting map (in-memory for Express)
const rateLimitMap = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

// Generate the beautiful HTML template based on your provided design
function generateEmailTemplate(type, data) {
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Manila',
    year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });

  // Extract variables based on whether it's a quote or inquiry
  const name = data.contact || data.name || 'Unknown User';
  const email = data.email || 'No email provided';
  const subject = type === 'quote' ? 'System Installation Request' : 'Intel / Specs Request';
  
  // Build dynamic fields safely
  const companyBlock = data.company ? `
    <div style="display: flex; align-items: center; margin-bottom: 16px;">
      <div style="width: 8px; height: 8px; background-color: #7ED957; border-radius: 50%; margin-right: 12px; flex-shrink: 0;"></div>
      <div>
        <div style="color: #6c757d; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Company</div>
        <div style="color: #1a1a1a; font-weight: 500;">${data.company}</div>
      </div>
    </div>` : '';

  const phoneBlock = data.phone ? `
    <div style="display: flex; align-items: center; margin-bottom: 16px;">
      <div style="width: 8px; height: 8px; background-color: #7ED957; border-radius: 50%; margin-right: 12px; flex-shrink: 0;"></div>
      <div>
        <div style="color: #6c757d; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Phone</div>
        <a href="tel:${data.phone}" style="color: #15803d; text-decoration: none; font-weight: 500;">${data.phone}</a>
      </div>
    </div>` : '';

  const addressBlock = data.address ? `
    <div style="display: flex; align-items: center; margin-bottom: 16px;">
      <div style="width: 8px; height: 8px; background-color: #7ED957; border-radius: 50%; margin-right: 12px; flex-shrink: 0;"></div>
      <div>
        <div style="color: #6c757d; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Address / Coordinates</div>
        <div style="color: #1a1a1a; font-weight: 500;">${data.address}</div>
      </div>
    </div>` : '';

  const messageBlock = data.message ? `
    <div style="margin-bottom: 32px;">
      <h2 style="color: #1a1a1a; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">Message / Payload</h2>
      <div style="background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 24px;">
        <p style="white-space: pre-wrap; color: #495057; margin: 0; font-size: 15px; line-height: 1.6;">${data.message}</p>
      </div>
    </div>` : '';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New PESTIQ AI Transmission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8f9fa; line-height: 1.6;">
      
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
        
        <div style="background: linear-gradient(135deg, #15803d 0%, #001a14 100%); padding: 40px 32px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.025em;">New ${type.toUpperCase()} Transmission</h1>
          <p style="color: #7ED957; margin: 8px 0 0 0; font-size: 14px; font-family: monospace;">PESTIQ AI SYSTEMS</p>
        </div>
        
        <div style="padding: 40px 32px;">
          
          <div style="background-color: #f0fdf4; color: #15803d; padding: 12px 16px; border-radius: 8px; margin-bottom: 32px; display: flex; align-items: center; font-size: 14px; font-weight: 500; border-left: 4px solid #7ED957;">
            New secure data received from configuration terminal
          </div>
          
          <div style="margin-bottom: 32px;">
            <h2 style="color: #1a1a1a; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">Hardware & Target Data</h2>
            <div style="background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 24px;">
              <div style="display: grid; gap: 16px;">
                
                <div style="display: flex; align-items: center; margin-bottom: 16px;">
                  <div style="width: 8px; height: 8px; background-color: #7ED957; border-radius: 50%; margin-right: 12px; flex-shrink: 0;"></div>
                  <div>
                    <div style="color: #6c757d; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Operative Name</div>
                    <div style="color: #1a1a1a; font-weight: 500;">${name}</div>
                  </div>
                </div>
                
                <div style="display: flex; align-items: center; margin-bottom: 16px;">
                  <div style="width: 8px; height: 8px; background-color: #7ED957; border-radius: 50%; margin-right: 12px; flex-shrink: 0;"></div>
                  <div>
                    <div style="color: #6c757d; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Email</div>
                    <a href="mailto:${email}" style="color: #15803d; text-decoration: none; font-weight: 500;">${email}</a>
                  </div>
                </div>

                ${companyBlock}
                ${phoneBlock}
                ${addressBlock}
                
                <div style="display: flex; align-items: center; margin-bottom: 16px;">
                  <div style="width: 8px; height: 8px; background-color: #7ED957; border-radius: 50%; margin-right: 12px; flex-shrink: 0;"></div>
                  <div>
                    <div style="color: #6c757d; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Device Configuration</div>
                    <div style="color: #1a1a1a; font-weight: 500;">${data.device} (${data.plan} plan)</div>
                  </div>
                </div>

                <div style="display: flex; align-items: center;">
                  <div style="width: 8px; height: 8px; background-color: #7ED957; border-radius: 50%; margin-right: 12px; flex-shrink: 0;"></div>
                  <div>
                    <div style="color: #6c757d; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Subject</div>
                    <div style="color: #1a1a1a; font-weight: 500;">${subject} ${data.topic ? `- ${data.topic}` : ''}</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          
          ${messageBlock}
          
          <div style="margin-bottom: 32px;">
            <h2 style="color: #1a1a1a; margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">Quick Actions</h2>
            <div style="display: flex; gap: 16px; flex-wrap: wrap;">
              <a href="mailto:${email}?subject=Re: PESTIQ AI ${subject}" style="background-color: #15803d; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 500; display: inline-flex; align-items: center; transition: background-color 0.2s;">
                Reply to ${name}
              </a>
            </div>
          </div>
          
          <div style="border-top: 1px solid #e9ecef; padding-top: 24px; text-align: center;">
            <div style="color: #6c757d; font-size: 14px; margin-bottom: 8px;">
              Submitted on ${timestamp}
            </div>
            <div style="color: #adb5bd; font-size: 12px;">
              Data transmitted from PESTIQ AI Configuration Terminal
            </div>
          </div>
          
        </div>
      </div>
    </body>
    </html>
  `;
}

// --- EMAIL ENDPOINT ---
app.post('/api/send-email', async (req, res) => {
  try {
    // 1. Rate Limiting Check
    const clientIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    if (!checkRateLimit(clientIP)) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests. Please try again later.',
      });
    }

    // 2. Validate Env
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return res.status(500).json({ success: false, message: 'Server configuration error.' });
    }

    const { type, data } = req.body;

    // 3. Validate Payload
    if (!type || !data || !data.email) {
      return res.status(400).json({
        success: false,
        message: 'Invalid payload',
      });
    }

    // 4. Send Email to Admin via Resend
    const adminEmailPromise = resend.emails.send({
      from: 'PESTIQ AI <onboarding@resend.dev>', // Note: Update this if you have a verified domain in Resend
      to: process.env.EMAIL_TO || 'pestiqai@gmail.com',
      replyTo: data.email,
      subject: `[PESTIQ AI] New ${type.toUpperCase()} Request from ${data.contact || data.name}`,
      html: generateEmailTemplate(type, data),
    });

    // Add a timeout just like your reference code
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Email request timeout')), 10000)
    );

    const result = await Promise.race([adminEmailPromise, timeoutPromise]);
    
    if (result.error) {
      console.error('Resend error:', result.error);
      return res.status(500).json({ success: false, message: 'Failed to send email.' });
    }

    console.log(`✅ Transmission successful to admin from ${data.email}`);

    // (Optional) Send a simple text confirmation back to the client
    await resend.emails.send({
      from: 'PESTIQ AI <onboarding@resend.dev>', 
      to: data.email,
      subject: 'Transmission Received – PESTIQ AI',
      html: `
        <h2>Request Received</h2>
        <p>Hi ${data.contact || data.name || 'Operative'},</p>
        <p>Your data transmission has been secured and received by our team.</p>
        <p><strong>Hardware:</strong> ${data.device}</p>
        <p><strong>Protocol:</strong> ${data.plan}</p>
        <br />
        <p>— PESTIQ AI Team</p>
      `,
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });

  } catch (err) {
    console.error('❌ EMAIL SERVER ERROR:', err);
    res.status(500).json({
      success: false,
      message: 'Email server failed',
    });
  }
});

// --- START SERVER ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Resend Email Server running at http://localhost:${PORT}`);
});