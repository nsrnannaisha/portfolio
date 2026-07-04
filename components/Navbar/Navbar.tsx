import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.brand}>NAS</div>
        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="#experiences">Experiences</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#awards">Awards</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className={styles.contactBtn}>
          Contact
        </a>
      </div>
    </header>
  );
}
