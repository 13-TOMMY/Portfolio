import ContactForm from "../components/ContactForm";
import SocialMediaConnections from "../components/SocialMediaConnections";
import SocialMediaLinks from "../components/SocialMediaLinks";

function Contact() {
  return (
    <div className="contact-page">
      <ContactForm />
      <SocialMediaLinks />
      {/* <SocialMediaConnections/> */}
    </div>
  );
}

export default Contact;
