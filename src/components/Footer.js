import React from "react";
import prismicLogo from "../images/logo-prismic.svg";

const Footer = () => (
  <footer className="flex">
    <p>
      Proudly published with{" "}
      <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">
        Prismic
      </a>
    </p>
    <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">
      <img className="footer-logo" src={prismicLogo} alt="Prismic logo" />
    </a>
  </footer>
);

export default Footer;
