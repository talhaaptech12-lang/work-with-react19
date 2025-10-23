import React from 'react'
import { Link } from 'react-router'

export default function PageNotFound() {
  return (
    <div style={{textAlign:"center"}}>
        <h1>Page Not Found</h1>
        <h1>Error 404</h1>
        <Link to="/"> Go to Home Page </Link>
    </div>
  )
}
