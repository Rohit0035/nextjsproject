const Booking = require('../models/BookingModel');

// Add Booking
const addBooking = async (req, res) => {
  try {
    const { userId, date } = req.body;
    const booking = new Booking({ userId, date ,status:true});
    await booking.save();

    res.json({ message: 'Booking added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Bookings for a Particular Date
const getBookingsForDate = async (req, res) => {
  try {
    const { date } = req.params;
    const bookings = await Booking.find({ date });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addBooking, getBookingsForDate };
