import styles from "./Projects.module.css";
import pageStyles from "../../app/page.module.css";

const projects = [
  {
    title: "Kalkulator Yudisium (KAYU)",
    tags: ["Django", "Web App"],
    desc: "Preventive yudisium calculator to help students monitor graduation eligibility.",
    thumbClass: styles.projectThumbBlue,
    thumbText: "Dashboard preview",
    links: [{ label: "Live Demo", href: "#" }],
  },
  {
    title: "Sizopi",
    tags: ["Django", "PostgreSQL", "Web App"],
    desc: "Zoo management application.",
    thumbClass: styles.projectThumbGreen,
    thumbText: "Reservation list",
    links: [
      { label: "Live Demo", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "GolekMakanRek",
    tags: ["Django", "Web App", "Mobile App"],
    desc: "Mobile and web food discovery for finding local food recommendations in Surabaya.",
    thumbClass: styles.projectThumbDark,
    thumbText: "App cannot be accessed due to inactive domain",
    links: [{ label: "GitHub", href: "#" }],
  },
  {
    title: "Escape The Wolf",
    tags: ["Godot", "Web Game"],
    desc: "2D platformer tether game where players must run, jump, and survive while escaping from a relentless wolf chasing them.",
    thumbClass: styles.projectThumbForest,
    thumbText: "Escape the Wolf",
    links: [
      { label: "Live Demo", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "Arden's Oath",
    tags: ["Godot", "Web Game"],
    desc: "2D platformer where player must collect items and defeat enemies to complete the levels.",
    thumbClass: styles.projectThumbOrange,
    thumbText: "Arden's Oath",
    links: [
      { label: "Live Demo", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "GerobakGo",
    tags: ["Figma", "Mobile App Prototype"],
    desc: "Prototype design of mobile platform that connects UMKM food vendors and customers.",
    thumbClass: styles.projectThumbBlack,
    thumbText: "Mobile screens",
    links: [{ label: "Live Demo", href: "#" }],
  },
  {
    title: "Tanam.in",
    tags: ["Figma", "Mobile App Prototype"],
    desc: "Prototype design of mobile platform that encourages people to grow plants at home and adopt plants from urban forests.",
    thumbClass: styles.projectThumbBlack,
    thumbText: "Mobile screens",
    links: [{ label: "Live Demo", href: "#" }],
  },
  {
    title: "Lume",
    tags: ["Django", "Web App"],
    desc: "E-Commerce platform for makeup products, enabling users to browse products and make online purchases.",
    thumbClass: styles.projectThumbBlack,
    thumbText: "Mobile screens",
    links: [{ label: "GitHub", href: "#" }],
  },
];

export default function Home() {
  return (
    <section className={pageStyles.section}>
        <div className={pageStyles.sectionLabel}>Projects</div>
        <h2 className={styles.projectsTitle}>My Best Works</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <article className={styles.projectCard} key={project.title}>
              <div className={`${styles.projectThumb} ${project.thumbClass}`}>
                <div className={styles.projectThumbText}>{project.thumbText}</div>
              </div>
              <div className={styles.projectTags}>
                {project.tags.map((tag) => (
                  <span className={styles.projectTag} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className={styles.projectName}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.desc}</p>
              <div className={styles.projectLinks}>
                {project.links.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    );
}