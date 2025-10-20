import React from 'react'

export default function AddUser({setHaleema}) {
  return (
    <div>
        <h1>this is lifting objext</h1>
        <input  onChange={(event)=>setHaleema(event.target.value)} type="text" name="" id="" placeholder='Enter your text' />
    </div>
  )
}
