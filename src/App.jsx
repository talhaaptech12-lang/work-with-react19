import "./App.css";
import { useState } from "react";
function App() {
const [data, setData] = useState({
  name: 'Talha',
  Address:{
    City: 'Karachi',
    Country: 'Pakistan'
  }
})
const handleName=(val)=>{
  data.name=val;
  console.log(data)
  setData({...data})
}
const handlecity=(city)=>{
  data.Address.City=city;
  setData({...data,Address:{...data.Address, city}})
}

  return (
    <div>
      <h2>Name: {data.name}</h2>
      <h2>City: {data.Address.City}</h2>
      <h2>Country: {data.Address.Country}</h2>
      <input type="text" onChange={(event)=>handleName(event.target.value)} placeholder="Update Name" />
      <input type="text" onChange={(event)=>handlecity(event.target.value)} placeholder="Update city" />
      
     
    </div>
  );
}

export default App;
