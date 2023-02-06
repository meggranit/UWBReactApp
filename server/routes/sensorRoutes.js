const express = require("express");
const router = express.Router();
const { getSensors } = require('../controllers/sensorsController.js')

router.get('/', getSensors)


module.exports = router
