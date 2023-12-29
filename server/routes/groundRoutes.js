const express = require('express');
const router = express.Router();
const { getGroundWithBookings,addGround } = require("../controllers/groundController");
router.post('/getGroundBookings',getGroundWithBookings);
router.post('/add-ground',addGround);

module.exports= router