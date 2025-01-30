import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faGoogle,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React, { PropsWithChildren } from "react";

const FooterLink = ({
  children,
  href,
  blank,
}: PropsWithChildren<{ href: string; blank?: boolean }>) => {
  return (
    <a
      className="text-neutral-500 dark:text-gray-300 hover:text-neutral-600 dark:hover:text-gray-500 transition-colors"
      href={href}
      target={blank ? "_blank" : undefined}
    >
      {children}
    </a>
  );
};

export default function Footer() {
  return (
    <div className="flex items-center justify-center">
      <FooterLink href="https://linkedin.com/in/jan-bauer-b21735b5" blank>
        <FontAwesomeIcon className="mr-6 text-2xl" icon={faLinkedinIn} />
      </FooterLink>
      <FooterLink href="mailto:janbauer.cv@gmail.com">
        <FontAwesomeIcon className="mr-6 text-2xl" icon={faGoogle} />
      </FooterLink>
      <FooterLink href="https://github.com/MrSchnitz" blank>
        <FontAwesomeIcon className="mr-6 text-2xl " icon={faGithub} />
      </FooterLink>
      <FooterLink href="https://www.youtube.com/@janbauer9576" blank>
        <FontAwesomeIcon className="mr-6 text-2xl" icon={faYoutube} />
      </FooterLink>
    </div>
  );
}
