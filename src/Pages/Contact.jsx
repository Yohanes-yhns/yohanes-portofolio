import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import styles from "./Contact.module.css";

const Contact = () => {
    const [darkMode, setDarkMode] = useState(false);
    
      useEffect(() => {
        document.body.className = darkMode ? "dark" : "light";
      }, [darkMode]);

    return (
        <>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        </>
    )
}

export default Contact;