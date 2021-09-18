import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <h4>My React Porfolio</h4>
      <nav className='navbar'>
        <Link to='/' className='card-btn nav-btn'>
          Home
        </Link>
        <Link to='/about' className='card-btn nav-btn'>
          About Me
        </Link>
      </nav>
    </header>
  )
}

export default Header
