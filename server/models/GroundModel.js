const mongoose = require('mongoose');

const groundSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
   // unique: true,
  },
  // You can add more details about the ground (e.g., location, facilities, etc.).
});

const Ground = mongoose.model('Ground', groundSchema);

module.exports = Ground;
