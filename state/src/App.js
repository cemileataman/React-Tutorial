import "./App.css";
import { useState } from "react";

function App() { //setvalue value değerini update eder
  const [value, setValue] = useState(1); //value nin baçlangıç değeri useState in içindeki değer
  const handleClick = () => {
    setValue(value+1);
  };
  return (
    <div className="App">
      <button onClick={handleClick}
        // onClick={() => {
        //   console.log("Can");//iki yöntem var.ilk yöntem methoda atama.ikincisi tek satır kodda jsx içerisinde halletme
        // }}
      >
        Kurs Ekle
      </button>
      <div>Kurs Sayısı :{value}</div>
      <div></div>
    </div>
  );
}

export default App;
