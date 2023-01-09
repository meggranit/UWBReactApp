const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://meggranit:fyv15fWaLedSIi1x@cluster0.hiifasz.mongodb.net/UWB'
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })
var db = mongoose.connection
db.on('connected', () => {
    console.log('Mongo DB Connection Successful')
})
db.on('error', () => {
    console.log('Mongo DB Connection Failed')
})


module.exports = mongoose