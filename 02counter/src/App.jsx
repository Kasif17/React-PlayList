
import { useState } from 'react';
import './App.css'

function App() {

  const [counter,setCounter]=useState(0);
  
  const AddValue = ()=>{
    setCounter(counter+1)
  }
  const RemoveValue = ()=>{
    if(counter> 0){
    setCounter(counter-1)
    }
  }

  return (
    <>
     <h1>counter Value ---</h1>
     <button onClick={AddValue}>
      count+1
     </button>
     <p>
      {counter}
     </p>
     <button onClick={RemoveValue}>
      count-1
     </button>

    </>
  )
}

export default App
