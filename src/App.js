import React,{useState} from "react"; 
//className="btn btn-primary">


function App() {
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter + 1)
  }
  
  function dicrement(){
    setCounter(counter - 1)
  }


  return(
    <div>
      <h1>Schetchic: {counter}</h1>
    <button onClick={increment} className="btn btn-primary"> +++ </button>
    <button onClick={dicrement} className="btn btn-primary"> --- </button>
    </div>
  )
}

export default App;
