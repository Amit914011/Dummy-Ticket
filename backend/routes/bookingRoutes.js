const express = require('express');
const { createBooking, getBooking, getBookingById, updateBookingStatus } = require('../controllers/bookingController');
const { authorizeAdmin, authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/',  createBooking);
router.get('/',  authenticate() , authorizeAdmin() , getBooking);
router.get('/:id', authenticate() , authorizeAdmin() ,  getBookingById);

router.patch('/updateStatus',  authenticate() , authorizeAdmin() ,  updateBookingStatus);


module.exports = router;
