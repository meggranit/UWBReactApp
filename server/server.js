const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 8000

connectDB()
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/phones', require('./routes/phoneRoutes'))
app.use('/api/roomone', require('./routes/roomOneRoutes'))
app.use('/api/roomtwo', require('./routes/roomTwoRoutes'))
app.use('/api/roomthree', require('./routes/roomThreeRoutes'))
app.use('/api/roomfour', require('./routes/roomFourRoutes'))
app.use('/api/roomfive', require('./routes/roomFiveRoutes'))
app.use('/api/sensors', require('./routes/sensorRoutes'))

app.use(errorHandler)


app.listen(port, () => console.log(`Server starting on port ${port}`))



/*
const db = require('./connection')

const path = require("path");


app.use(express.json());
const phoneRoutes = require('./routes/phoneRoutes')
const roomOneRoutes = require('./routes/roomOneRoutes')
app.use("/phone/", phoneRoutes);
app.use("/roomone/", roomOneRoutes)
app.get("/", (req, res) => {
    res.send("Server working on port " + PORT);
});

app.use(express.static(path.resolve(__dirname, "./client/build")));



app.use(express.static(path.resolve(__dirname, "./client/build")));
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
  });

let port = process.env.PORT;
if(port == null || port == ""){
    port = 8000;
}
app.listen(port, ()=>{
    console.log('App listening on '+ port)
})

/*

const server = require('http').createServer(app);
const PORT = 5001;


server.listen(PORT, ()=> {
    console.log('listening to port ', PORT)
})

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
*/