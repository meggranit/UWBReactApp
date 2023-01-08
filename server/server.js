const express = require('express');
const app = express();
const phoneRoutes = require('./routes/phoneRoutes')


const rooms = ['all', 'one', 'two', 'three', 'four', 'five'];
const cors = require('cors');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use('/api/phones/', phoneRoutes )
require('./connection')

const server = require('http').createServer(app);
const PORT = 5001;
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

app.get('/phones', (req, res)=> {
    res.json(phones)
})



server.listen(PORT, ()=> {
    console.log('listening to port ', PORT)
})

