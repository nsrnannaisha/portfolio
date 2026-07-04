import styles from "./Skills.module.css";
import pageStyles from "../../app/page.module.css";
import { useState } from "react";

const skillTabs = ["Hard Skills", "Soft Skills", "Languages", "IT Related"] as const;

const skillContent: Record<
  (typeof skillTabs)[number],
  { groups: { label: string; accent?: string }[] }
> = {
  "Hard Skills": {
    groups: [
      { label: "Programming Languages" },
      { label: "Database" },
      { label: "Microsoft Word" },
      { label: "Microsoft Excel" },
      { label: "Microsoft Powerpoint" },
    ],
  },
  "Soft Skills": {
    groups: [
      { label: "Communication" },
      { label: "Problem Solving" },
      { label: "Teamwork" },
      { label: "Time Management" },
      { label: "Flexibility" },
    ],
  },
  Languages: {
    groups: [
      { label: "Indonesian", accent: "Native Speaker" },
      { label: "English", accent: "Intermediate" },
    ],
  },
  "IT Related": {
    groups: [
      { label: "Python" },
      { label: "Java" },
      { label: "PostgreSQL" },
      { label: "JavaScript" },
      { label: "Next.js" },
      { label: "Godot" },
      { label: "Docker" },
      { label: "Git" },
      { label: "Postman" },
      { label: "Figma" },
    ],
  },
};


export default function Skills() {
  const [activeSkillTab, setActiveSkillTab] = useState<(typeof skillTabs)[number]>("Hard Skills");

  return (
    <section id="skills" className={pageStyles.section}>
      <div className={pageStyles.sectionLabel}>Skills</div>
      <div className={styles.skillsNav}>
        {skillTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`${styles.skillsTab} ${activeSkillTab === tab ? styles.skillsTabActive : ""}`}
            onClick={() => setActiveSkillTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles.skillsPanel}>
        {skillContent[activeSkillTab].groups.map((item) => (
          <div className={styles.skillCard} key={item.label}>
            <div className={styles.skillCardTitle}>{item.label}</div>
            {item.accent ? <div className={styles.skillCardAccent}>{item.accent}</div> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
