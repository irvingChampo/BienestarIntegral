import React from "react";
import "../../styles/components.css";
import Button from "../atoms/Button";
import heroImage from "../../assets/images/logo.png";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Conectando corazones para alimentar comunidades</h1>
          <p>
            Bienestar Integral une voluntarios y cocinas comunitarias para llevar apoyo, alimentos y esperanza a quienes más lo necesitan.
          </p>
          <div className="hero-buttons">
          <a href="#roles">
            <Button text="Soy voluntario" />
          </a>
          <a href="#roles">
            <Button text="Soy dueño de cocina" type="secondary" />
          </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="App Bienestar Integral" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
