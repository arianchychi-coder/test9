const express = require("express")
const router = express.Router();
const teachernationalcodesumbiteController = require("../controllers/teachertnationalcodesumbite_controller")
router.post("/",teachernationalcodesumbiteController.checkNationalCode)
module.exports = router