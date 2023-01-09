const mongoose = require("mongoose");

const phoneSchema = mongoose.Schema({
    deviceID: {
        type: String,
        required: true
    },
    roomID: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    }

});

const phoneModel = mongoose.model("Phone", phoneSchema);
module.exports = phoneModel