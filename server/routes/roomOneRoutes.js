const express = require("express");
const router = express.Router();
const { getRoomOne } = require('../controllers/roomOneController')

router.get('/', getRoomOne)


module.exports = router
