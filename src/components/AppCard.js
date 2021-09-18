import React from 'react'
import { Link } from 'react-router-dom'

const AppCard = ({
  id,
  name,
  img,
  info,
  github_url: gUrl,
  netlify_url: nUrl,
}) => {
  return (
    <article className='card'>
      <Link to={`/apps/${id}`}>
        <img src={img} alt={name} />
      </Link>
      <div className='info-container'>
        <p>
          <span className='strong'>Name : </span>
          {name}
        </p>
        <p className='strong'>
          <a
            className='info-link'
            href={gUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            Github Repo
          </a>
        </p>
        <p className='strong'>
          <a
            className='info-link'
            href={nUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            App On Netlify
          </a>
        </p>
      </div>
      <div className='btn-container'>
        <Link to={`/apps/${id}`} className='card-btn'>
          App Details
        </Link>
      </div>
    </article>
  )
}

export default AppCard
