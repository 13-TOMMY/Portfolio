import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import "./Contact.css"

function Contact() {
  return (
    <div className='contact-page'>
      <div className="contact-form-container">
      <ContactForm />
      </div>
      <div className="contact-social-media-container">
          <h5>social media links</h5>
      </div>
    </div>
  )
}

export default Contact