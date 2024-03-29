const express = require("express");
const router = express.Router();
const { getRoomReports, getRoomOneReports , getRoomTwoReports , getRoomThreeReports , getRoomFourReports } = require('../controllers/roomsController');
const roomModel = require("../models/roomModel");
const phoneModel = require("../models/phoneModel");
var Pusher = require("pusher");

var moveRooms = false
var furtherFromSensor = false

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

    var pusher = new Pusher({
        appId: "1543367",
        key: "df84289eebfca65c0b86",
        secret: "683709999b5a504b9a6a",
        cluster: "us2",
    });


    /**
     * get last record for device ID
     * 
     * if deviceID exists {
     *      if roomID from previous record != new roomID record {
     *          compare previous distance to new distance
     *          if prevDistance < newDistance { 
     *              dont create new record because they are closer to original sensor
     *          } else {
     *              create record because they are now in other room and closer to new sensor
     *          }
     *      }
     * }
     * 
     */
    

    
    const previousRecords = await roomModel.find({"deviceID": deviceID})
    if (previousRecords.length > 0) {
        const previousRecord = previousRecords[0];
        if(previousRecord.roomID != roomID){
            moveRooms = true
        } else {
            moveRooms = false
        }
        if(previousRecord.distance < distance){
            furtherFromSensor = true
         } else {
            furtherFromSensor = false
        }
    }


    //if they have a previous record, they moved to different room, and they are further from new sensor than previous sensor, dont create record
    if(moveRooms && furtherFromSensor){
        console.log("Don't insert into database, sensor from another room is picking up phone")
        try {
            res.status(200).json({message: "Don't insert into database, sensor from another room is picking up phone"})
        } catch (error){
            return res.status(400).json({ message: error });
        }
    } else {

        try {

            //updateOne(data , update , options)
            pusher.trigger("channel_room1", "event_room1", { message: "post room" });
            const roomData = await roomModel.updateOne( { 'deviceID' : deviceID} , { $set: { tagID: tagID, buildingID: buildingID, roomID: roomID , lat: lat, long : long ,    time : time,  distance: distance,   deviceID: deviceID }} , {upsert : true} )
            const phoneData = await phoneModel.updateOne( { 'deviceID' : deviceID} , { $set: { deviceID: deviceID , roomID: roomID , distance: distance }} , {upsert : true} )
            
            res.send(roomData)
            console.log(roomData)
            console.log("PREVIOUS RECORD " + previousRecords[0])
           
            
            
    
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }
   

    
   });
    
  
router.get('/roomone', getRoomOneReports )
router.get('/roomtwo', getRoomTwoReports )
router.get('/roomthree', getRoomThreeReports )
router.get('/roomfour', getRoomFourReports)

module.exports = router
