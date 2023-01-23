const express = require("express");
const router = express.Router();
const { getRoomFive } = require('../controllers/roomFiveController')

router.get('/', getRoomFive)


module.exports = router
