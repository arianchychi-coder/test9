const express = require("express")
const router = express.Router();
const sumbitController = require("../controllers/summbite_controllers")
router.get("/",sumbitController.getAll2)
router.post("/",sumbitController.postStudent)
module.exports = router