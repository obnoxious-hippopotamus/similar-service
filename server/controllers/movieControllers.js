const express = require('express');
const models = require('../models/movieModels')





const getSimilarMovies = (req, res) => {
  models.getSimilarMovies()
  .then(results => {
      res.status(201).json({ results })
  })
  .catch(err => {
      res.status(400).json({
          message: 'Failed to get Data!',
          err: err
      })
  })
}









module.exports = {
    getSimilarMovies
}