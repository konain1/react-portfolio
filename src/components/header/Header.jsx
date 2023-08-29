import React from 'react'
import './header.css'
import CTA from './CTA'

function Header() {
  return (
   <header>

    <div className='container header__container'>

    <h5>Hello i'm</h5>
    <h1>Kaunain Kasab</h1>
    <h5 className='text-light'> Frontend Developer</h5>
    <CTA/>
    </div>
   </header>
  )
}

export default Header
