const express = require("express")
const morgan = require("morgan")
const itemRoutes = require("./routes/itemRoutes")
const app = express()

app.use(express.json())
app.use(morgan("combined"))
app.use("/items", itemRoutes)

module.exports = app