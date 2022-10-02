const express = require("express");
const mysql = require("mysql");
const app = express();

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employeedb",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Mysql connected...");
});

app.get("/", (req, res) => {
  let sqlSelect = "SELECT * FROM employee";
  db.query(sqlSelect, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.post("/save", (req, res) => {
  db.query(
    "INSERT INTO employee (ime, prezime, slika, spol, godRod, pocetakRada, vrstaUgovora, trajanjeUgovora, odjel, brojDanaGodOdmora, brojSlobodnihDana, brojDanaPlacenogDopusta) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
    [ime, prezime, slika, spol, godRod, pocetakRada, vrstaUgovora, trajanjeUgovora, odjel, brojDanaGodOdmora, brojSlobodnihDana, brojDanaPlacenogDopusta],
    (err, result) => {
      console.log(err);
      
    }
  );
});

app.listen("5000", () => {
  console.log("Server started, port 5000");
});
