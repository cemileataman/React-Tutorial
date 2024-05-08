import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [can, setCan] = useState(0);
  const [tuba, setTuba] = useState(0);
  useEffect(() => {
    console.log("İlk kez render edildiğinde çalışır.Daha da çalışmaz.");
  }, []); //component ilk kez çağrıldığında çalışır. rende edildiğinde çalışıyor.dahada çalışmıyor.

  useEffect(() => {
    console.log("Her zaman çalışır.");
  }); //her zaman çalışır.component ilk kez render edildiğde

  useEffect(() => {
    console.log(
      "ilk kez render edildiğinde çalışır.Can değerinde bir değişiklik olduğunda çalışır."
    );
  }, [can]); //component ilk kez çağrildiğinda çalışır.+state ve değişken değerleri değiştiğinde çalışır.

  useEffect(() => {
    console.log(
      "ilk kez render edildiğinde çalışır.Tuba değerinde bir değişiklik olduğunda çalışır."
    );
  }, [tuba]); //component ilk kez çağrildiğinda çalışır.+state ve değişken değerleri değiştiğinde çalışır.

  useEffect(() => {
    console.log(
      "ilk kez render edildiğinde çalışır.Can veya Tuba  değerinde bir değişiklik olduğunda çalışır."
    );
  }, [can, tuba]); //component ilk kez çağrildiğinda çalışır.+state ve değişken değerleri değiştiğinde çalışır.

  return (
    <div className="App">
      <div className="firstDiv">
        <button onClick={() => setCan(can + 1)}>Can ++</button>
        <div>Can: {can}</div>
      </div>
      <div>
        <button onClick={() => setTuba(tuba + 1)}>Tuba ++</button>
        <div>Tuba: {tuba}</div>
      </div>
    </div>
  );
}

export default App;
