const express = require("express")
const router = express()

const { Category } = require("../models/category-model")

router.route("/")
.get(async(req, res) => {
    try {
        const categories = await Category.find({});
        res.json({success: true, message: "Getting All Categories", receivedData: categories})
    } catch (err) {
        console.log("Error Occurred While Retrieving Categories", err.message)
        res.json({success: false, message: "Error Occurred While Retrieving Categories", errMessage: err.message})
    }
})
.post(async(req, res) => {
    try {        
        const category = req.body
        console.log(req.body)
        const newCategory = new Category(category)
        const savedCategory = await newCategory.save()
        res.json({success: true, message: "Added new Category", sentData: savedCategory})
    } catch (err) {
        console.log("Error Occurred While Adding New Categories", err.message)
        res.json({success: false, message: "Error Occurred While Adding New Categories", errMessage: err.message})
    }
})

module.exports = router
