
import React from 'react'
import './contact.css'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from 'emailjs-com'


function Contact() {

  const form  = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_232rtx8', 'template_gm9zpit', form.current, '22xGXTxxpo6SL73mk')

    
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
   <section id='contact'>
   <h5>Get In Touch</h5>
   <h2>Contact Me</h2>
   <div className='container contact__container'>
    <div className='contact__options'>
      <article className='contact__option'>
      <MdOutlineAlternateEmail className='contact__option-icon' />
        <h4>Email</h4>
        <h5>Kaunainkasab@gmail.com</h5>
        {/* <a href='mailto:kaunainkasab@gmail.com' >Send a message </a> */}
        <a href='mailto:kaunainkasab@gmail.com' target='_blank'>Send a message</a>

      </article>

      <article className='contact__option'>
       <BsWhatsapp className='contact__option-icon'/>
        <h4>WhatsApp</h4>
        <h5>(+91) 7250-8599-99</h5>
        {/* <a href='https://api.whatsapp.com/send?phone="+917250859999' >Send a message </a> */}
        <a href='https://wa.me/917250859999' target='_blank'>Send a message</a>

      </article>
    </div>
    {/* End of whatsapp email */}

    <form ref={form} onSubmit={sendEmail}>
      <input type='text' name='name' placeholder='Your full Name' required/>
      <input type='email' name='email' placeholder='Your Email' required />
      <textarea name='message'  rows='7' placeholder='your message' required />
      <button type='submit' className='btn btn-primary'> Send Message</button>
    </form>
   </div>
   </section>
  )
}

export default Contact
