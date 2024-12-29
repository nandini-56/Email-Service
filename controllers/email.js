const transporter = require('../config/mailConfig');

exports.sendEmail = async (req, res) => {
  const { to, subject, message } = req.body;

  // Simple HTML template
  const htmlTemplate = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f9f9f9;
        margin: 0;
        padding: 0;
      }
      .container {
        background-color: #ffffff;
        padding: 20px;
        max-width: 600px;
        margin: 40px auto;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      h1 {
        color: #333;
      }
      p {
        font-size: 16px;
        color: #555;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Hello,</h1>
      <p>I am sending this email to inform you about the placement season.</p>
    </div>
  </body>
  </html>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text: message, 
    html: htmlTemplate 
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
};
