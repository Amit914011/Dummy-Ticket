const express = require('express');
const { changePassword, login } = require('../controllers/authController');

const router = express.Router();

router.post('/change-password', changePassword);
router.post('/login', login);


module.exports = router;
