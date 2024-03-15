const mongoose = require("mongoose")

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
  password: {
    type: String,
    required: true,
  },
  std: {
    type: Number,
    required: true,
  },
  add_line: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: Number,
    required: true,
  },
  secQts: {
    type: String,
    required: true,
  },
  secAns: {
    type: String,
    required: true,
  },
})

const User = mongoose.model("users", userSchema)
module.exports = User
