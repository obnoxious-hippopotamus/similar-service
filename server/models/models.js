const express = require('express');
const connection = require('../../database/connection');




  const getSimilarMovies = () => {
    return new Promise ((resolve, reject) => {
      const queryString = 'SELECT poster FROM attributes';
      connection.query(queryString, (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };











module.exports = {
  getSimilarMovies
}