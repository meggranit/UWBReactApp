const asyncHandler = require('express-async-handler')

const RoomTwo = require('../models/roomTwoModel')

// @desc Get room two
// @route GET /api/roomtwo
// @access Private
const getRoomTwo = asyncHandler(async (req, res) => {
    const roomtwo = await RoomTwo.find()

    res.status(200).json(roomtwo)
})

module.exports = {
    getRoomTwo
}