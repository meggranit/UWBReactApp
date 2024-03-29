const mongoose = require('mongoose');

const sensorSchema = mongoose.Schema({
    sensorID: {
        type: String,
        required: true
    },
    roomID: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    buildingID: {
        type: String,
        required: true
    }

});

const sensorModel = mongoose.model('Sensor', sensorSchema);
module.exports = sensorModel



