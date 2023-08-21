import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import SocialMediaLinks from '../../components/SocialMediaLinks/SocialMediaLinks'
import "./Contact.css"

function Contact() {
  return (
    <div className='contact-page'>
      <div className="contact-form-container">
      <ContactForm />
      </div>
      <div className="contact-social-media-container">
          <SocialMediaLinks />
      </div>
    </div>
  )
}

export default Contact