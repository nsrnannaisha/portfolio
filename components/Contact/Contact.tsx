import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <footer className={styles.contact}>
      <section className={styles.contactSection}>
        <div className={styles.contactHeader}>
          <div className={styles.contactLabel}>Contact</div>
          <h2>Let&apos;s work together!</h2>
          <p>I&apos;m available for internship as Fullstack Developer, Front/Back End Developer, Web/Mobile Developer</p>
          <a className={styles.email} href="mailto:nisrina.asarnadi@gmail.com">
            nisrina.asarnadi@gmail.com
          </a>
        </div>
      </section>
    </footer>
  );
}