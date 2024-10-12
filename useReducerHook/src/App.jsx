
// useReducer Hook : 

import React, { useReducer, useState } from 'react'
import './index.css'

const reducer =(state , action) =>{
  switch(action.type){
    case "INCREMENT":{
      return{count:state.count+1 , showText:state.showText}
    }

    case "toggleShowText":{
      return{count:state.count, showText:!state.showText}
    }
  }
}

const App = () => {
  // const[count , setCount]=useState(0);
  // const[name , setName]=useState('true')

  const [state , dispatch] = useReducer(reducer,{count:0 , showText:true})
  
  return (
<>
<div className='App'>
      <h1 >Count: {state.count}</h1>
      <h1>Increment</h1>
      <button onClick={()=>{
        dispatch({type:"INCREMENT"})
        dispatch({type:"toggleShowText"})
      }}
      >+</button>
      
      {state.showText &&<p>Shrikant</p>}

</div>
  
</>
  )
}

export default App
