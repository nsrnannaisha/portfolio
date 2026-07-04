import styles from "./Awards.module.css";
import pageStyles from "../../app/page.module.css";

const awards = [
  {
    category: "Data Science",
    title: "Best Team",
    subtitle: "ISE! Academy: Data Science for Business 2025",
    badge: "Sound Horeg Team",
  },
];

export default function Awards() {
  return (
    <section id="awards" className={pageStyles.section}>
      <div className={pageStyles.sectionLabel}>Awards</div>
      <div className={styles.projectsGrid}>
        {awards.map((award, index) => (
          <article className={styles.projectCard} key={award.title}>
            <div className={`${styles.projectThumb} ${index % 2 === 0 ? styles.projectThumbBlue : styles.projectThumbGreen}`}>
              <div className={styles.projectThumbText}>{award.badge}</div>
            </div>
            <div className={styles.projectTags}>
              <span className={styles.projectTag}>{award.category}</span>
            </div>
            <h3 className={styles.projectName}>{award.title}</h3>
            <p className={styles.projectDesc}>{award.subtitle}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
