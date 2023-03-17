import React from 'react'
import { Link } from 'react-router-dom'
import { SiGmail } from 'react-icons/si'
import { FaMobileAlt, FaWhatsapp } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { Title } from '../components'
import cvImg from '../assets/cv.jpg'

const AboutMe = () => {
  return (
    <section>
      <Title title='AHMED EL SHARKAWY' />
      <h4 className='title margin-top'>WEB DEVELOPER</h4>
      <h4 className='title mb-0 margin-top'>
        <Link to='/' style={{ color: 'var(--clr-palette-tan' }}>
          My React Portfolio
        </Link>
      </h4>
      <h4 className='title mb-0'>
        <Link to='https://ng-recipes.netlify.app/' style={{ color: 'var(--clr-palette-tan' }}>
          My Angular Portfolio
        </Link>
      </h4>

      <h4 className='title mb-0'>
        <Link
          to='https://play.google.com/store/apps/details?id=com.fmt.bookings'
          style={{ color: 'var(--clr-palette-tan' }}
        >
          My Ionic App
        </Link>
      </h4>

      <article className='cv-container'>
        <img src={cvImg} alt='MyPicture' className='cv-img small-device' />

        <div className='technical-container'>
          <h5>Who am I</h5>

          <p>
            I have a fully tremendous passion with programming. I am a self-learner and I’ve really
            learned so many programming technologies and computer science aspects, and I seek to
            take both of my passion and skills to the real life, and to share them with a team that
            has the same passion.
          </p>

          <h5>Last Position</h5>

          <p>
            <strong>FULL STACK WEB DEVELOPER</strong>
            <br />
            At:{' '}
            <a href='https://boti.education/' target='_blank' rel='noopener noreferrer'>
              Boti School Group
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; From: 01/11/2021 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To:
            28/02/2023
          </p>

          <h5>Skills and Technologies</h5>

          <ul>
            <li>Algorithms Design, Data Structures and Design Paradigms</li>
            <li>Dynamic Programming, Greedy Algorithms and Graph Theory</li>
            <li>Object Oriented Programming and Functional Programming</li>
            <li>Clean Code Concepts and Internal and External Code Quality</li>
            <li>Software Design, Quality and Maintenance</li>
            <li>
              PHP - Java – Java EE - JavaScript – HTML – CSS - ASP.Net – C# - VB.Net – VB6 – Clipper
              – Assembly – XML – JSON
            </li>
            <li>
              Laravel - Ionic - TypeScript.js - Angular.js - React.js - Redux – Node.js – Express.js
              – jQuery - Bootstrap - Apache Tomcat – JPA – JSP – Mavin – SpringBoot – Hibernate –
              .Net framework
            </li>
            <li>My SQL – Oracle – MongoDB</li>
            <li>
              Git – Github - Serverless Functions – Netlify - Netlify-Cli - Heroku - Contentful -
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
            <p>Licence of Sharia and Law</p>
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

        <div className='personal-container'>
          <img src={cvImg} alt='MyPicture' className='cv-img big-device' />
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
              href='https://drive.google.com/file/d/1J2KA4ZYijc4Tf2Gb4bX_idJ3TChEEBCo/view?usp=sharing'
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
