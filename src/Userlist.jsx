import React from 'react'
import { Link } from 'react-router'
export default function Userlist() {
    const UserData=[
        {id: 1, name:"Talha"},
        {id: 2, name:"Haleema"},
        {id: 3, name:"Essa"},
        {id: 4, name:"Fahan"}
    ]

  return (
    <div style={{marginLeft:"20px"}}>
        <h2>User List</h2>
        {
            UserData.map((item, index)=>(
                <div key={index}>
                    <h2><Link to={"/user/"+item.name}>{item.name}</Link></h2>
                </div>
            ))
        }
        




    </div>
  )
}
