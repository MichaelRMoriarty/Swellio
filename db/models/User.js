const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  spots: {
    type: [{
      id: String,
      name: String
    }],
    required: true
  },
  condition: {
    type: Number,
    required: true
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User;