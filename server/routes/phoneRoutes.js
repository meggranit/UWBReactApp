const router = require('express').Router();
const Phone = require('../models/Phone');


router.get("/getallphones", async(req, res) => {
    try {
        const phones = await Phone.find({})
        res.send(phones)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
})

module.exports = router