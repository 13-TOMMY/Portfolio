import React, { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { ThemeContext } from "../../context/ThemeContext";
import "./ContactForm.css";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

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
    const phoneRegex = /^\+?\d{1,3}?[-.\s]?\d{10}$/;
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
        <h2>Contact Me!</h2>
        <p>Please fill out the form below to get in touch with me.</p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact-form-fields">
        <div className="form-name">
          <label
            htmlFor="text"
            className={darkMode ? "dark-text cf-label" : "light-text cf-label"}
          >
            Name
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
            Email
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
            Phone Number (Optional)
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
            Message
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
          <input
            type="submit"
            value="Send"
            className={darkMode ? "dark-text" : "light-text"}
          />
          <button
            type="button"
            onClick={clearForm}
            className={darkMode ? "dark-text" : "light-text"}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
