import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <NavLink to="/contact" className='nav-link'>Contact</NavLink>
        <NavLink to="/blog" className='nav-link'>Blog</NavLink>
        <NavLink to="/" className='nav-link'>Home</NavLink>
    </nav>
  )
}

export default Navbar