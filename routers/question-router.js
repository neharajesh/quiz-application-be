const express = require("express")
const router = express()

const { Question } = require("../models/question-model")

router.route("/")
.get(async(req, res) => {
    try {
        const questions = await Question.find({})
        res.json({success: true, message: "Retrieved Questions", receivedData: questions})
    } catch (err) {
        console.log("Error occurred while retrieving questions", err.message)
        res.json({success: false, message: "Error occurred while retrieving questions", errMessage: err.message})
    }
})
.post(async(req, res) => {
    try {
        const question = req.body
        const newQuestion = new Question(question)
        const savedQuestion = await newQuestion.save()
        res.json({success: true, message: "Added Question", sentData: savedQuestion})
    } catch (err) {
        console.log("Error Occurred while Adding Question", err.message)
        res.json({success: false, message: "Error Occurred while Adding Question", errMessage: err.message})
    }
})

module.exports = router;