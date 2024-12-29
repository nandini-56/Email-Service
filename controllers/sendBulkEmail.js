
const transporter = require('../config/mailConfig'); 

// Function to send bulk emails
const sendBulkEmail = async (req, res) => {
    const { recipients, subject, message } = req.body; 

    // Validate the recipients array
    if (!recipients || !Array.isArray(recipients) || recipients.length === 0) {
        return res.status(400).json({ error: 'Recipients list is required and must be an array.' });
    }


    try {
        // Send email using the transporter
        for (let recipient of recipients) {
            const mailOptions = {
                from: process.env.EMAIL_USER, // Use the email configured in .env
                to: recipient,                // Send email to one recipient at a time
                subject: subject || 'No Subject',
                text: message || 'No message provided.',
            };

            // Send email using the transporter
            let info = await transporter.sendMail(mailOptions);
            console.log(`Email sent to ${recipient}`);
        }

        res.status(200).json({ success: true, message: 'Emails sent successfully!'});
    } catch (error) {
        console.error('Error sending bulk email:', error);
        res.status(500).json({ success: false, message: 'Failed to send emails.', error });
    }
};

// Export the controller function
module.exports = {
    sendBulkEmail
};
