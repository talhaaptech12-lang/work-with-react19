import React from 'react'

export default function User({Sir, name, daughter}) {
  return (
    <div>
    <button onClick={()=>Sir(name)}>Click me to </button>
    <button onClick={daughter}>Click me to </button>
    
    
    </div>
  )
}
