const express = require("express");
const router = express.Router();
const { getRoomReports } = require('../controllers/roomsController')
const { getRoomOneReports } = require('../controllers/roomsController')
const { getRoomTwoReports } = require('../controllers/roomsController')
const { getRoomThreeReports } = require('../controllers/roomsController')


router.get('/', getRoomReports)
router.get('/roomone', getRoomOneReports )
router.get('/roomtwo', getRoomTwoReports )
router.get('/roomthree', getRoomThreeReports )

module.exports = router
