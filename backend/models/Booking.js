const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    flightDetails: [
        {
            from: String,
            to: String,
            departureDate: String,
            returnDate: String,
            type: { type: String, required: true, enum: ["One Way", "roundtrip", "multitrip"] },
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
        nationality: String,
        title : String
    }],
    bookingType: { type: String, required: true, enum: ["hotel", "flight", "both"] },
    delivery: {
        purpose: String,
        message: String,
        receivingtime: { type: String, enum: ["now", "later"] },
        date: String
    },

    paymentAmount: Number,
    status: { type: String, default: "Pending" },
    RazorPayOrderId : { type: String},
    createdAt: { type: String, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);
