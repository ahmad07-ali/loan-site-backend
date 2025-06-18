const mongoose = require('mongoose');
mongoose.pluralize(null);

const msgSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    phoneNo: {
      type: Number,
      required: [true, 'Phone number is required']
    },
    message: {
      type: String,
      required: [true, 'Message is required']
    }
  },
  {
    timestamps: true // ✅ Adds createdAt and updatedAt
  }
);

const msgModel = mongoose.model('Message', msgSchema);
module.exports = msgModel;
