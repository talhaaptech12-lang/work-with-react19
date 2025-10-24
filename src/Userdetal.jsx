import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router';
export default function Userdetal() {

    const paraDetal=useParams();

  return (
    <div>
        <h1>User details</h1>
        <h2>User Name is : {paraDetal.name}</h2>
        <h3><Link to={"/user"}>Back</Link></h3>
    </div>
  )
}
