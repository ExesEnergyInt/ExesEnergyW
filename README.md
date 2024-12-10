<!-- import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomeIndex from './Pages/Home/HomeIndex';
import Hero from './Pages/Home/Hero';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeIndex />}>
      <Route index element={<Hero />} />
    </Route>
  )
);


function App() {
return (
  <RouterProvider router={router} />
  
  );
}

export default App


// theme.js
import { extendTheme } from "@chakra-ui/react";
import tailwindConfig from "../tailwind.config";

// Extract and map the colors
const colors = {
  yellow: tailwindConfig.theme.extend.colors.yellow.DEFAULT,
  exblack: tailwindConfig.theme.extend.colors.exblack.DEFAULT,
  exwhite: tailwindConfig.theme.extend.colors.exwhite.DEFAULT,
  exgreen: tailwindConfig.theme.extend.colors.exgreen.DEFAULT,
};

// Extract and map the breakpoints
const breakpoints = {
  sm: tailwindConfig.theme.extend.breakpoints.sm,
  md: tailwindConfig.theme.extend.breakpoints.md,
  lg: tailwindConfig.theme.extend.breakpoints.lg,
  xl: tailwindConfig.theme.extend.breakpoints.xl,
  "2xl": tailwindConfig.theme.extend.breakpoints["2xl"],
};

// Extend the Chakra theme with colors and breakpoints
const customTheme = extendTheme({ colors, breakpoints });

export default customTheme;
 -->



<!-- // BACKEND FOR CONTACT

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail', // You can use other services like Outlook, Yahoo, etc.
  auth: {
    user: 'your-email@gmail.com', // Replace with your email
    pass: 'your-email-password', // Replace with your email password or app-specific password
  },
});

// Route to handle email sending
app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate request body
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const mailOptions = {
    from: email,
    to: 'marketing@exesenergy.co', // Replace with the recipient email address
    subject: `Contact Form Submission: ${subject}`,
    text: `You have a new message from your contact form:

Name: ${name}
Email: ${email}

Message:
${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); -->



<!-- Steps to Set Up:
Install Dependencies: Run the following command in your terminal to set up the project:

bash
Copy code
npm init -y
npm install express body-parser nodemailer cors
Update Email Credentials: Replace your-email@gmail.com and your-email-password with the credentials for the email account you want to use for sending emails. (Use an App Password if your email service provider requires it, e.g., Gmail.)

Run the Server: Start the server with:

bash
Copy code
node server.js
The server will run on http://localhost:5000.

Update the Frontend: Replace https://your-backend-endpoint.com/send-email in the frontend code with http://localhost:5000/send-email.

Deployment:
To deploy your backend, consider hosting it on platforms like Heroku, Railway, or Vercel (for serverless). Let me know if you'd like help deploying this backend! -->



<!-- 

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: process.env.HOST_EMAIL, // Use environment variables
    pass: process.env.HOST_PASSWORD, // Use environment variables
  },
});

// Route to handle email sending
app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const mailOptions = {
      from: email,
    to: process.env.EMAIL_HOST, // Recipient email address
    subject: `Contact Form Submission: ${subject}`,
    text: `You have a new message from your contact form:


Name: ${name}
Email: ${email}

Message:
${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

// Export the app for serverless
module.exports = app; -->
