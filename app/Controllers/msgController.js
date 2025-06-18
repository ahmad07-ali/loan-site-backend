const msgModel = require('../Models/msgModel');
const nodemailer = require('nodemailer');

// ✅ Use environment variables for security (recommended)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aliahmad.tech7@gmail.com', // ✅ Your Gmail
    pass: 'dmqxcofefzeomlsw'           // ✅ App password (no spaces)
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
        from: '"Loan Contact Form" <aliahmad.tech7@gmail.com>', // ✅ Must match transporter user
        to: 'aliahmad.tech7@gmail.com',
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
      console.error('🔥 Error saving message or sending email:', err); // 👈 detailed
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
