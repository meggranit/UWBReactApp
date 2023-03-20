const express = require("express");
const router = express.Router();
const { getRoomReports, getRoomOneReports , getRoomTwoReports , getRoomThreeReports , getRoomFourReports } = require('../controllers/roomsController')


router.get('/', getRoomReports)
router.get('/roomone', getRoomOneReports )
router.get('/roomtwo', getRoomTwoReports )
router.get('/roomthree', getRoomThreeReports )
router.get('/roomfour', getRoomFourReports)

module.exports = router
