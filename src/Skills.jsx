import React, { useState } from 'react'

export default function Skills() {
const [val, setval]= useState([])
const handleSkills=(event)=>{
    if(event.target.checked){
        setval([...val,event.target.value])
    }else{
        setval([...val.filter((item)=>item!=event.target.value)])
    }
}

  return (
    <div>
        <h1>Test your Skills</h1>
        <input onChange={handleSkills} type="Checkbox"  value="php"/>
        <label htmlFor="php">php</label>
        <br />
        <br />
        
        <input onChange={handleSkills} type="Checkbox" value="React" />

        <label htmlFor='React' >React</label>

        <br />
        <br />
        <input onChange={handleSkills} type="Checkbox" value="Mongo"/>
        <label htmlFor="Mongo">Mongo</label>

        <br />
        <br />
        <input onChange={handleSkills} type="Checkbox" value="Java"/>
        <label htmlFor="Java">Java</label>
        <h1>{val.toString()}</h1>

        
        
        
        
        
        </div>
  )
}
