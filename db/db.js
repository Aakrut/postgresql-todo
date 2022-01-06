const Pool = require('pg').Pool;

const pool = new Pool({
  user: "user",
  password: "password",
  database: "todo_database",
  host: "localhost",
  port: 5432,
});

module.exports = pool;

//user : "user" || enter your owner name
//password: "password" || enter postgres password
//database: "todo_database" || database
//host: "localhost" || running on local
//port: 5432 || postgres default port (Make sure you put your default port)