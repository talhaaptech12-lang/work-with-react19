

import { useState } from 'react';
import './App.css'


function App() {
  const [data, setdata]=useState({
  
    Name: "Talha",
    Address:{
      City: "Karachi",
      Country: "Pakistan"

    
  }
})
const handleName=(val)=>{
  data.Name=val
  setdata({...data})
}


const handleCity=(City)=>{
  data.Address.City=City
  console.log(data)
  setdata({...data, Address:{...data.Address,City}})
}
const handleCountry=(Country)=>{
  data.Address.Country=Country
  // console.log(data)
  setdata({...data, Address:{...data.Address,Country}})
}
  return (
    <>
    <input type="text"  onChange={(event)=>handleName(event.target.value)} placeholder='Update your data' />
    <input type="text"  onChange={(event)=>handleCity(event.target.value)} placeholder='Update your data' />
    <input type="text"  onChange={(event)=>handleCountry(event.target.value)} placeholder='Update your data' />
    <h3>Name: {data.Name} </h3>
    <h3>City: {data.Address.City} </h3>
    <h3>Country: {data.Address.Country} </h3>

    

  
    </>
  )
}

 

export default App;

