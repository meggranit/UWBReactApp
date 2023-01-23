const asyncHandler = require('express-async-handler')

const RoomThree = require('../models/roomThreeModel')

// @desc Get room three
// @route GET /api/roomthree
// @access Private
const getRoomThree = asyncHandler(async (req, res) => {
    const roomthree = await RoomThree.find()

    res.status(200).json(roomthree)
})

module.exports = {
    getRoomThree
}