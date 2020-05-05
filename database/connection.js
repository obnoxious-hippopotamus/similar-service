
const mysql = require('mysql');


//DATABASE CONNECTION - this how we are able to make queries to our DB
var connection = mysql.createPool(process.env.CLEARDB_DATABASE_URL);


// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
//   console.log('Houston, we have a connection! With ID:' + connection.threadId);
// });










module.exports = connection;