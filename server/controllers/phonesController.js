const asyncHandler = require('express-async-handler')

const Phone = require('../models/phoneModel')

// @desc Get phones
// @route GET /api/phones
// @access Private
const getPhones = asyncHandler(async (req, res) => {
    const phones = await Phone.find()

    res.status(200).json(phones)
})

module.exports = {
    getPhones
}