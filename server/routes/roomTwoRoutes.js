const express = require("express");
const router = express.Router();
const { getRoomTwo } = require('../controllers/roomTwoController')

router.get('/', getRoomTwo)


module.exports = router
