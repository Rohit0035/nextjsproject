const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // You may add more fields based on your user requirements (e.g., password, role, etc.).
});

const User = mongoose.model('User', userSchema);

module.exports = User;
