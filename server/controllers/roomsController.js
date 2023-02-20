const asyncHandler = require('express-async-handler')

const RoomReports = require('../models/roomModel')

// @desc Get rooms
// @route GET /api/roomreports
// @access Private
const getRoomReports = asyncHandler(async (req, res) => {
    const rooms = await RoomReports.find()

    res.status(200).json(rooms)
})

const getRoomOneReports = asyncHandler(async (req, res) => {
    const roomone = await RoomReports.find({"roomID": "1"})

    res.status(200).json(roomone)
})
const getRoomTwoReports = asyncHandler(async (req, res) => {
    const roomtwo = await RoomReports.find({"roomID": "2"})

    res.status(200).json(roomtwo)
})
const getRoomThreeReports = asyncHandler(async (req, res) => {
    const roomthree = await RoomReports.find({"roomID": "3"})

    res.status(200).json(roomthree)
})


module.exports = {
    getRoomReports,
    getRoomOneReports,
    getRoomTwoReports,
    getRoomThreeReports
}