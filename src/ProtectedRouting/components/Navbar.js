import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <NavLink to="/" className='nav-link'>Home</NavLink>
        <NavLink to="/blogs" className='nav-link'>Blogs</NavLink>
        <NavLink to="/user" className='nav-link'>User</NavLink>
        <NavLink to="/contact" className='nav-link'>Contact</NavLink>
        
        
        
    </nav>
  )
}

export default Navbar