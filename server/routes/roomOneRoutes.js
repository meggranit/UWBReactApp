const express = require("express");
const router = express.Router();
const RoomOne = require('../models/roomOneModel');


router.get("/getroomone", async (req, res) => {
    try{
        const roomone = await RoomOne.find();
        res.json(roomone)
        console.log('roomOneRoute')
    } catch (error) {
        console.log('room one route error')
        return res.status(400).json({ message: error })
        
    }
})

module.exports = router
