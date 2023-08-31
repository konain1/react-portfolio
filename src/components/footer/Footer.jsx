import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

function Footer() {
  return (
   <footer>
  <a href='#' className='footer__logo'>Konain7</a>

  <ul className='permalinks'>
  <li><a href='#'>Home</a></li>
  <li><a href='#about'>About</a></li>

  <li><a href='#experience'>Experience</a></li>

  <li><a href='#services'>Services</a></li>

  <li><a href='#portfolio'>Portfolio</a></li>
  {/* <li><a href='#testimonials'>Testimonials</a></li> */}

  <li><a href='#contact'>Contact</a></li>

  </ul>

  <div className='footer__socials'> 
  <a href='https://github.com/konain1 ' target='_blank'><BsGithub /></a>
  <a href='https://www.linkedin.com/in/kaunain1/' target='_blank'><BsLinkedin/></a>

  </div>
  <div className='footer__copyright'>
    <small> &copy; Thank you for Visiting</small>
  </div>
   </footer>
  )
}

export default Footer
