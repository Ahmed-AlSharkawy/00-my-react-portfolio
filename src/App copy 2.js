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
        <section className='single-card-container'>
          <div className='title'>
            <h4>Comfy Sloth Storhouse</h4>
            <div className='underline'></div>
          </div>

          <article className='card single-card'>
            <img
              src='https://d33wubrfki0l68.cloudfront.net/6142946ad90d663f67da0257/screenshot_2021-09-16-00-51-36-0000.png'
              alt='Comfy Sloth Storhouse'
            />
            {/* info level github_url netlify_url teqs */}
            <div className='info-container zero-margin'>
              <p className='single-card-text'>
                <span className='strong'>App Details : </span>This is an
                e-commerce application which using react framework along with
                react icons library, styled components, and react router dom. It
                is also using formspree tool for receiving emails from users,
                auth0 for managing authentications and login processes, stripe
                for payment functionality, axios for posting to the server, and
                netlify cli functions to communicate with stripe. The app was
                created within vscode environment and git and github tools, and
                was deployed to netlify service.
              </p>
              <p className='single-card-text'>
                <span className='strong'>Level : </span>large
              </p>
              <p className='single-card-text'>
                <span className='strong'>Teqs used : </span>'react',
                'react-hooks', 'react-icons', 'react-router-dom',
                'styled-components', 'vscode', 'git', 'github', 'netlify',
                'formspree', 'auth0', 'stripe', 'axios', 'netlify-cli',
              </p>

              <div className='btn-container'>
                <button type='button' className='card-btn'>
                  Github Repository
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
            </div>
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
