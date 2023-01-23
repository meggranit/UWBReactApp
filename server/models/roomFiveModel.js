const mongoose = require("mongoose");

const roomFiveSchema = mongoose.Schema({
    tagID: {
        type: String,
        required: true
    },
    buildingID: {
        type: String,
        required: true
    },
    roomID: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true
    },
    long : {
        type: String,
        required: true
    },
    time : {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    deviceID: {
        type: String,
        required: true
    }
});

const roomFiveModel = mongoose.model("RoomReports.Room5", roomFiveSchema);
module.exports = roomFiveModel