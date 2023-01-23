const asyncHandler = require('express-async-handler')

const RoomFive = require('../models/roomFiveModel')

// @desc Get room five
// @route GET /api/roomfive
// @access Private
const getRoomFive = asyncHandler(async (req, res) => {
    const roomfive = await RoomFive.find()

    res.status(200).json(roomfive)
})

module.exports = {
    getRoomFive
}