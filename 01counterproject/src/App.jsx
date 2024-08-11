import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // console.log("count is ",count);
  function addCount(){
    setCount(count + 1);
    console.log("count is ",count);
  }
  function removeCount(){
    setCount(count - 1);
    console.log("count is ",count);
  }
  return (
    <>
  <div className="App">
    <h1>Count = {count}</h1>
    <button onClick={addCount}>Add</button>
    <button onClick={removeCount}>Remove</button>
  </div>
    </>
  )
}

export default App
