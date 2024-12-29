const express = require('express');
const { sendEmail } = require('../controllers/email');
const { sendBulkEmail } = require('../controllers/sendBulkEmail'); 
const router = express.Router();

router.post('/send-email', sendEmail);
router.post('/send-bulk-email', sendBulkEmail);

module.exports = router;
