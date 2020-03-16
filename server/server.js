const express = require('express');
const morgan = require('morgan');
const movieRoutes = require('./routes/movieRoutes');
var bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

//ROUTE IMPORT

//middleware
app.use(morgan('dev')); 
app.use(express.json());
app.use(bodyParser.json());





//serve static files/webpack bundle
app.use(express.static(__dirname + '/../public'));


//ROUTES
app.use('/similars', movieRoutes);








app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


// const bodyParser = require('body-parser');const db = require('../database-mysql');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));