import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>NAS</div>
      <nav className={styles.nav}>
        <a>About</a>
        <a>Skills</a>
        <a>Experiences</a>
        <a>Contact</a>
      </nav>
      <button className={styles.contactBtn}>Contact</button>
    </header>
  );
}
