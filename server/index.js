const express = require("express")
const app = express()
require("dotenv").config()
require("./config/dbConfig")
app.use(express.json())

const usersRoute = require("./routes/usersRoute")

app.use("/api/users", usersRoute)

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
