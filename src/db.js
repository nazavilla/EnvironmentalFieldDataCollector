var mysql = require("mysql");

export var connection = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
