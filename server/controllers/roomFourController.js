const asyncHandler = require('express-async-handler')

const RoomFour = require('../models/roomFourModel')

// @desc Get room four
// @route GET /api/roomfour
// @access Private
const getRoomFour = asyncHandler(async (req, res) => {
    const roomfour = await RoomFour.find()

    res.status(200).json(roomfour)
})

module.exports = {
    getRoomFour
}