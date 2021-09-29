import React from 'react'
import { Link } from 'react-router-dom'
import { SiGmail } from 'react-icons/si'
import { FaMobileAlt, FaWhatsapp } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { Title } from '../components'
import myimg from '../assets/myimg.jpg'

const AboutMe = () => {
  return (
    <section>
      <Title title='AHMED EL SHARKAWY' />
      <h4 className='title margin-top'>WEB DEVELOPER</h4>
      <h4 className='title margin-top'>
        <Link to='/' style={{ color: 'var(--clr-palette-tan' }}>
          My React Portfolio
        </Link>
      </h4>

      <article className='cv-container'>
        <img src={myimg} alt='MyPicture' className='cv-img small-device' />

        <div className='technical-container'>
          <h5>Who am I</h5>

          <p>
            I am a man with a tremendous passion of computer science, in fact
            it's face that talks to computers, which is generally known as
            'programming', the old fashion one.
          </p>
          <p>
            I am a self-learner and I’ve really learned so many programming
            technologies and computer science aspects, until I became the good
            programmer who even if he doesn't know every thimg, he can learn any
            thing.
          </p>
          <p>
            In a breif word, I think as a programmer, learn as a programmer, act
            as a programmer, and live as a programmer.
          </p>
          <h5>Skills and Technologies</h5>

          <ul>
            <li>Algorithms Design, Data Structures and Design Paradigms</li>
            <li>Dynamic Programming, Greedy Algorithms and Graph Theory</li>
            <li>Object Oriented Programming and Functional Programming</li>
            <li>Clean Code Concepts and Internal and External Code Quality</li>
            <li>Software Design, Quality and Maintenance</li>
            <li>
              Java – Java EE - JavaScript – HTML – CSS - ASP.Net – C# - VB.Net –
              VB6 – Clipper – Assembly – XML – JSON
            </li>
            <li>
              Apache Tomcat – JPA – JSP – Mavin – SpringBoot – Hibernate –
              React.js – Node.js – Express.js – jQuery - Bootstrap
            </li>
            <li>My SQL – Oracle – MongoDB</li>
            <li>
              Git – Github – Netlify - Netlify-Cli - Heroku - Contentful -
              Airtable - Strapi - Stripe - Auth0 ...etc
            </li>
          </ul>
          <h5>Education</h5>

          <ul>
            <li className='strong'>
              July 2019
              <br />
              Faculty of Letters and Human Sciences, Morocco
            </li>
            <p>M.A degree in Islamic Studies</p>
            <li className='strong'>
              June 2009
              <br />
              Faculty of Sharia and Law, Egypt
            </li>
            <p>Bachelor of Sharia and Law</p>
          </ul>
          <h5>Courses and Certificates</h5>

          <ul>
            <li className='strong'>
              March 2010
              <br />
              Hi-Q Academy, Egypt
            </li>
            <p>
              MCTS Web Development
              <br />
              Duration: 6 Months
              <br />
              <a
                className='color-tan'
                href='https://mcp.microsoft.com/anonymous/transcript/validate'
                target='_blank'
                rel='noopener noreferrer'
              >
                MCTS Link
              </a>
              <br />
              Transcript ID: 894649
              <br />
              Access Code: ShadowKnight
            </p>
            <li className='strong'>
              December 2008
              <br />
              Arab group for computer, Egypt
            </li>
            <p>
              Developing windows and web pages Duration: 12 Months
              <br />
              Degree: Very Good
            </p>
          </ul>
        </div>

        {/* <hr className='small-device' /> */}

        <div className='personal-container'>
          <img src={myimg} alt='MyPicture' className='cv-img big-device' />
          <div className='personal-info'>
            <div>
              <span className='strong'>Contact</span>
              <p>
                <SiGmail className='social-icon' /> fmt.a.sharkawy@gmail.com
                <br />
                <FaMobileAlt className='social-icon' /> +20 1159463152
                <br />
                <FaWhatsapp className='social-icon' /> +212 629276545
                <br />
                <MdLocationOn className='social-icon' /> Tanta, Egypt
              </p>
            </div>

            <div>
              <span className='strong'>Personal Skills</span>
              <p>
                Analytical
                <br />
                Motivated
                <br />
                Self-learning
                <br />
                Flexible and dependable
                <br />
                Collaborative, Respectful
              </p>
            </div>

            <div>
              <span className='strong'>Languages</span>
              <p>
                Arabic: Mother tongue
                <br />
                English: Good
              </p>
            </div>

            <div>
              <span className='strong'>Hobbies</span>
              <p>
                Programming
                <br />
                Reading, Writing
                <br />
                Walking, Driving
                <br />
                Social Media
              </p>
            </div>

            <a
              className='card-btn cv-btn'
              href='https://drive.google.com/file/d/1Ysc869aBX2V5ILr-Xe5Li0-Koww4srKW/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              Download My CV
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}
export default AboutMe
