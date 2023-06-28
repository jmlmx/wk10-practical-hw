require("dotenv").config()
const app = require("./app")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => console.log("Mongo is vibin' with us..."))


app.listen(PORT, () => {
    console.log(`We are hot and rolling on Port ${PORT}!`)
})