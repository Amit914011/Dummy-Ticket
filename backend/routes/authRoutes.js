const express = require('express');
const { changePassword, login, adminLogin } = require('../controllers/authController');
const Adminuser = require('../models/Adminuser');
const bcrypt = require("bcrypt")

const router = express.Router();

router.post('/change-password', changePassword);
router.post('/login', login);
router.post('/admin-login', adminLogin);
router.post('/admin-register', (async (req, res) => {
  const { email, password } = req.body
  const hashedPassword = await bcrypt.hash(password, 10);
  const newAdmin = await new Adminuser({ email, password: hashedPassword })
  await newAdmin.save()
  res.send("OK")
}));




module.exports = router;
