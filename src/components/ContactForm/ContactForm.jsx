import { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { ThemeContext } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import "./ContactForm.css";
import "react-toastify/dist/ReactToastify.css";
import LanguageText from "../LanguageText/LanguageText";

const ContactForm = () => {
  const { darkMode } = useContext(ThemeContext);

  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  const validatePhoneNumber = (inputPhoneNumber) => {
    if (!inputPhoneNumber) {
      return true;
    }
    const phoneRegex = /\+?[0-9\s-()]{6,20}/;
    return phoneRegex.test(inputPhoneNumber);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validatePhoneNumber(phoneNumber)) {
      toast.error("Invalid phone number.");
      return;
    }

    emailjs
      .sendForm(
        "service_i5d5iw9",
        "template_6cvemxi",
        form.current,
        "fnTWuW396AnxOfSrg"
      )
      .then((result) => {
        console.log(result.text);
        toast.success("Email sent successfully!");
        clearForm();
      })
      .catch((error) => {
        console.log(error.text);
        toast.error("Error sending email.");
      });
  };

  return (
    <div
      className={darkMode ? "div-dark contact-form" : "div-light contact-form"}
    >
      <ToastContainer />
      <div className="form-title">
        <h2 className={darkMode ? "dark-text " : "light-text "}>
          <LanguageText
            englishText={<>Contact Me!</>}
            polishText={<>Skontaktuj się ze mną!</>}
          />
        </h2>
        <p className={darkMode ? "dark-text " : "light-text "}>
          <LanguageText
            englishText={
              <> Please fill out the form below to get in touch with me.</>
            }
            polishText={
              <>
                Proszę wypełnić poniższy formularz, aby się ze mną skontaktować.
              </>
            }
          />
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact-form-fields">
        <div className="form-name">
          <label
            htmlFor="text"
            className={darkMode ? "dark-text cf-label" : "light-text cf-label"}
          >
            <LanguageText englishText={<>Name:</>} polishText={<>Imię</>} />
          </label>
          <input
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-email">
          <label
            htmlFor="email"
            className={darkMode ? "dark-text cf-label" : "light-text cf-label"}
          >
            Email:
          </label>
          <input
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-phone">
          <label
            htmlFor="number"
            className={darkMode ? "dark-text cf-label" : "light-text cf-label"}
          >
            <LanguageText
              englishText={<>Phone Number (Optional):</>}
              polishText={<>Numer telefonu (opcjonalnie)</>}
            />
          </label>
          <input
            type="text"
            name="user_phone_number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-message">
          <label
            htmlFor="message"
            className={darkMode ? "dark-text cf-label" : "light-text cf-label"}
          >
            <LanguageText
              englishText={<>Message:</>}
              polishText={<>Wiadomość:</>}
            />
          </label>
          <textarea
            name="message"
            cols="30"
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="text-field"
          />
        </div>
        <div className="form-btns">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className={
              darkMode
                ? "dark-text dark-btn cf-btn"
                : "light-text  light-btn cf-btn"
            }
          >
            <LanguageText englishText={<>Send</>} polishText={<>Wyślij</>} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={clearForm}
            type="button"
            className={
              darkMode
                ? "dark-text dark-btn-two cf-btn"
                : "light-text light-btn-two cf-btn"
            }
          >
            <LanguageText englishText={<>Clear</>} polishText={<>Wyczyść</>} />
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
