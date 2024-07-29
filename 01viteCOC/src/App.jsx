
import './App.css'

function App() {

  const counter = 15;
  
  const count = ()=>{
    counter+1;
  }

  return (
    <>
     <h1>counter Value ---</h1>
     <button onClick={count}>
      count+1
     </button>
     <p>
      {counter}
     </p>
     <button>
      count-1
     </button>

    </>
  )
}

export default App
