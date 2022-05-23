var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "username",
  database: "password",
});

//connection to mysql
connection.connect(function (err) {
  //connect to database
  if (err) throw err;
  console.log("Connected!");

  //create table
  /*
  var sql =
    "CREATE TABLE cities (name varchar(255), aqi varchar(255), noise varchar(255), pollutant varchar(255), comment varchar(255))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  //insert into table
  var sql =
    "INSERT INTO cities (name, aqi, noise, pollutant, comment) VALUES ('Santiago de Chile', 'Harmful', 'Considerate', 'NO2', 'No Ventilation')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  */

  //SELECT from table
  connection.connect(function (err) {
    connection.query("SELECT * FROM cities", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
});
