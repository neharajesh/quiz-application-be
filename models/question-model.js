const mongoose = require("mongoose")
const { Schema } = mongoose

const QuestionSchema = new Schema({
    questionText: {
        type: String, 
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    options: [{
        optionNo: Number,
        optionText: String,
        isRight: Boolean
    }]
})

const Question = mongoose.model("Question", QuestionSchema)

module.exports = { Question }