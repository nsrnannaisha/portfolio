import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1>Nisrina Annaisha Sarnadi</h1>
        <h2>Computer Science Undergraduate Student</h2>

        <p>
          Nisrina is an undergraduate Computer Science student with a strong
          enthusiasm for learning and the ability to work independently and in a team.
        </p>

        <div className={styles.education}>
          <strong>Universitas Indonesia</strong>
          <span>Faculty of Computer Science</span>
          <span>2023 – 2027</span>
        </div>
      </div>

      <div className={styles.image}>
        <img src="/profile.png" alt="profile" />
      </div>
    </section>
  );
}