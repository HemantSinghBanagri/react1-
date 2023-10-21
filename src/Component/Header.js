import React from 'react'
import {Link} from 'react-router-dom'
import "../App.css"
const Header = () => {
  return (
    <>
    <nav>
        <div className='header'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        </div>
    </nav>
      
    </>
  )
}

export default Header
