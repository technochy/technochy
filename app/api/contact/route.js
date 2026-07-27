import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const {
      fullName,
      businessEmail,
      companyName,
      phone,
      service,
      message,
      fileName,
      fileData
    } = data;

    // Validate required fields
    if (!fullName || !businessEmail || !message) {
      return NextResponse.json(
        { error: 'Missing required form fields.' },
        { status: 400 }
      );
    }

    // Process file attachment & CID inline image preview
    const attachments = [];
    let isImage = false;
    const imageCid = 'client_attached_image';

    if (fileName && fileData) {
      try {
        const base64Content = fileData.split(';base64,').pop();
        const ext = (fileName.split('.').pop() || '').toLowerCase();
        const imageExtensions = ['png', 'jpg', 'jpeg', 'webp', 'gif', 'svg'];
        
        if (imageExtensions.includes(ext)) {
          isImage = true;
          attachments.push({
            filename: fileName,
            content: Buffer.from(base64Content, 'base64'),
            cid: imageCid // Embedded inline CID image
          });
        } else {
          attachments.push({
            filename: fileName,
            content: Buffer.from(base64Content, 'base64'),
          });
        }
      } catch (attErr) {
        console.error('[Contact API Attachment Parse Error]:', attErr);
      }
    }

    const recipientEmail = process.env.CONTACT_EMAIL || 'contact@technochy.com';
    const formattedPhone = phone || 'Not provided';
    const submissionTime = new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'medium'
    });

    // Well-formatted HTML Email Template with Inline CID Image Rendering
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Inquiry - Technochy</title>
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; color: #111827; }
          .container { max-width: 650px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid #e5e7eb; }
          .header { background: linear-gradient(135deg, #0c0c0e 0%, #181818 100%); padding: 30px 40px; text-align: center; border-bottom: 4px solid #0088ff; }
          .header h1 { color: #ffffff; margin: 0; font-size: 26px; font-weight: 800; letter-spacing: -0.5px; }
          .header span { color: #0088ff; }
          .subtitle { color: #9ca3af; font-size: 13px; margin-top: 6px; text-transform: uppercase; letter-spacing: 1.5px; }
          .body { padding: 35px 40px; }
          .badge { display: inline-block; background-color: #ebf5ff; color: #0088ff; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 20px; }
          .field-group { margin-bottom: 20px; }
          .field-label { font-size: 11px; font-weight: 800; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
          .field-value { font-size: 15px; font-weight: 600; color: #111827; background: #f9fafb; padding: 12px 16px; border-radius: 8px; border-left: 3px solid #0088ff; }
          .message-box { font-size: 14px; font-weight: 400; color: #374151; background: #f3f4f6; padding: 16px; border-radius: 8px; line-height: 1.6; white-space: pre-wrap; }
          .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
          .footer { background-color: #f9fafb; padding: 20px 40px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
          .img-preview { margin-top: 10px; padding: 12px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; text-align: center; }
          .img-preview img { max-width: 100%; max-height: 450px; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>TECHNO<span>CHY</span></h1>
            <div class="subtitle">New Project Inquiry Received</div>
          </div>
          
          <div class="body">
            <div class="badge">🚀 Interested in: ${service || 'General Inquiry'}</div>

            <div class="grid-2">
              <div class="field-group">
                <div class="field-label">Full Name</div>
                <div class="field-value">${fullName}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Business Email</div>
                <div class="field-value"><a href="mailto:${businessEmail}" style="color: #0088ff; text-decoration: none;">${businessEmail}</a></div>
              </div>
            </div>

            <div class="grid-2">
              <div class="field-group">
                <div class="field-label">Company Name</div>
                <div class="field-value">${companyName || 'Not specified'}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Phone Number</div>
                <div class="field-value"><a href="tel:${formattedPhone.replace(/\s+/g, '')}" style="color: #111827; text-decoration: none;">${formattedPhone}</a></div>
              </div>
            </div>

            <div class="field-group">
              <div class="field-label">Selected Service</div>
              <div class="field-value" style="color: #0088ff; font-weight: 800;">${service || 'N/A'}</div>
            </div>

            <div class="field-group">
              <div class="field-label">Project Details / Message</div>
              <div class="message-box">${message}</div>
            </div>

            <div class="field-group">
              <div class="field-label">Attached File / Attachment</div>
              <div class="field-value" style="border-left-color: ${fileName ? '#10b981' : '#6b7280'};">
                ${fileName ? `📄 <strong>${fileName}</strong>` : 'No file attached'}
              </div>

              ${isImage ? `
                <div class="img-preview">
                  <div style="font-size: 11px; font-weight: 700; color: #6b7280; text-transform: uppercase; margin-bottom: 8px;">🖼️ Attached Image Preview:</div>
                  <img src="cid:${imageCid}" alt="${fileName}" />
                </div>
              ` : ''}
            </div>

            <div style="margin-top: 25px; font-size: 11px; color: #9ca3af; text-align: right;">
              Submitted on: ${submissionTime}
            </div>
          </div>

          <div class="footer">
            © ${new Date().getFullYear()} Technochy Studio. Automated Contact System.<br>
            Sent directly to <strong>${recipientEmail}</strong>
          </div>
        </div>
      </body>
      </html>
    `;

    // Configure Transporter (Namecheap cPanel SMTP)
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT || 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass && smtpPass !== 'YOUR_NAMECHEAP_EMAIL_PASSWORD_HERE') {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: Number(smtpPort),
          secure: Number(smtpPort) === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
          tls: {
            rejectUnauthorized: false
          }
        });

        await transporter.sendMail({
          from: `"${fullName} (via Technochy)" <${smtpUser}>`,
          replyTo: businessEmail,
          to: recipientEmail,
          subject: `🚀 [New Project Inquiry] ${service || 'General Inquiry'} - ${fullName}`,
          html: htmlTemplate,
          attachments: attachments,
        });

        console.log(`[Contact API] Email with ${attachments.length} attachment(s) successfully sent to ${recipientEmail} for ${fullName}`);
      } catch (mailError) {
        console.error('[Contact API SMTP Error]:', mailError);
        console.log(`[Contact API Fallback Log]: Submitted inquiry for ${fullName} (${businessEmail})`);
      }
    } else {
      console.log(`\n==================================================`);
      console.log(`[CONTACT FORM SUBMISSION FOR: ${recipientEmail}]`);
      console.log(`Name: ${fullName}`);
      console.log(`Email: ${businessEmail}`);
      console.log(`Company: ${companyName}`);
      console.log(`Phone: ${formattedPhone}`);
      console.log(`Service: ${service}`);
      console.log(`Message: ${message}`);
      console.log(`File: ${fileName || 'None'}`);
      console.log(`==================================================\n`);
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry submitted successfully! We will respond within 2 hours.',
    });

  } catch (error) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry submission.' },
      { status: 500 }
    );
  }
}
