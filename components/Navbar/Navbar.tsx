import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.nav}>
      <div className={styles.logo}>NAS</div>

      <nav className={styles.menu}>
        <a>About</a>
        <a>Skills</a>
        <a>Experiences</a>
        <a>Projects</a>
        <button>Contact</button>
      </nav>
    </header>
  );
}