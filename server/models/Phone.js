const mongoose = require('mongoose');

const PhoneSchema = new mongoose.Schema({
    deviceID: {
        type: String,
        required: [true]
    },
    roomID: {
        type: String,
        required: [true]
    },
    distance: {
        type: String,
        required: [true]
    },

});

const Phone = mongoose.model('Phone', PhoneSchema);

module.exports = Phone