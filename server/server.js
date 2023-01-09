const express = require('express');
const db = require('./connection')
const app = express();
const path = require("path");

app.use(express.json());
const phoneRoutes = require('./routes/phoneRoutes')
const roomOneRoutes = require('./routes/roomOneRoutes')
app.use("/phone/", phoneRoutes);
app.use("/roomone/", roomOneRoutes)
app.get("/", (req, res) => {
    res.send("Server working on port " + port);
});

app.use(express.static(path.resolve(__dirname, "./client/build")));




const server = require('http').createServer(app);
const PORT = 5001;


server.listen(PORT, ()=> {
    console.log('listening to port ', PORT)
})

