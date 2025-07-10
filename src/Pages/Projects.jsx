import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import WelcomeMessage from "../Components/WelcomeCard";
import ProjectCards from "../Components/ProjectCards";
import styles from "./Projects.module.css";

const Projects = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className={styles.welcomeMessage}>
        <WelcomeMessage
          text="Here are projects I've previously developed. Each one represents unique solutions I've built to solve different challenges."
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
        />
      </div>
      <ProjectCards />
      <div className={styles.footer}>© 2025 Yohanes. All rights reserved.</div>
    </>
  );
};

export default Projects;
