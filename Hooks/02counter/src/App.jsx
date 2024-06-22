import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //state ko change karne k liye resp. change ko propagate kiya jata hai DOM k andar
  let [counter, setCounter] = useState(15)
    

  function removeValue()
  {
      counter = counter - 1
      if(counter < 0)
        counter = 0
      setCounter(counter)

  }
 

  //  let counter = 5; 
   function addValue()
   {
      counter = counter + 1;
      if(counter > 20)
          counter = 20;
      setCounter(counter)
      setCounter(counter)
      setCounter(counter)
      setCounter(counter)
      setCounter(counter)
   }
  return (
   <>
    <h1>React hooks</h1>
    <h2>Counter value: {counter}</h2>
    <button id="add" onClick={addValue}>Add value</button>
    <button id="remove" onClick={removeValue}>Remove value</button>
   </>
  )
}

export default App
