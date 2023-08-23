import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import SocialMediaLinks from "../../components/SocialMediaLinks/SocialMediaLinks";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <ContactForm />
      <SocialMediaLinks />
    </div>
  );
}

export default Contact;
