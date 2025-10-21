

import { useState } from 'react';
import './App.css'


function App() {
  const [data, setdata]=useState(["talha", "ali", 'farhan'])

const handleName=(name)=>{
data[data.length-1]=name
setdata([...data])
console.log(data)
}

  return (
    <>
    <input type="text"  onChange={(event)=>handleName(event.target.value)} placeholder='Update your data' />
 
{
  data.map((item, index)=>(
<h3 key={index}>{item}</h3>
  ))
}
    

  
    </>
  )
}

 

export default App;

