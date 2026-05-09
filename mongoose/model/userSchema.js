const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});
const users = mongoose.model("users", userSchema);
module.exports = users;
