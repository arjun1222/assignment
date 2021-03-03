const express = require('express')
const router = express.Router()

const controller = require("../controller/questionsController")

router.get("/show", controller.showAllQuestions)

router.put("/add", controller.addQuestion)

router.post("/update", controller.updateQuestion)

router.delete("/delete", controller.deleteQuestion)


module.exports= router