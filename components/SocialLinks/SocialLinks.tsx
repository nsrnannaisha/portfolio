import Image from "next/image";
import heroStyles from "../Hero/Hero.module.css";

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

export default function SocialLinks() {
  return (
    <div className={heroStyles.socialLinks} aria-hidden={false}>
      {socialLinks.map((link) => {
        const openExternally = link.href.startsWith("http") || link.href.startsWith("mailto:");

        return (
          <a
            key={link.label}
            href={link.href}
            target={openExternally ? "_blank" : undefined}
            rel={openExternally ? "noreferrer noopener" : undefined}
            className={heroStyles.socialLink}
            aria-label={link.label}
          >
            <Image src={link.icon} alt="" width={14} height={14} className={heroStyles.socialIconImage} />
          </a>
        );
      })}
    </div>
  );
}
