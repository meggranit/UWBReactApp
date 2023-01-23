const express = require("express");
const router = express.Router();
const { getRoomThree } = require('../controllers/roomThreeController')

router.get('/', getRoomThree)


module.exports = router
