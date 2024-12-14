const Booking = require('../models/Booking');

const User = require('../models/User');



exports.createBooking = async (req, res) => {
  const { email, phone, flightDetails, hotelDetails, passengerDetails, bookingType, paymentAmount, transactionId } = req.body;
  try {

    const newUser = await new User({ email, phone })

    await newUser.save();

    // newUser._id 
    const details = {
      userId: newUser._id,
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
    const allBookings = await Booking.find({status : "Pending"})
    if (!allBookings) return res.status(204).json({ success: true, error: false, data: [], message: "No data found" })
    res.status(200).json({ success: true, error: false, data: allBookings, message: "Details fetched" })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};