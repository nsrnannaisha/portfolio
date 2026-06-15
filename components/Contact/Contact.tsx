import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <footer className={styles.contact}>
      <div>
        <h3>Let’s work together!</h3>
        <p>
          I’m available for internship as Fullstack Developer,
          Front/Back End Developer.
        </p>
        <a href="mailto:nisrina.asarnadi@gmail.com">
          nisrina.asarnadi@gmail.com
        </a>
      </div>

      <form className={styles.form}>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" />
        <button>Send</button>
      </form>
    </footer>
  );
}