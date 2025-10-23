import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'
export default function College() {
  return (
    <div className='college' style={{textAlign:"center"}} >
        <h1 style={{textAlign: "center"}}>College Page</h1>
    
        <NavLink className="link" to="department" >Dept</NavLink>
        <NavLink className="link" to="/" >Details</NavLink>
        <NavLink className="link" to="student" >Student</NavLink>
        <Outlet/>

    
    </div>
  )
}
