import React, { useState } from 'react'

export default function useToggle(defaultvalue) {
  const[value, setvalue]=useState(defaultvalue)

  function toggleValue(val){
    if( val!= "boolean"){
      setvalue(!value)
    }else{
      console.log("false")
      setvalue(val)
    }
  }
  return [value,toggleValue]
}

