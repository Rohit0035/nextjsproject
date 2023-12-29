const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model (assuming you have a User model)
    required: true,
  },
  groundId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ground', // Reference to the Ground model
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String, // You can use a string to represent time (e.g., "09:00 AM")
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },

});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
