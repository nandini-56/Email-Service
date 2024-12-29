const express = require('express');
const dotenv = require('dotenv');
const emailRoute = require('./routes/emailRoute');

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/emails', emailRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});