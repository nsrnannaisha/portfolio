import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.heroCopy}>
        <h1 className={styles.name}>Nisrina Annaisha Sarnadi</h1>
        <p className={styles.subtitle}>Computer Science Undergraduate Student</p>
        <p className={styles.description}>
          Nisrina is an undergraduate Computer Science student with a strong enthusiasm for learning and
          the ability to work independently and in a team. Commit to develop skills through internships,
          collaborative projects, and training opportunities in the information technology industry,
          especially Software Engineering and UI/UX.
        </p>
        <div className={styles.schoolBlock}>
          <p className={styles.school}>Universitas Indonesia</p>
          <p className={styles.faculty}>Faculty of Computer Science | Bachelor of Computer Science</p>
          <p className={styles.year}>2023 - 2027</p>
        </div>
      </div>
    </section>
  );
}