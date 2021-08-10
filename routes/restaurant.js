const express = require('express');
const dotenv = require('dotenv')
const Restaurant = require('../models/restaurant')

const router = express.Router();
dotenv.config();

router.post('/addRestaurant', async (req, res) => {
});

router.get('/restaurants', async (req, res) => {
});

module.exports = router;
