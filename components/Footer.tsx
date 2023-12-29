import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faGoogle,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

export default function Footer() {
  return (
    <div className="flex items-center justify-center">
      {/*<a*/}
      {/*  className="text-gray-400 text-white hover:text-lightBlue-600 hover:text-primary transition-colors"*/}
      {/*  href="https://github.com/MrSchnitz"*/}
      {/*  target="_blank"*/}
      {/*>*/}
      {/*  <FontAwesomeIcon className="mr-6 text-2xl " icon={faGithub} />*/}
      {/*</a>*/}
      <a
        className="text-gray-400 text-white hover:text-lightBlue-600 hover:text-primary transition-colors"
        href="https://linkedin.com/in/jan-bauer-b21735b5"
        target="_blank"
      >
        <FontAwesomeIcon className="mr-6 text-2xl" icon={faLinkedinIn} />
      </a>
      <a
        className="link text-gray-400 text-white hover:text-lightBlue-600 hover:text-primary transition-colors"
        href="mailto:janbauer.cv@gmail.com"
      >
        <FontAwesomeIcon className="mr-6 text-2xl" icon={faGoogle} />
      </a>
      <a
        className="text-gray-400 text-white hover:text-lightBlue-600 hover:text-primary transition-colors"
        href="https://www.youtube.com/@janbauer9576"
        target="_blank"
      >
        <FontAwesomeIcon className="mr-6 text-2xl" icon={faYoutube} />
      </a>
    </div>
  );
}
