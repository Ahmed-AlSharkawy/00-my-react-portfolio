import React from 'react'
import { useParams } from 'react-router'
import AppData from '../AppData'
import { Title } from '../components'

const SingleApp = () => {
  const { id } = useParams()

  const {
    name,
    img,
    info,
    level,
    github_url: gUrl,
    netlify_url: nUrl,
    teqs,
  } = AppData.find((item) => item.id === parseInt(id))

  return (
    <section className='single-card-container'>
      <Title titel={name} />
      <article className='card single-card'>
        <img src={img} alt={name} />

        {/* info level github_url netlify_url teqs */}
        <div className='info-container zero-margin'>
          <p className='single-card-text'>
            <span className='strong'>App Details : </span>
            {info}
          </p>
          <p className='single-card-text'>
            <span className='strong'>Level : </span>
            {level}
          </p>
          <p className='single-card-text'>
            <span className='strong'>Teqs used : </span>
            {teqs.map((teq, index) => {
              return <span key={index}>{teq}, </span>
            })}
          </p>

          <div className='btn-container'>
            <a
              href={gUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='card-btn'
            >
              Github Repository
            </a>

            <a
              href={nUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='card-btn'
            >
              App On Netlify
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}

export default SingleApp
