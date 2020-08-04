const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors")({ origin: true });
const app = express();

app.use(bodyParser.json());
app.use(cors);

app.listen(3001);

const connection = mysql.createConnection({
  host: "localhost",
  user: "jr",
  password: "",
  database: "sample",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//read
app.get("/users", (req, res) => {
  connection.query("select * from users", (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

//create
app.post("/users/create", (req, res) => {
  const { name, status } = req.body;
  connection.query("insert into users set ?", { name, status }, (error, results) => {
    if (error) throw error;
    connection.query("select * from users", (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });
});

//update
app.put("/users/update", (req, res) => {
  const { id, status } = req.body;
  connection.query(
    "update users set status = ? where id = ?",
    [status, id],
    (error, results) => {
      if (error) throw error;
      connection.query("select * from users", (error, results, fields) => {
        if (error) throw error;
        res.send(results);
      });
    }
  );
});

//delete
app.delete("/users/delete", (req, res) => {
  const { id } = req.body;
  connection.query("delete from users where id = ?", [id], (error, results) => {
    if (error) throw error;
    connection.query("select * from users", (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });
});
