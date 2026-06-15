import styles from "./Experience.module.css";

const data = [
  {
    date: "Jan 2024 – May 2024",
    title: "Event Staff",
    place: "BETIS Fasilkom UI",
    desc: "Assist lecturer, grading 50+ assignments, and coordinate events."
  },
];

export default function Experience() {
  return (
    <section className={styles.experience}>
      <h3>Experiences</h3>

      <div className={styles.timeline}>
        {data.map((item, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.date}>{item.date}</span>
            <h4>{item.title}</h4>
            <p className={styles.place}>{item.place}</p>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}