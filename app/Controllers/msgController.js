const msgModel = require('../Models/msgModel');
const nodemailer = require('nodemailer');
require('dotenv').config(); // ✅ Load .env variables

// ✅ Use environment variables for Gmail credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // FROM .env
    pass: process.env.EMAIL_PASS   // FROM .env (App password)
  }
});

module.exports = {
  // ✅ Create and save message, then send email
  createMessage: async function (req, res) {
    try {
      console.log("Incoming data:", req.body);

      // Save to database
      const savedMessage = await msgModel.create(req.body);

      // Extract data
      const { name, email, phoneNo, message } = req.body;

      // Email content
      const mailOptions = {
        from: `"Loan Contact Form" <${process.env.EMAIL_USER}>`, // dynamic sender
        to: process.env.EMAIL_USER,
        subject: 'New Contact Message',
        html: `
          <h3>Contact Message Received</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phoneNo}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      };

      // Send email (non-blocking)
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Email sending failed:', error.message);
        } else {
          console.log('Email sent:', info.response);
        }
      });

      // Respond to frontend
      res.json('Your message has been saved successfully!');

    } catch (err) {
      console.error('🔥 Error saving message or sending email:', err);
      res.status(500).json({
        error: err.message || 'Something went wrong while saving your message.'
      });
    }
  },

  // ✅ Fetch all messages
  getAllMessage: function (req, res) {
    msgModel.find({})
      .then(results => res.json(results))
      .catch(err => {
        console.error('Error fetching messages:', err);
        res.status(500).json("Something went wrong: " + err);
      });
  }
};
