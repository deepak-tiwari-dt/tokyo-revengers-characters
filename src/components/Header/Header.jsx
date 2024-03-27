import Logo from "../../assets/fireworks.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <img src={Logo} alt="logo" className={styles.img} />
      <h1 id={styles.title}>TOKYO REVENGERS</h1>
    </header>
  );
};

export default Header;
