import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(0)
  // let counter  = 15;

   const addValue = () =>{
    if(counter === 20)
    {
      alert("You have reached the maximum value");

    }
 else{
  counter = counter + 1;
  setCounter(counter);
 }
    
  
   }

   const removeValue = ()=> {
    if (counter === 0)
    {
      alert("You have reached the minimum value");
    }
    else
    {
      setCounter (counter - 1);
    }
   
   }
return (
    
    <div style={{ 
      border: '2px solid purple', 
      borderRadius: '15px', 
      padding: '20px', 
      maxWidth: '500px',
      margin: '0 auto', 
      textAlign: 'center'
    }}>
      <h1>Value Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue} style={{marginBottom:'5px'}}>Add value </button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </div>

  )
  
}

export default App
