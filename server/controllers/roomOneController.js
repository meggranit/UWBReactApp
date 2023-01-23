const asyncHandler = require('express-async-handler')

const RoomOne = require('../models/roomOneModel')

// @desc Get room one
// @route GET /api/roomone
// @access Private
const getRoomOne = asyncHandler(async (req, res) => {
    const roomone = await RoomOne.find()

    res.status(200).json(roomone)
})

module.exports = {
    getRoomOne
}