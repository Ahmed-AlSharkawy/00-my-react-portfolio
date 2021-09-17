import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

function App() {
  return (
    <>
      <main className='main-section'>
        <header className='header'>
          <h4>My React Porfolio</h4>
          <nav className='navbar'>
            <button className='card-btn nav-btn'>Home</button>
            <button className='card-btn nav-btn'>About Me</button>
          </nav>
        </header>

        <section className='filters'>
          <div className='all'>
            <button type='btn' className='card-btn'>
              All
            </button>
          </div>
          <div className='rest'>
            <button type='btn' className='card-btn'>
              Large
            </button>
            <button type='btn' className='card-btn'>
              Advanced
            </button>
            <button type='btn' className='card-btn'>
              Intermediate
            </button>
            <button type='btn' className='card-btn'>
              basic
            </button>
          </div>
        </section>

        <div className='title'>
          <h3>Testing Palette</h3>
          <div className='underline'></div>
        </div>

        <section className='card-container'>
          <article className='card'>
            <img
              src='https://d33wubrfki0l68.cloudfront.net/6142946ad90d663f67da0257/screenshot_2021-09-16-00-51-36-0000.png'
              alt='Comfy Sloth Storhouse'
            />
            <div className='info-container'>
              <p>
                <span className='strong'>Name : </span>Comfy Sloth Storhouse
              </p>
              <p>
                <span className='strong'>Level : </span>large
              </p>
            </div>
            <div className='btn-container'>
              <button type='button' className='card-btn'>
                App Details
              </button>
              <a
                href='https://comfy-sloth-react-auth0-stripe.netlify.app'
                target='_blank'
                rel='noopener noreferrer'
                className='card-btn'
              >
                App On Netlify
              </a>
            </div>
          </article>
          <article className='card'>
            <img
              src='https://d33wubrfki0l68.cloudfront.net/612e06ca7895fb00083a9ea0/screenshot_2021-08-31-10-40-36-0000.png'
              alt='Github Users Charts'
            />
            <div className='info-container'>
              <p>
                <span className='strong'>Name : </span>Github Users Charts
              </p>
              <p>
                <span className='strong'>Level : </span>large
              </p>
            </div>
            <div className='btn-container'>
              <button type='button' className='card-btn'>
                App Details
              </button>
              <a
                href='https://githubusers-fusioncharts-auth0-react.netlify.app'
                target='_blank'
                rel='noopener noreferrer'
                className='card-btn'
              >
                App On Netlify
              </a>
            </div>{' '}
          </article>
          <article className='card'>
            <img
              src='https://d33wubrfki0l68.cloudfront.net/6120ab6d16ea33839c13c4bd/screenshot_2021-08-21-07-31-08-0000.png'
              alt='Quiz App'
            />
            <div className='info-container'>
              <p>
                <span className='strong'>Name : </span>Quiz App
              </p>
              <p>
                <span className='strong'>Level : </span>advanced
              </p>
            </div>
            <div className='btn-container'>
              <button type='button' className='card-btn'>
                App Details
              </button>
              <a
                href='https://quiz-opentdb-react-hooks.netlify.app'
                target='_blank'
                rel='noopener noreferrer'
                className='card-btn'
              >
                App On Netlify
              </a>
            </div>
          </article>
          <article className='card'>
            <img
              src='https://d33wubrfki0l68.cloudfront.net/6113ac49aa8480bb6603db38/screenshot_2021-08-11-10-54-58-0000.png'
              alt='Hacker News'
            />
            <div className='info-container'>
              <p>
                <span className='strong'>Name : </span>Hacker News
              </p>
              <p>
                <span className='strong'>Level : </span>advanced
              </p>
            </div>
            <div className='btn-container'>
              <button type='button' className='card-btn'>
                App Details
              </button>
              <a
                href='https://hacker-news-algolia-api-react-hooks.netlify.app'
                target='_blank'
                rel='noopener noreferrer'
                className='card-btn'
              >
                App On Netlify
              </a>
            </div>{' '}
          </article>
        </section>

        <footer className='footer'>
          <h5>
            Follow me on <FaLinkedin className='social-icon' />{' '}
            <FaGithub className='social-icon' />
          </h5>
          <h5>
            Contact me via <SiGmail className='social-icon' />{' '}
            <FaWhatsapp className='social-icon' />
          </h5>
        </footer>
      </main>
    </>
  )
}

export default App
