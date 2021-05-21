const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
require("dotenv").config()

const { initializeDbConnection } = require("./db/dbSetup")
initializeDbConnection();

const PORT = process.env.PORT;
const app = express()
app.use(bodyParser.json());
app.use(cors())

const categoryRouter = require("./routers/category-router")
const questionRouter = require("./routers/question-router")
const quizRouter = require("./routers/quiz-router")

app.use("/categories", categoryRouter)
app.use("/questions", questionRouter)
app.use("/quizzes", quizRouter)

app.get("/", (req, res) => {
    res.json({success: true, message: "Quiz App Backend Loaded"})
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})