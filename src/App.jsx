

import {useState } from 'react';
import './App.css'
import AddUser from '../AddUser';
import Display from '../Display';


function App() {
const [users, setUsers]=useState([])
const [user, setUser]= useState("")
const input=document.getElementById("far")
const [Haleema, setHaleema]=useState("")


const Userhandler=()=>{
  setUsers([...users, user])
  input.value= ""
}
const Total = users.length;
const NewUser= users[users.length-1];
const unique= [...new Set(users)].length;

  return (
    <>

    <h2>derived state uses</h2>
    <h3>Total Users: {Total}</h3>
    <h3>New User: {NewUser}</h3>
    <h3>Unique User: {unique}</h3>
  <input id="far" onChange={(event)=>setUser(event.target.value)} type="text" placeholder='Enter user Name'/>
  <button onClick={Userhandler}>Click to  Add users</button>
  {
    users.map((item,index)=>(
      <h4 key={index}>{item}</h4>
    ))
  }
  <AddUser setHaleema={setHaleema}/>
  <Display haleema={Haleema}/>
    </>
  )
}

 

export default App;

