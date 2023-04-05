const express = require("express");
const router = express.Router();
const { getRoomReports, getRoomOneReports , getRoomTwoReports , getRoomThreeReports , getRoomFourReports } = require('../controllers/roomsController');
const roomModel = require("../models/roomModel");


router.get('/', getRoomReports)


router.post("/getroombyid", async(req, res) => {

    const roomID = req.body.roomID
    try {
        const roomData = await roomModel.find({ 'roomID': roomID });
        res.send(roomData)
        console.log(roomData)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
   });

router.post("/newreport", async(req, res) => {
    const tagID = req.body.tagID
    const roomID = req.body.roomID
    const time = req.body.time
    const distance = req.body.distance
    const deviceID = req.body.deviceID

    const lat = ""
    const long = ""
    const buildingID = ""
    
    try {
        const sensorData = await sensorModel.find({ 'roomID': roomID });
        res.send(sensorData)
        long = res.body.longitude
        lat = res.body.latitude
        buildingID = res.body.buildingID
        console.log(sensorData)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
   
    try {
        //updateOne(data , update , options)
        const roomData = await roomModel.updateOne({ tagID: tagID, buildingID: buildingID, roomID: roomID , lat: lat, long : long ,    time : time,  distance: distance,   deviceID: deviceID } )
        res.send(roomData)
        console.log(roomData)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
   });

  
router.get('/roomone', getRoomOneReports )
router.get('/roomtwo', getRoomTwoReports )
router.get('/roomthree', getRoomThreeReports )
router.get('/roomfour', getRoomFourReports)

module.exports = router
