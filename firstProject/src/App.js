import React from "react";
import "./App.css";

function App() {
  const nameSurname = "Cemile Ataman";
  const students = 43000;
  const dogruMU = false;
  const date = "date";
  const url = "https://picsum.photos/250/250";
  return (
    // <div>
    //   <h1>İsim Soyisim : {nameSurname}</h1>
    //   <p> Öğrenci Sayısı : {students}</p>
    //   <input type="text"/>
    // {dogruMU ? <p>Öğrenci Sayısı </p> : <p>Kurs Sayısı</p> }

    // <input type={date}/>
    // <img src ={url} alt=""/>
    // </div>
    <div
      style={{
        width: "250px",
        height: "250px",
        backgroundColor: "blue",
        fontSize: "30px",
      }}
    ></div>
  );
}

export default App;
