require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
var bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3000;

//ROUTE IMPORT
const movieRoutes = require('./routes/movieRoutes');



//middleware
app.use(morgan('dev')); 
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());




//serve static files/webpack bundle
app.use(express.static('public'));

//ROUTES
app.use('/', movieRoutes);
app.use('/', movieRoutes);
app.use('/', movieRoutes);
app.use('/', movieRoutes);





app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


