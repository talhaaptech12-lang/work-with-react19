
import { useState } from 'react';
import './App.css'



function App() {
  const [val, setval]=useState("")

  return (
    <>
<input type="text" value={val} onChange={(event)=>{setval(event.target.value)}} placeholder='Enter your text'/>
<h1>{val}</h1>
<button onClick={()=>{setval("")}}>clear text</button>
    </>
  )
}

 

export default App;

