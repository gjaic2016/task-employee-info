import "./App.css";
import Axios from "axios";
import React, { useEffect, useState } from "react";

var data = [
  {
    id: 1,
    ime: "Pero",
    prezime: "Peric",
    slika: "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    spol: "M",
    godRod: "1984.01.02.",
    pocetakRada: "2019.01.02.",
    vrstaUgovora: "Odredeno",
    trajanjeUgovora: "120",
    odjel: "HR",
    brojDanaGodOdmora: "20",
    brojSlobodnihDana: "5",
    brojDanaPlacenogDopusta: "10",
  },
  {
    id: 2,
    ime: "Ivo",
    prezime: "Ivic",
    slika: "http://www.sohocapitalmedan.com/images/sohocapitalmedan_06news/1501578764_user.jpg",
    spol: "M",
    godRod: "1989.01.02.",
    pocetakRada: "2022.01.02.",
    vrstaUgovora: "Neodredeno",
    trajanjeUgovora: "0",
    odjel: "DEV",
    brojDanaGodOdmora: "20",
    brojSlobodnihDana: "5",
    brojDanaPlacenogDopusta: "10",
  },

];

function App() {

  // useEffect(() => {
  //   Axios.get("/").then((response) => {
  //     console.log(response.data);
  //     console.log("Fetch employees trough api...");
  //     setEmployees(response.data[0]);
  //   });
  // }, []);

  // const [employees, setEmployees] = useState([]);
  const [value, setValue] = useState([]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div class="container1">
          <label>Odaberi zaposlenika</label>
          <div>
        
            <select value={value} onChange={handleChange} multiple={false}>
              {data.map((option) => (
                <option value={option.ime}>{option.ime} {option.prezime}</option>
              ))}
            </select>
          </div>
        </div>

        <div class="container2">
          <p>Detalji</p>

          <p>Ime: {data[0].ime}</p>
          <p>Prezime: {data[0].prezime}</p>
          <p>Slika: <img src={data[0].slika} alt="avatar" width="200" height="200"></img></p>
          <p>Spol: {data[0].spol} </p>
          <p>Godina rođenja: {data[0].godRod}</p>
          <p>Početak rada: {data[0].pocetakRada} </p>
          <p>Vrsta ugovora: {data[0].vrstaUgovora}</p>
          <p>Trajanje ugovora: {data[0].trajanjeUgovora} </p>
          <p>Odjel: {data[0].odjel} </p>
          <p>Broj dana godišnjeg odmora: {data[0].brojDanaGodOdmora} </p>
          <p>Broj slobodnih dana: {data[0].brojSlobodnihDana} </p>
          <p>Broj dana plaćenog dopusta: {data[0].brojDanaPlacenogDopusta} </p>
        </div>
      </header>
    </div>
  );
}

export default App;
