import React from 'react'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className='footer'>
      <h5>
        Follow me on{' '}
        <a
          href='https://www.linkedin.com/in/fmt-ahmed'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin className='social-icon' />
        </a>{' '}
        <a
          href='https://github.com/Ahmed-AlSharkawy'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='social-icon' />
        </a>
      </h5>
      <h5>
        Contact me via{' '}
        <a
          href='mailto:fmt.a.sharkawy@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SiGmail className='social-icon' />
        </a>{' '}
        <a
          href='https://wa.me/00212629276545'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaWhatsapp className='social-icon' />
        </a>
      </h5>
    </footer>
  )
}

export default Footer
