const Booking = require('../models/Booking');

const User = require('../models/User');

require("dotenv").config()


const Razorpay = require('razorpay');

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // Use environment variables for security
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports = razorpayInstance;



exports.createBooking = async (req, res) => {
  const {
    email,
    phone,
    flightDetails,
    hotelDetails,
    passengerDetails,
    bookingType,
    paymentAmount,
    transactionId
  } = req.body;

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    let newUser;

    // Check if user exists
    const isExist = await User.findOne({ email }).session(session);

    if (!isExist) {
      // Create a new user
      newUser = new User({ email, phone });
      await newUser.save({ session });
    }

    // Create Razorpay order
    const options = {
      amount: paymentAmount * 100, // Convert amount to smallest currency unit
      currency: 'INR',
    };

    const order = await razorpayInstance.orders.create(options);

    // Prepare booking details
    const details = {
      userId: isExist ? isExist._id : newUser._id,
      flightDetails,
      hotelDetails,
      passengerDetails,
      bookingType,
      paymentAmount,
      transactionId,
    };

    // Create a new booking
    const newBooking = new Booking(details);
    await newBooking.save({ session });

    // Commit transaction
    await session.commitTransaction();
    session.endSession();

    res.status(201).json({ bookingId: newBooking._id, message: 'Booking confirmed', order });
  } catch (error) {
    // Rollback transaction
    await session.abortTransaction();
    session.endSession();

    // Send error response
    res.status(500).json({
      message: 'Due to an error, the booking could not be initiated. Please try again later.',
      error
    });
  }
};

exports.getBooking = async (req, res) => {
  try {
    const allBookings = await Booking.find({ status: "Pending" }).populate({
      path: 'userId', // assuming the field is named 'userId' in the Booking model
      select: 'email' // specifying that only the 'email' field from the User model should be populated
    });
    if (!allBookings) return res.status(204).json({ success: true, error: false, data: [], message: "No data found" })
    res.status(200).json({ success: true, error: false, data: allBookings, message: "Details fetched" })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


// Get Booking Details by ID
exports.getBookingById = async (req, res) => {
  const { id } = req.params;

  try {
    const booking = await Booking.findById(id).populate({
      path: 'userId',
      select: 'email'
    });
    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};


// Update Booking Status
exports.updateBookingStatus = async (req, res) => {
  const { bookingId, status, subject, message } = req.body;

  try {
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }

    booking.status = status;

    // Add delivery details if the status is "Delivered"
    if (status === "Delivered") {
      booking.deliveryDetails = { subject, message };
    }

    await booking.save();

    res.status(200).json({ success: true, message: "Booking status updated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};
