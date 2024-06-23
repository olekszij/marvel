const mongoose = require('mongoose');

const User = mongoose.model('User', {
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token: { type: String, required: true },
  salt: { type: String, required: true },
  hash: { type: String, required: true },
});

module.exports = User;
