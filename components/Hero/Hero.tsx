import styles from "./Hero.module.css";
import Image from "next/image";

import linkedinIcon from "../../img/linkedin.png";
import githubIcon from "../../img/github.png";
import mailIcon from "../../img/mail.png";
import profilePhoto from "../../img/Pas Foto_Nisrina Annaisha Sarnadi.jpeg";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nisrinaannaishasarnadi/",
    icon: linkedinIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/nsrnannaisha",
    icon: githubIcon,
  },
  {
    label: "Email",
    href: "mailto:nisrina.asarnadi@gmail.com",
    icon: mailIcon,
  },
];

export default function Hero() {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.heroCopy}>
        <h1 className={styles.name}>Nisrina Annaisha Sarnadi</h1>
        <p className={styles.subtitle}>Computer Science Undergraduate Student</p>
        <p className={styles.description}>
          Nisrina is an undergraduate Computer Science student with a strong enthusiasm for learning and
          the ability to work independently and in a team. Commit to develop skills through internships,
          collaborative projects, and training opportunities in the information technology industry,
          especially Software Engineering and UI/UX.
        </p>
        <div className={styles.schoolBlock}>
          <p className={styles.school}>Universitas Indonesia</p>
          <p className={styles.faculty}>Faculty of Computer Science | Bachelor of Computer Science</p>
          <p className={styles.year}>2023 - 2027</p>
          <div className={styles.socialLinks} aria-label="Social links">
            {socialLinks.map((link) => {
              const openExternally = link.href.startsWith("http") || link.href.startsWith("mailto:");

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={openExternally ? "_blank" : undefined}
                  rel={openExternally ? "noreferrer noopener" : undefined}
                  className={styles.socialLink}
                  aria-label={link.label}
                >
                  <Image
                    src={link.icon}
                    alt=""
                    width={14}
                    height={14}
                    className={styles.socialIconImage}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.heroVisual}>
        <div className={styles.cardShadow}></div>
        <div className={styles.photoPlaceholder}>
          <Image
            src={profilePhoto}
            alt="Nisrina Annaisha Sarnadi"
            fill
            style={{ objectFit: 'cover', borderRadius: '10px' }}
          />
        </div>
      </div>
    </section>
  );
}