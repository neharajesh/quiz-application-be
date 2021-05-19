const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
require("dotenv").config()

const { initializeDbConnection } = require("./db/dbSetup")
initializeDbConnection();

const PORT = process.env['PORT'];
const app = express()

app.get("/", (req, res) => {
    res.json({success: true, message: "Quiz App Backend Loaded"})
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})