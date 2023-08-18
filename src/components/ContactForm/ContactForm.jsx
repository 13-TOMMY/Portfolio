import React, { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { ThemeContext } from "../../context/ThemeContext";
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
    <div className="contact-form">
      <ToastContainer />
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="text" className={darkMode ? "dark-text" : "light-text"}>
          Name
        </label>
        <input
          type="text"
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label
          htmlFor="email"
          className={darkMode ? "dark-text" : "light-text"}
        >
          Email
        </label>
        <input
          type="email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label
          htmlFor="number"
          className={darkMode ? "dark-text" : "light-text"}
        >
          Phone Number (Optional)
        </label>
        <input
          type="text"
          name="user_phone_number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label
          htmlFor="message"
          className={darkMode ? "dark-text" : "light-text"}
        >
          Message
        </label>
        <textarea
          name="message"
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

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
      </form>
    </div>
  );
};

export default ContactForm;
