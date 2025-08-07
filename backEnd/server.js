require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000; // Use port from .env or default to 5000

// Middleware
app.use(cors()); // Enable CORS for all origins (for development)
app.use(express.json()); // Parse JSON request bodies

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services like 'Outlook365' or 'SMTP'
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS  // Your email password or app-specific password
    }
});

// API endpoint for sending email
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender address
            to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER, // Recipient email (your email)
            subject: `New Contact from Portfolio: ${name}`, // Subject line
            html: `
                <p>You have a new contact request from your portfolio website.</p>
                <h3>Contact Details:</h3>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                </ul>
                <h3>Message:</h3>
                <p>${message}</p>
                <br/>
                <p>This email was sent from your portfolio contact form.</p>
            `,
            replyTo: email // Allow direct reply to the sender
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ msg: 'Email sent successfully!' });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ msg: 'Failed to send email. Please try again later.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`Email User: ${process.env.EMAIL_USER ? 'Loaded' : 'NOT LOADED'}`);
    console.log(`Email Recipient: ${process.env.EMAIL_RECIPIENT ? 'Loaded' : 'NOT LOADED'}`);
});