var mysql = require('mysql');
var db = mysql.createConnection({
  host     : '49.50.164.176',
  port     : '3315',
  user     : 'root',
  password : 'root1234',
  database : 'random'
});
db.connect();
module.exports = db;