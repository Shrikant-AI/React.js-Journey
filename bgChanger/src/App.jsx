import { useState } from "react";

function App(){
const [color , setColor] = useState("olive")

  return(
    <div className=" w-full h-screen duration-200"
      style={{backgroundColor:color}}>
      <div className="fixed bottom-12 flex justify-center 
      inset-x-0 px-2">
        <div  className="flex flex-wrap justify-center gap-3 bg-white text-black shadow-lg px-3 py-2 rounded-3xl">
        <button onClick={()=>{setColor("red")}} className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"red"}}>Red</button>

        <button onClick={()=>{setColor("green")}} className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"Green"}}>Green</button>

        <button onClick={()=>{setColor("blue")}} className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"blue"}}>Blue</button>

        <button onClick={()=>{setColor("black")}} className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"black"}}>Black</button>

        <button onClick={()=>{setColor("Aqua")}} className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"Aqua"}}>Aqua</button>

        <button onClick={()=>{setColor("lightpink")}} className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"lightpink"}}>LightPink</button>
        

        </div>
      </div>
    </div>
  )
}

export default App;