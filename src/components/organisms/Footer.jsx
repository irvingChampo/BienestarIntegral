import React from "react";
import "../../styles/components.css";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>© 2025 Bienestar Integral. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a
            href="#"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="social-icon" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="#"
            aria-label="Twitter / X"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
