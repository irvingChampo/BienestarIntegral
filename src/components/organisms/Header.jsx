import React from "react";
import "../../styles/components.css";
import logo from "../../assets/images/logo.png";
import Button from "../atoms/Button";

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo-section">
          <img src={logo} alt="Bienestar Integral logo" className="logo" />
          <h2 className="logo-text">Bienestar Integral</h2>
        </div>
        <nav className="nav">
          <a href="#about">Sobre</a>
          <a href="#roles">Roles</a>
          <a href="#benefits">Beneficios</a>
          <a href="#contact">Contacto</a>
        </nav>
        <a href="#about">
        <Button text="Conoce más" />
        </a>
      </div>
    </header>
  );
}

export default Header;
