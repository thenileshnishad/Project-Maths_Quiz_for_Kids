const mongoose = require("mongoose")
const MONGODB_URI = process.env.MONGODB_URI

const connection = mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully")
  })
  .catch((error) => {
    console.log("MongoDB connection error: ", error)
  })

module.exports = connection
