import ContactForm from "../components/ContactForm";
import SocialMediaConnections from "../components/SocialMediaConnections";
import Lottie from "lottie-react";
import postBox from "../Assets/lottie/message/post-box.json";
import { useRef } from "react";


function Contact() {
  const lottieRef = useRef(null);

  return (
    <div className="contact-page">
      <ContactForm />
      <Lottie
            animationData={postBox}
            loop={true}
            lottieRef={lottieRef}
            onComplete={() => {
              // lottieRef.current.goToAndPlay(100, false);
              lottieRef.current.setSpeed(0.2);
            }}
        className="post-box-lottie"
          />
      <SocialMediaConnections />
    </div>
  );
}

export default Contact;
