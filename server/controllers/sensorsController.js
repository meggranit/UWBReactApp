const asyncHandler = require('express-async-handler')

const Sensor = require('../models/sensorModel')

// @desc Get sensors
// @route GET /api/sensors
// @access Private
const getSensors = asyncHandler(async (req, res) => {
    const sensors = await Sensor.find()

    res.status(200).json(sensors)
})

module.exports = {
    getSensors
}