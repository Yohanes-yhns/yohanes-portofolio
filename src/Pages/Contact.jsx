import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import styles from "./Contact.module.css";

const Contact = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <section className={styles.contactSection}>
        <h2 className={styles.heading}>Let's Connect</h2>
        <p className={styles.subtext}>
          I'm open to freelance opportunitiesa and full-time job. I would be very happy if I get the opportunity to build and develop something together.
        </p>

        <form
          action="mailto:yohanes.mail1102@gmail.com"
          method="POST"
          encType="text/plain"
          className={styles.contactForm}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={styles.inputField}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className={styles.inputField}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className={styles.textArea}
          />
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>

        <div className={styles.socialLinks}>
          <p>Or find me here:</p>
          <a
            href="https://github.com/Yohanes-yhns"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yohanes-tjoa-96149b319/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            LinkedIn
          </a>
          <a href="mailto:yohanes.mail1102@gmail.com" className={styles.socialLink}>
            Email Me
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
