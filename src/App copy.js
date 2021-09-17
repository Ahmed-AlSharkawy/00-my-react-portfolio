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
              src='https://d33wubrfki0l68.cloudfront.net/60c7f03046fcb0000764753d/screenshot_2021-06-15-00-12-02-0000.png'
              alt='tesing img'
            />
            <div className='info-container'>
              <p>
                <span className='strong'>Name : </span>First React App - Book
                Store
              </p>
              <p>
                <span className='strong'>Level : </span>Basic
              </p>
            </div>
            <div className='btn-container'>
              <button type='button' className='card-btn'>
                App Details
              </button>
              <a
                href='https://01-first-react-app-bookstore-classes.netlify.app'
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
              src='https://d33wubrfki0l68.cloudfront.net/60c7f03046fcb0000764753d/screenshot_2021-06-15-00-12-02-0000.png'
              alt='tesing img'
            />
            <div className='info-container'>
              <p>
                <span className='strong'>Name : </span>First React App - Book
                Store
              </p>
              <p>
                <span className='strong'>Level : </span>Basic
              </p>
            </div>
            <div className='btn-container'>
              <button type='button' className='card-btn'>
                App Details
              </button>
              <a
                href='https://01-first-react-app-bookstore-classes.netlify.app'
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
              src='https://d33wubrfki0l68.cloudfront.net/60c7f03046fcb0000764753d/screenshot_2021-06-15-00-12-02-0000.png'
              alt='tesing img'
            />
            <div className='info-container'>
              <p>
                <span className='strong'>Name : </span>First React App - Book
                Store
              </p>
              <p>
                <span className='strong'>Level : </span>Basic
              </p>
            </div>
            <div className='btn-container'>
              <button type='button' className='card-btn'>
                App Details
              </button>
              <a
                href='https://01-first-react-app-bookstore-classes.netlify.app'
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
              src='https://d33wubrfki0l68.cloudfront.net/60c7f03046fcb0000764753d/screenshot_2021-06-15-00-12-02-0000.png'
              alt='tesing img'
            />
            <div className='info-container'>
              <p>
                <span className='strong'>Name : </span>First React App - Book
                Store
              </p>
              <p>
                <span className='strong'>Level : </span>Basic
              </p>
            </div>
            <div className='btn-container'>
              <button type='button' className='card-btn'>
                App Details
              </button>
              <a
                href='https://01-first-react-app-bookstore-classes.netlify.app'
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
