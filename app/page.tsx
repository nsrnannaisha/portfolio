"use client";

import { useState } from "react";
import { Inter, JetBrains_Mono, Syne, Tac_One } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const tacOne = Tac_One({ subsets: ["latin"], weight: "400", variable: "--font-tac-one" });

const experiences = [
  {
    date: "January 2024 - May 2024",
    title: "Bimbingan Belajar Gratis (BETIS) Fasilkom UI",
    role: "Event Staff",
    desc:
      "Assist the lecturer during weekly class sessions, act as the primary liaison between lecturers and students, support the grading of 50+ assignments, and assist in the coordination of two course-related events.",
  },
  {
    date: "April 2024 - October 2024",
    title: "Artificial Intelligence Innovation Challenge Partnership Staff",
    role: "COMPFEST 14",
    desc:
      "Plan and execute educational events, including webinars and main programs, by collaborating with cross-functional teams and managing logistics, communication, and documentation for 100+ participants.",
  },
  {
    date: "June 2024 - December 2024",
    title: "Community Service Department Staff",
    role: "Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer",
    desc:
      "Secure and coordinate guest speakers from AI-related industries for national-scale technology events, managing scheduling and briefing communications.",
  },
  {
    date: "January 2026 – June 2026",
    title: "Lecturer Assistant of Integrated Character Building",
    role: "Faculty of Computer Science",
    desc:
      "Organize community service programs focused on technology education for elementary and middle school students, coordinating with external partners and managing logistics for 100+ participants.",
  },
];

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

function DotIcon({ type }: { type: "ig" | "fb" | "yt" }) {
  return (
    <div className={styles.socialIcon}>
      <span className={`${styles.socialGlyph} ${styles[type]}`} />
    </div>
  );
}

export default function Home() {
  const [activeSkillTab, setActiveSkillTab] = useState<(typeof skillTabs)[number]>("Soft Skills");

  return (
    <main className={`${styles.page} ${inter.variable} ${jetBrainsMono.variable} ${syne.variable} ${tacOne.variable}`}>
      <header className={styles.header}>
        <div className={styles.brand}>NAS</div>
        <nav className={styles.nav}>
          <a>About</a>
          <a>Skills</a>
          <a>Experiences</a>
          <a>Projects</a>
        </nav>
        <button className={styles.contactBtn}>Contact</button>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <h1 className={styles.name}>Nisrina Annaisha Sarnadi</h1>
          <p className={styles.subtitle}>Computer Science Undergraduate Student</p>
          <p className={styles.description}>
            Nisrina is an undergraduate Computer Science student with a strong enthusiasm for learning and the
            ability to work independently and in a team. Commit to develop skills through internships,
            collaborative projects, and training opportunities in the information technology industry, especially
            Software Engineering and UI/UX.
          </p>
          <div className={styles.schoolBlock}>
            <p className={styles.school}>Universitas Indonesia</p>
            <p className={styles.faculty}>Faculty of Computer Science | Bachelor of Computer Science</p>
            <p className={styles.year}>2023 - 2027</p>
          </div>
          <p className={styles.scroll}>| Scroll for more</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>Experiences</div>
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

      <section className={styles.skillsSection}>
        <div className={styles.sectionLabel}>Skills</div>
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

      <section className={styles.contactSection}>
        <div className={styles.contactHeader}>
          <div className={styles.contactLabel}>Contact</div>
          <h2>Let’s work together!</h2>
          <p>I’m available for internship as Fullstack Developer, Front/Back End Developer, Web/Mobile Developer</p>
          <a className={styles.email} href="mailto:nisrina.asarnadi@gmail.com">
            nisrina.asarnadi@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
