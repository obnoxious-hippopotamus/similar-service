const express = require('express');
const router = express.Router();
const models = require('../models/models');



router.get('/similars', models.getSimilarMovies);







module.exports = router;