const express = require("express");
const router = express.Router();
const { getPhones } = require('../controllers/phonesController')

router.get('/', getPhones)


module.exports = router
