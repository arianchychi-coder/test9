const express = require("express")
const router = express.Router();
const teacherController = require("../controllers/teacher_controller")
router.get("/",teacherController.getAll)
router.post("/",teacherController.postTeaher)
module.exports = router