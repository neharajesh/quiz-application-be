const express = require("express")
const router = express()

const { Quiz } = require("../models/quiz-model")

router.route("/")
.get(async(req, res) => {
    try {
        const quizzes = await Quiz.find({})
        res.json({success: true, message: "Quizzes are here!", receivedData: quizzes})
    } catch (err) {
        res.json({success: false, message: "Quiz Could Not Be Fetched", errMessage: err.message})
    }
})
.post(async(req, res) => {
    try {
        const quiz = req.body
        const newQuiz = new Quiz(quiz)
        const savedQuiz = await newQuiz.save()
        res.json({success: true, message: "Quiz successfully added", sentData: savedQuiz})
    } catch (err) {
        res.json({success: false, message: "Quiz could not be added", errMessage: err.message})
    }
})

module.exports = router