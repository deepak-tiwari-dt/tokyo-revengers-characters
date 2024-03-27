import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "../Footer/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.container}>
      <div>
        <a href="https://github.com/deepak-tiwari-dt" target="_blank">
          <FontAwesomeIcon icon={faGithub} className={styles.github} />
        </a>
        <a href="https://www.linkedin.com/in/dtiwari21/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className={styles.linkedin} />
        </a>
      </div>
      <p className={styles.copyright}>Copyright &copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;
