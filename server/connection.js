const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://meggranit:fyv15fWaLedSIi1x@cluster0.hiifasz.mongodb.net/?retryWrites=true&w=majority', ()=> {
    console.log('connected to mongodb')
})