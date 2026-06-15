import styles from "./Skills.module.css";

const skills = [
  "Communication",
  "Problem Solving",
  "Teamwork",
  "Time Management",
  "Flexibility",
];

export default function Skills() {
  return (
    <section className={styles.skills}>
      <h3>Skills</h3>

      <div className={styles.grid}>
        {skills.map(skills=> (
          <div key={skills} className={styles.card}>{skills}</div>
        ))}
      </div>
    </section>
  );
}
