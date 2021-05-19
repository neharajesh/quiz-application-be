const mongoose = require("mongoose")
require("dotenv").config();

const MONGODB_URI = process.env["MONGODB_URI"];

const initializeDbConnection = async() => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("DB Connection Successful")
    } catch (err) {
        console.log("DB Connection Failed => due to", err.message)
    }
}

module.exports = { initializeDbConnection }