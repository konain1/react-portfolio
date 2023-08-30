import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'
function Services() {
  return (
    <section id='services'>
     
     <h5>What I Offer</h5>
     <h2>Services</h2>

     <div className='container services__container'>
      <article className='service'>
        <div className='service__head' >
          <h3>UX/UI Design</h3>
        </div>

        <ul className='service__list'>
          <li> <AiOutlineCheck className='service__list-icon'/>
          <p>lorem , ipsum dolar sit amet consectutur elit.</p>

          </li>

          <li> <AiOutlineCheck className='service__list-icon'/>
          <p>lorem , ipsum dolar sit amet consectutur elit.</p>

          </li>
          <li> <AiOutlineCheck className='service__list-icon'/>
          <p>lorem , ipsum dolar sit amet consectutur elit.</p>

          </li>
          <li> <AiOutlineCheck className='service__list-icon'/>
          <p>lorem , ipsum dolar sit amet consectutur elit.</p>

          </li>
          <li> <AiOutlineCheck className='service__list-icon'/>
          <p>lorem , ipsum dolar sit amet consectutur elit.</p>

          </li>
        </ul>
      </article>

      {/* END OF JUX/UI*/}

      <article className='service'>
        <div className='service__head' >
          <h3>FRONTEND DEVELOPMENT</h3>
        </div>

        <ul className='service__list'>
          <li> <AiOutlineCheck className='service__list-icon'/>
          <p>lorem , ipsum dolar sit amet consectutur elit.</p>

          </li>

          <li> <AiOutlineCheck className='service__list-icon'/>
          <p>lorem , ipsum dolar sit amet consectutur elit.</p>

          </li>
          <li> <AiOutlineCheck className='service__list-icon'/>
          <p>lorem , ipsum dolar sit amet consectutur elit.</p>

          </li>
          <li> <AiOutlineCheck className='service__list-icon'/>
          <p>lorem , ipsum dolar sit amet consectutur elit.</p>

          </li>
          <li> <AiOutlineCheck className='service__list-icon'/>
          <p>lorem , ipsum dolar sit amet consectutur elit.</p>

          </li>
          <li> <AiOutlineCheck className='service__list-icon'/>
          <p>lorem , ipsum dolar sit amet consectutur elit.</p>

          </li>
          <li> <AiOutlineCheck className='service__list-icon'/>
          <p>lorem , ipsum dolar sit amet consectutur elit.</p>

          </li>
          
        </ul>
      </article>
      {/* END OF WEBDEVELOPMENT */}


      <article className='service'>
        <div className='service__head' >
          <h3>BACKEND DEVELOPMENT</h3>
        </div>

        <ul className='service__list'>
          <li> <AiOutlineCheck className='service__list-icon'/>
          <p>lorem , ipsum dolar sit amet consectutur elit.</p>

          </li> 
        
          

          <li> <AiOutlineCheck className='service__list-icon'/>
          <p>lorem , ipsum dolar sit amet consectutur elit.</p>

          </li>
          <li> <AiOutlineCheck className='service__list-icon'/>
          <p>lorem , ipsum dolar sit amet consectutur elit.</p>

          </li>
          <li> <AiOutlineCheck className='service__list-icon'/>
          <p>lorem , ipsum dolar sit amet consectutur elit.</p>

          </li>
          <li> <AiOutlineCheck className='service__list-icon'/>
          <p>lorem , ipsum dolar sit amet consectutur elit.</p>

          </li>
        </ul>
      </article>
      {/* END OF BACKEND DEVELOPMENT */}
     </div>
    </section>
  )
}

export default Services
