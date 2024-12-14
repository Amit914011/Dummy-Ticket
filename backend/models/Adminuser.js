const mongoose = require('mongoose');

const adminUserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password : { type: String, default : "" },
  role : {type : String , default : "admin"},
  createdAt: { type: Date, default: Date.now },
});



module.exports = mongoose.model('UserAdmin', adminUserSchema);
