import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <footer id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.contactHeader}>
          <div className={styles.contactLabel}>Contact</div>
          <h2>Let&apos;s work together!</h2>
          <p>I&apos;m available for internship as Software Engineer, Quality Assurance, and System Analyst. Please contact me if you have any opportunities!</p>
          <a className={styles.email} href="mailto:nisrina.asarnadi@gmail.com">
            nisrina.asarnadi@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}