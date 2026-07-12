import styles from "./Experience.module.css";
import pageStyles from "../../app/page.module.css";

const experiences = [
  {
    date: "January 2024 - May 2024",
    title: "Event Staff",
    role: "Bimbingan Belajar Gratis (BETIS) Fasilkom UI",
    desc: "Assist the lecturer during weekly class sessions, act as the primary liaison between lecturers and students, support the grading of 50+ assignments, and assist in the coordination of two course-related events.",
  },
  {
    date: "April 2024 - October 2024",
    title: "Artificial Intelligence Innovation Challenge Partnership Staff",
    role: "COMPFEST 14",
    desc: "Plan and execute educational events, including webinars and main programs, by collaborating with cross-functional teams and managing logistics, communication, and documentation for 100+ participants.",
  },
  {
    date: "June 2024 - December 2024",
    title: "Community Service Department Staff",
    role: "Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer",
    desc: "Secure and coordinate guest speakers from AI-related industries for national-scale technology events, managing scheduling and briefing communications.",
  },
  {
    date: "January 2026 – June 2026",
    title: "Lecturer Assistant of Integrated Character Building",
    role: "Faculty of Computer Science",
    desc: "Organize community service programs focused on technology education for elementary and middle school students, coordinating with external partners and managing logistics for 100+ participants.",
  },
];

export default function Experience() {
  return (
    <section id="experiences" className={pageStyles.section}>
      <div className={pageStyles.sectionLabel}>Experiences</div>
      <div className={styles.timeline}>
        <div className={styles.timelineLine} />
        {experiences.map((item) => (
          <article className={styles.timelineItem} key={item.title}>
            <div className={styles.experienceDate}>{item.date}</div>
            <h2 className={styles.experienceTitle}>{item.title}</h2>
            <div className={styles.experienceRole}>{item.role}</div>
            <p className={styles.experienceDesc}>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}