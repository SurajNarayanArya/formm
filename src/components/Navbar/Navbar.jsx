import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'


const Navbar = () => {
  return (
    <nav>
      

      <Link to='/'><h1>Logo</h1></Link>
      <Link to='/profile'><button>Profiles</button></Link>
      
    </nav>
  )
}

export default Navbar
