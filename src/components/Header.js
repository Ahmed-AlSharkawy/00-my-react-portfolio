import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import myimg from '../assets/cv.jpg'

const Header = () => {
  const pathname = useLocation().pathname

  return (
    <header className='header'>
      <img src={myimg} alt='MyPicture' />
      <h4>My React Porfolio</h4>
      <nav className='navbar'>
        <Link
          to='/'
          className={
            pathname === '/' ? 'card-btn nav-btn active' : 'card-btn nav-btn'
          }
        >
          Home
        </Link>
        <Link
          to='/about'
          className={
            pathname === '/about'
              ? 'card-btn nav-btn active'
              : 'card-btn nav-btn'
          }
        >
          About Me
        </Link>
      </nav>
    </header>
  )
}

export default Header
