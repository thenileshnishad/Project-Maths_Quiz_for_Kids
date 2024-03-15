const express = require("express")
const app = express()
require("dotenv").config()
require("./config/dbConfig")

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
