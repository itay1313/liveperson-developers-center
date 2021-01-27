import React from "react";
import prismicLogo from "../images/liveperson-header.svg";

const Footer = () => (
  <footer className="flex justify-center align-center">
    <a
      href="https://prismic.io"
      target="_blank"
      rel="noopener noreferrer"
      className="flex"
    >
      <img className="footer-logo" src={prismicLogo} alt="Prismic logo" />
    </a>
  </footer>
);

export default Footer;
