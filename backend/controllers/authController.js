const User = require('../models/User');
const Booking = require('../models/Booking'); // Assuming Booking model exists
const bcrypt = require('bcrypt');
const { sendMail } = require('../common/sendmail');
const Adminuser = require('../models/Adminuser');
require("dotenv").config()

const jwt = require("jsonwebtoken")


// Change Password API
exports.changePassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Generate a new password
    const newPassword = Math.random().toString(36).slice(-8);
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password in the database
    user.password = hashedPassword;
    await user.save();

    // Send email with the new password


    sendMail(email , 'Your New Password' , `Your new password is: ${newPassword}` );

    res.status(200).json({ message: 'Password changed successfully. Check your email for the new password.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};



// Login Controller
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    // Generate a token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};




// Controller to Fetch Booking Details
exports.getBookings = async (req, res) => {
  const userId = req.user.userId; // Assumes userId is set in the middleware

  try {
    const bookings = await Booking.find({ userId }).select('orderId status passengerDetails paymentAmount createdAt');

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ message: 'No bookings found.' });
    }

    res.status(200).json({ message: 'Bookings fetched successfully', data: bookings });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};




exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    // Find admin by email
    const admin = await Adminuser.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: admin._id, email: admin.email, role: 'admin' }, // Payload
      process.env.JWT_SECRET, // Secret key
      { expiresIn: '30d' } // Token expiration time
    );

    // Respond with token and success message
    res.status(200).json({
      message: 'Login successful',
      token, // Send token in the response
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

