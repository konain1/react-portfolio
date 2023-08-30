import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

import './experience.css'
function Experience() {
  return (
    <section id='experience'>
    
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className='container experience__container'>
      <div className='experience__frontend '>
        <h3>Frontend Developer</h3>
        <div className='experience__content'>
          <article className='experence__details'>
            <BsPatchCheckFill className='experence__details-icon'/>
          <div>
          <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experence__details'>
            <BsPatchCheckFill  className='experence__details-icon' />
           <div>
           <h4>CSS/SASS</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>
          <article className='experence__details'>
            <BsPatchCheckFill className='experence__details-icon'/>
            <div>
            <h4>Boostrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experence__details'>
            <BsPatchCheckFill className='experence__details-icon'/>
           <div>
           <h4>Tailwind</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>
          <article className='experence__details'>
            <BsPatchCheckFill className='experence__details-icon'/>
          <div>
          <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experence__details'>
            <BsPatchCheckFill className='experence__details-icon'/>
           <div>
           <h4>React</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>
        </div>
      </div>

    {/* end of Frontend  */}

      <div className='experience__Backend'>
        <h3>Others</h3>
        <div className='experience__content'>
          <article className='experence__details'>
            <BsPatchCheckFill  className='experence__details-icon'/>
            <div>
            <h4>Node js</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experence__details'>
            <BsPatchCheckFill className='experence__details-icon' />
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experence__details'>
            <BsPatchCheckFill  className='experence__details-icon'/>
           <div>
           <h4>Linux</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>
          <article className='experence__details'>
            <BsPatchCheckFill  className='experence__details-icon'/>
            <div>
            <h4>Git</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experence__details'>
            <BsPatchCheckFill  className='experence__details-icon'/>
          <div>
          <h4>Java</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experence__details'>
            <BsPatchCheckFill className='experence__details-icon' />
            <div>
            <h4>DSA</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>
      </div>

    </div>



    </section>
  )
}

export default Experience
