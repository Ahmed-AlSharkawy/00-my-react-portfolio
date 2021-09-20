import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-section'>
      <div className='error-card'>
        <h1>404</h1>
        <h3>Page not found...</h3>

        <Link to='/' className='btn card-btn'>
          Back o home
        </Link>
      </div>
    </section>
  )
}

export default Error
