const Booking = require('../models/Booking');

const User = require('../models/User');



exports.createBooking = async (req, res) => {
  const { email, phone, flightDetails, hotelDetails, passengerDetails, bookingType, paymentAmount, transactionId } = req.body;
  try {

    var newUser ;


    const isExist = await User.findOne({ email })
    if (!isExist) {
      newUser = await new User({ email, phone })
      await newUser.save();
    }

    // newUser._id 
    const details = {
      userId: isExist ? isExist._id : newUser._id,
      flightDetails,
      hotelDetails,
      passengerDetails,
      bookingType,
      paymentAmount,
      transactionId
    }

    const newBooking = await new Booking(details);
    await newBooking.save();

    res.status(201).json({ bookingId: newBooking._id, message: 'Booking confirmed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
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
    const booking = await Booking.findById(id).populate({path: 'userId', 
      select: 'email'});
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
