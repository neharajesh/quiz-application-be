const mongoose = require("mongoose")
const { Schema } = mongoose

const { Category } = require("./category-model")
const { Question } = require("./question-model")

const QuizSchema = new Schema({
    quizName: {
        type: String, 
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: Category
    },
    maxPoints: Number,
    noOfQuestions: Number,
    questionList: [{
        type: Schema.Types.ObjectId,
        ref: Question
    }]
})

const Quiz = mongoose.model("Quiz", QuizSchema)

module.exports = { Quiz }