const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'sachin',
  database: 'quiz'
});

module.exports = db;
