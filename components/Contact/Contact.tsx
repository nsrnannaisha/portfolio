import Image from "next/image";
import styles from "./Contact.module.css";

import linkedinIcon from "../../img/linkedin.png";
import githubIcon from "../../img/github.png";
import mailIcon from "../../img/mail.png";

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

export default function Contact() {
  return (
    <footer id="contact" className={styles.contactSection}>
      
      <div className={styles.contactContainer}>
        <div className={styles.contactTop}>
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
        <div className={styles.contactHeader}>
          <h2>Let&apos;s work together!</h2>
          <p>I&apos;m available for internship as Software Engineer, Quality Assurance, and System Analyst. Please contact me if you have any opportunities!</p>
          <a className={styles.email} href="mailto:nisrina.asarnadi@gmail.com">
            nisrina.asarnadi@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}