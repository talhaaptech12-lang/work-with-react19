import React, { useContext } from 'react'
import {SubjectContext} from './context.jsx'
export default function Subject() {
    const Subject=useContext(SubjectContext)
  return (
    <div style={{backgroundColor: "purple", height: "30vh", color:"white"}}>
        <h1>Subject is : {Subject}</h1>
    </div>
  )
}
