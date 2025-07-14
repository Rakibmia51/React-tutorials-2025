import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <NavLink to="/contact" className='nav-link'>Contact</NavLink>
        <NavLink to="/blogs" className='nav-link'>Blogs</NavLink>
        <NavLink to="/" className='nav-link'>Home</NavLink>
        <NavLink to="/user" className='nav-link'>User</NavLink>
    </nav>
  )
}

export default Navbar