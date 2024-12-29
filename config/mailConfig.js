require('dotenv').config();  // Ensure this is loaded at the start

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,  // Ensure variable names match your .env file
        pass: process.env.EMAIL_PASS   // Same here
    }
});

module.exports = transporter;
