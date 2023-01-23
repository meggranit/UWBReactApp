const express = require("express");
const router = express.Router();
const { getRoomFour } = require('../controllers/roomFourController')

router.get('/', getRoomFour)


module.exports = router
