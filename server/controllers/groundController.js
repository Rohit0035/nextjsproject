const Ground = require('../models/GroundModel');
const Booking = require('../models/BookingModel');

// Get Ground with Bookings for a Particular Date
const getGroundWithBookings = async (req, res) => {
  try {
    const { groundId, date } = req.params;

    // Fetch ground details
    const ground = await Ground.findById(groundId);

    // Fetch bookings for the specified date and ground
    const bookings = await Booking.find({ groundId, date });

    res.json({ ground, bookings });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addGround= async (req, res) => {
    try {
      const { name,price } = req.body;
      const user = new Ground({ namd, price });
      await Ground.save();
  
      res.json({ message: 'User signed up successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
module.exports = { getGroundWithBookings ,addGround};
