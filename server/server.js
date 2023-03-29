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


app.use('/api/roomreports', require('./routes/roomRoutes'))
app.use('/api/phones', require('./routes/phoneRoutes'))
app.use('/api/sensors', require('./routes/sensorRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server starting on port ${port}`))

