import {useState,useEffect} from 'react';
import './App.css';

function App() {

useEffect(()=>{

},[])

useEffect(()=>{
  
})
useEffect(()=>{
  
},)


  const [can,setCan] =useState(0);
  const [tuba,setTuba] =useState(0);
  return <div className="App">
<div className='firstDiv'>
  <button onClick={()=>setCan(can+1)}>Can ++</button>
  <div>Can: {can}</div>
</div>
<div>
  <button onClick={()=>setTuba(tuba +1)}>Tuba ++</button>
  <div>Tuba: {tuba}</div>
</div>


  </div>;
}

export default App;
