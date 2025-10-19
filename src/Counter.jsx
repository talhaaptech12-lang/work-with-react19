import React, { useEffect } from 'react'

export default function Counter({Counter, data}) {
useEffect(()=>{
        console.log("mounting phase")
    },[])
  useEffect(()=>{
console.log("updating phase")
  },[Counter])
  
  useEffect(()=>{
    return()=>{
        console.log("unmount phase only")
    }
  },[])
    return (
    
    <div>
        <h2>Counter {Counter} </h2>
        <h2>Data {data} </h2>
    </div>
  )
}
