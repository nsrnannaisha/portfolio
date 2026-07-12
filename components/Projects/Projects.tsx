import styles from "./Projects.module.css";
import pageStyles from "../../app/page.module.css";

import kayuImg from "../../img/kayu.png";
import sizopiImg from "../../img/sizopi.png";
import lumeImg from "../../img/lume.png";
import gerobakgoImg from "../../img/gerobakgo.png";
import escapeImg from "../../img/escapethewolf.png";
import ardensImg from "../../img/ardens_oath.png";
import tanaminImg from "../../img/tanamin.png";
import golekImg from "../../img/golekmakanrek.png";
import portfolioImg from "../../img/portfolio.png";

const projects = [
  {
    title: "Portfolio Website",
    tags: ["Figma", "Web App Prototype"],
    desc: "Prototype design and website for showcasing my projects and skills.",
    img: portfolioImg,
    links: [{ label: "Prototype", href: "https://www.figma.com/proto/QJAZfh4uzFnTF2GhKeVANG/Portfolio?node-id=74-44&t=Y7h8HalyXD8ebFf6-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=74%3A44&show-proto-sidebar=1" }],
  },
  {
    title: "Kalkulator Yudisium (KAYU)",
    tags: ["Django", "Web App"],
    desc: "Preventive yudisium calculator to help students monitor graduation eligibility.",
    img: kayuImg,
    links: [{ label: "Live Demo", href: "https://kayu.ppl.cs.ui.ac.id/" }],
  },
  {
    title: "Sizopi",
    tags: ["Django", "PostgreSQL", "Web App"],
    desc: "Zoo management application.",
    img: sizopiImg,
    links: [
      { label: "Live Demo", href: "https://sizopi-jet.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Sizopi-C6/sizopi" },
    ],
  },
  {
    title: "GolekMakanRek",
    tags: ["Django", "Web App", "Mobile App"],
    desc: "Mobile and web food discovery for finding local food recommendations in Surabaya.",
    img: golekImg,
    warningText: "Web is inactive due to inactive domain",
    links: [{ label: "GitHub", href: "https://github.com/PBP-F10" }],
  },
  {
    title: "Lume",
    tags: ["Django", "Web App"],
    desc: "E-Commerce platform for makeup products, enabling users to browse products and make online purchases.",
    img: lumeImg,
    warningText: "Web is inactive due to inactive domain",
    links: [{ label: "GitHub", href: "https://github.com/PKPL-2025-51/lume-pkpl" }],
  },
  {
    title: "Escape The Wolf",
    tags: ["Godot", "Web Game"],
    desc: "2D platformer tether game where players must run, jump, and survive while escaping from a relentless wolf chasing them.",
    thumbClass: styles.projectThumbForest,
    img: escapeImg,
    links: [
      { label: "Live Demo", href: "https://chellins.itch.io/escape-the-wolf" },
      { label: "GitHub", href: "https://github.com/GD-Cupcake/EscapeTheWolf" },
    ],
  },
  {
    title: "Arden's Oath",
    tags: ["Godot", "Web Game"],
    desc: "2D platformer where player must collect items and defeat enemies to complete the levels.",
    img: ardensImg,
    links: [
      { label: "Live Demo", href: "https://nsrnannaisha.itch.io/ardens-oath" },
      { label: "GitHub", href: "https://github.com/nsrnannaisha/gamejam-gamedev" },
    ],
  },
  {
    title: "GerobakGo",
    tags: ["Figma", "Mobile App Prototype"],
    desc: "Prototype design of mobile platform that connects UMKM food vendors and customers.",
    img: gerobakgoImg,
    links: [{ label: "Live Demo", href: "https://www.figma.com/proto/UNHzQnm1R1seTINqMQVZN8/TK-Sister?node-id=196-203&p=f&t=vueJSHxAzzGob1BI-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=196%3A203&show-proto-sidebar=1" }],
  },
  {
    title: "Tanam.in",
    tags: ["Figma", "Mobile App Prototype"],
    desc: "Prototype design of mobile platform that encourages people to grow plants at home and adopt plants from urban forests.",
    img: tanaminImg,
    links: [{ label: "Live Demo", href: "https://www.figma.com/proto/IJzPbYBQrVFJ7qXmWsMDCt/Tanam.in?node-id=99-73&p=f&t=7cxMMMyzgA0IUA92-1&scaling=scale-down&content-scaling=fixed&page-id=80%3A10&starting-point-node-id=1502%3A1985" }],
  },
];

export default function Home() {
  return (
    <section id="projects" className={pageStyles.section}>
        <div className={pageStyles.sectionLabel}>Projects</div>
        <h2 className={styles.projectsTitle}>My Best Works</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <article className={styles.projectCard} key={project.title}>
              <div className={`${styles.projectThumb} ${project.thumbClass ?? styles.projectThumbDefault}`}>
                {project.img ? (
                  <img
                    src={typeof project.img === "string" ? project.img : project.img.src}
                    alt={project.title}
                    className={styles.projectThumbImg}
                  />
                ) : null}
              </div>
              {project.warningText ? (
                <span className={styles.projectWarning} title={project.warningText}> ⚠︎ </span>
              ) : null}
              <div className={styles.projectTags}>
                {project.tags.map((tag) => (
                  <span className={styles.projectTag} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              {project.warningText ? (
                  <span className={styles.projectWarning} title={project.warningText}> ⚠︎ </span>
                ) : null}
              <h3 className={styles.projectName}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.desc}</p>
              <div className={styles.projectLinks}>
                {project.links.map((link) => (
                  <a key={link.label} href={link.href}>{link.label} ↗ </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    );
}