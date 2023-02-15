const express = require("express");
const router = express.Router();
const { getRoomReports } = require('../controllers/roomsController')

router.get('/', getRoomReports)


module.exports = router
