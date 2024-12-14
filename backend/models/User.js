const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password : { type: String, default : "" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
