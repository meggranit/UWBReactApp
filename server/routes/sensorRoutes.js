const express = require("express");
const router = express.Router();
const { getSensors } = require('../controllers/sensorsController.js')
const sensorModel = require("../models/sensorModel");

router.get('/', getSensors)

router.post("/getroomid", async(req, res) => {

    const sesnorID = req.body.sensorID
    try {
        const sensorData = await sesnorModel.find({ 'sensorID': sensorID });
        res.send(sensorData)
        console.log(sensorData)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
   });


module.exports = router
