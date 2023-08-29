
import React from 'react'
import CV from './../../assets/cv.pdf'
function CTA() {
  return (
    <div className='cta'> 
      <a href={CV}>Download Resume</a>
      <a href='#contact'>let Know each Other</a>
    </div>
  )
}

export default CTA
