import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarMenu}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className={styles.toggleButton}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  );
};

export default Navbar;
