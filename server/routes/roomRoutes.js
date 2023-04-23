const express = require("express");
const router = express.Router();
const { getRoomReports, getRoomOneReports , getRoomTwoReports , getRoomThreeReports , getRoomFourReports } = require('../controllers/roomsController');
const roomModel = require("../models/roomModel");
const phoneModel = require("../models/phoneModel");
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
    

    var moveRooms = false
    var furtherFromSensor = false
    const previousRecord = await roomModel.find({"deviceID": deviceID}).then(room => {
        if(room.roomID != roomID){
            moveRooms = true
        } else {
            moveRooms = false
        }
        if(room.distance < distance){
            furtherFromSensor = true
        } else {
            furtherFromSensor = false
        }

        if(moveRooms && furtherFromSensor){
            console.log("Don't insert into database, sensor from another room is picking up phone")
        } else {
    
            try {
    
                //updateOne(data , update , options)
                pusher.trigger("channel_room1", "event_room1", { message: "post room" });
                const roomData = roomModel.updateOne( { 'deviceID' : deviceID} , { $set: { tagID: tagID, buildingID: buildingID, roomID: roomID , lat: lat, long : long ,    time : time,  distance: distance,   deviceID: deviceID }} , {upsert : true} )
                const phoneData = phoneModel.updateOne( { 'deviceID' : deviceID} , { $set: { deviceID: deviceID , roomID: roomID , distance: distance }} , {upsert : true} )
                
                res.send(roomData)
                console.log(roomData)
                console.log("PREVIOUS RECORD " + previousRecord)
               
                
                
        
            } catch (error) {
                return res.status(400).json({ message: error });
            }
        }
       

    })


    //if they have a previous record, they moved to different room, and they are further from new sensor than previous sensor, dont create record
   

    
   });
    
  
router.get('/roomone', getRoomOneReports )
router.get('/roomtwo', getRoomTwoReports )
router.get('/roomthree', getRoomThreeReports )
router.get('/roomfour', getRoomFourReports)

module.exports = router
