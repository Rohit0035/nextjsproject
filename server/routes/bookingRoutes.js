const express = require('express');
const router = express.Router();
const { addBooking,getBookingsForDate } = require('../controllers/bookingController');
router.post('/get-bookings',getBookingsForDate);
router.post('/add-booking',addBooking);

module.exports= router