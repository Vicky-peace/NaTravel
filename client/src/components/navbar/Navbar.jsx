import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navContainer">
        <span className='logo'>NaTravel</span>
        <div className="navItems">
          <button className="navButton">Sign in</button>
          <button className="navButton">Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar