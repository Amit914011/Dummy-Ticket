const express = require('express');
const { createBooking, getBooking, getBookingById, updateBookingStatus } = require('../controllers/bookingController');
const { authorizeAdmin, authenticate } = require('../middlewares/authMiddleware');
const { getBookings } = require('../controllers/authController');

const router = express.Router();

router.post('/',  createBooking);
router.get('/client-bookings' ,  authenticate() , getBookings);
router.get('/',  authenticate()  , getBooking);
router.get('/:id', authenticate() , authorizeAdmin() ,  getBookingById);

router.patch('/updateStatus',  authenticate() , authorizeAdmin() ,  updateBookingStatus);


// client =






module.exports = router;
