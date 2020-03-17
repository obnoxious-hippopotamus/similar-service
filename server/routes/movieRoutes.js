const express = require('express');
const router = express.Router();
const controllers = require('../controllers/movieControllers');




router.get('/', controllers.getSimilarMovies);







module.exports = router;