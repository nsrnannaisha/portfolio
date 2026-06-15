import styles from './Hero.module.css';

function Hero() {
  return (
    <main className={styles.hero}>
      <section className={styles.content}>
        <p className={styles.kicker}>Portfolio</p>
        <h1 className={styles.title}>A clean, focused personal site.</h1>
        <p className={styles.description}>
          The homepage is now wired with a valid React component export so Next.js can render it
          without tripping over a default/named import mismatch.
        </p>
      </section>
    </main>
  );
}

export default Hero;
export { Hero };
