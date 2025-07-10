import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Navbar from "../Components/Navbar";
import PhotoBox from "../Components/PhotoBox";
import WelcomeMessage from "../Components/WelcomeCard";
import Link from "../Components/Link";
import ScrollVelocity from "../Components/ScrollVelocity";
import ShinyText from "../Components/ShinyText";
import ProjectCards from "../Components/ProjectCards";
import CertifiedCard from "../Components/CeritifiedCard";
import Orb from "../Components/Orb";

// SESUDAH
const Home = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  const velocity = 50;
  return (
    <div className={styles.headers}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className={styles.main}>
        <PhotoBox />
        <div className={styles.welcomeMessage}>
          <WelcomeMessage
            text="Hello, Welcome to my portofolio website. Let's build something together."
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
        </div>
      </div>
      <div className={styles.link}>
        <Link />
      </div>
      <div className={styles.velocityWrapper}>
        <div className={styles.velocity}>
          <ScrollVelocity
            texts={["React Bits", "Scroll Down"]}
            velocity={velocity}
            className="custom-scroll-text"
          />
        </div>
      </div>
      <div className={styles.myProjectsSection}>
        <div className={styles.welcomeMessage2}>
          <WelcomeMessage
            text="My Projects"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
        </div>
        <div className={styles.shinyText}>
          <ShinyText
            text="A collection of projects I've built, refined, and still working on. I’ve learned a lot from each one."
            disabled={false}
            speed={3}
          />
        </div>
        <ProjectCards />
      </div>
      <div className={styles.achievements}>
        <div className={styles.achievementsSection}>
          <div className={styles.welcomeMessage3}>
            <WelcomeMessage
              text="Achievements"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
            />
          </div>
          <div className={styles.shinyText}>
            <ShinyText
              text="Explore, Focused and Forever Learning every day."
              disabled={false}
              speed={3}
            />
          </div>
          <CertifiedCard />
        </div>
      </div>
      <div className={styles.welcomeMessage4}>
        <WelcomeMessage
          text="Let's build and develop something together"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
        />
      </div>

      <div style={{ width: "100%", height: "300px", position: "relative" }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      <div className={styles.footer}>© 2025 Yohanes. All rights reserved.</div>
    </div>
  );
};

export default Home;
