const express = require("express");
const router = express.Router();
const Phone = require('../models/phoneModel');


router.get("/getallphones", async (req, res) => {
    try{
        const phone = await Phone.find();
        res.json(phone)
        console.log('phoneRoute')
    } catch (error) {
        console.log('phone route error')
        return res.status(400).json({ message: error })
        
    }
})

module.exports = router
