const express = require("express");
const router = express.Router();
const { getRoomReports, getRoomOneReports , getRoomTwoReports , getRoomThreeReports , getRoomFourReports } = require('../controllers/roomsController');
const roomModel = require("../models/roomModel");
var Pusher = require("pusher");

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
    const buildingID = req.body.buildingID
    const roomID = req.body.roomID
    const lat = req.body.lat
    const long = req.body.long
    const time = req.body.time
    const distance = req.body.distance
    const deviceID = req.body.deviceID
    
    try {

        //updateOne(data , update , options)
        const roomData = await roomModel.updateOne( { 'deviceID' : deviceID} , { $set: { tagID: tagID, buildingID: buildingID, roomID: roomID , lat: lat, long : long ,    time : time,  distance: distance,   deviceID: deviceID }} , {upsert : true} )
        res.send(roomData)
        console.log(roomData)


     
        var pusher = new Pusher({
            appId: "1543367",
            key: "df84289eebfca65c0b86",
            secret: "683709999b5a504b9a6a",
            cluster: "us2",
        });

        pusher.trigger("channel_room1", "event_room1", { message: "post room" });

    } catch (error) {
        return res.status(400).json({ message: error });
    }
   });

  
router.get('/roomone', getRoomOneReports )
router.get('/roomtwo', getRoomTwoReports )
router.get('/roomthree', getRoomThreeReports )
router.get('/roomfour', getRoomFourReports)

module.exports = router
