require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sendContactEmail } = require('./controllers/emailController');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/contact', sendContactEmail);

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Enterprise backend running securely on port ${PORT}`);
  });
}

// Export for Vercel Serverless Functions
module.exports = app;
