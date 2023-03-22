const express = require("express");
const router = express.Router();
const { getRoomReports }  = require('../controllers/roomsController');
//const { getRoomReports, getRoomOneReports , getRoomTwoReports , getRoomThreeReports , getRoomFourReports } = require('../controllers/roomsController');
//const roomModel = require("../models/roomModel");


router.get('/', getRoomReports)

/*
router.get("/getroombyid", async(req, res) => {

    const id = req.body.id
   
    try {
        const roomData = await roomModel.find({ roomID: id }, function (err, docs) {
            if (err){
                console.log(err);
            }
            else{
                console.log("First function call : ", docs);
            }
        });
        res.send(roomData)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
     
   });

router.get('/roomone', getRoomOneReports )
router.get('/roomtwo', getRoomTwoReports )
router.get('/roomthree', getRoomThreeReports )
router.get('/roomfour', getRoomFourReports)
*/
module.exports = router
