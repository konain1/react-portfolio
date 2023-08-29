
import React from 'react'

import {AiFillHome} from 'react-icons/ai'
import {FaUserGraduate} from 'react-icons/fa'

import {BiSolidBook} from 'react-icons/bi'

import {RiServiceFill} from 'react-icons/ri'

import {AiFillMessage} from 'react-icons/ai'

import { useState } from 'react'
import './nav.css'
function Nav() {

  const [activeNav,setActiveNav] = useState('#')
  return (
   <nav>
    <a href='#' onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ' '}> <AiFillHome/> </a>

    <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ' '}  > <FaUserGraduate/> </a>

    <a href='#experience'  onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ' '} > <BiSolidBook/> </a>

    <a href='#services'  onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ' '}  > <RiServiceFill/> </a>

    <a href='#contact'  onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ' '} > <AiFillMessage/> </a>

   
   </nav>
  )
}

export default Nav
