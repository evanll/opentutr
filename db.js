// the database creadentials are stored in the env file
require("dotenv").config();

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

setInterval(function(){
    connection.query('SELECT 1');
}, 5000);

connection.connect();

// todo: remove
// keep connection alive
setInterval(function () {
    connection.query('SELECT 1');
}, 5000);

// uncomment to test the connection, see mysql npm documentation
// connection.query("SELECT 1 + 1 AS solution", function(error, results, fields) {
//   if (error) throw error;
//   console.log("The solution is: ", results[0].solution);
// });

module.exports = connection;
