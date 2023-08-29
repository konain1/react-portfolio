
import React from 'react'
import CV from './../../assets/cv.pdf'
function CTA() {
  return (
    <div className='cta'> 
      <a href={CV} className='btn'>Download Resume</a>
      <a href='#contact' className='btn btn-primary'>let Know each Other</a>

      
    </div>
  )
}

export default CTA
