var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '49.50.164.176',
  port     : '3315',
  user     : 'root',
  password : 'root1234',
  database : 'opentutorials'
});
 
connection.connect();
 
connection.query('SELECT * from topic', function (error, results, fields) {
  if (error) {
  	console.log(error);
  }
  console.log(results);
});
 
connection.end();