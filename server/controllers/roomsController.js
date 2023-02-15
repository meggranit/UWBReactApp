const asyncHandler = require('express-async-handler')

const RoomReports = require('../models/roomModel')

// @desc Get rooms
// @route GET /api/roomreports
// @access Private
const getRoomReports = asyncHandler(async (req, res) => {
    const rooms = await RoomReports.find()

    res.status(200).json(rooms)
})

module.exports = {
    getRoomReports
}