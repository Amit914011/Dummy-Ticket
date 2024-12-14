const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    flightDetails: [
        {
            from: String,
            to: String,
            departureDate: String,
            returnDate: String,
            type: { type: String, required: true, enum: ["oneway", "roundtrip", "multitrip"] },
        }
    ],
    hotelDetails: [{
        cityName: String,
        checkIn: String,
        checkOut: String,
    }],
    passengerDetails: [{
        firstName: String,
        lastName: String,
        dob: String,
        natinality: String,
    }],
    bookingType: { type: String, required: true, enum: ["hotel", "flight", "both"] },
    delivery: {
        purpose: String,
        message: String,
        delivery: { type: String, enum: ["now", "later"] },
        date: String
    },

    paymentAmount: Number,
    transactionId: String,
    status: { type: String, default: "Pending" },
    createdAt: { type: String, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);
