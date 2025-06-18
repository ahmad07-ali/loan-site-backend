const mongoose = require('mongoose');
mongoose.pluralize(null);

const msgSchema = new mongoose.Schema({
  name:    { type: String, required: true },
  email:   { type: String, required: true },
  phoneNo: { type: Number, required: true },
  message: { type: String, required: true }
});

const msgModel = mongoose.model('Message', msgSchema);
module.exports = msgModel;
