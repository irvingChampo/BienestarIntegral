import React from "react";
import "../../styles/components.css";
import Button from "../atoms/Button";
import heroImage from "../../assets/images/logo.png";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Optimiza tu cocina comunitaria y maximiza tu impacto</h1>
          <p>
            Bienestar Integral es la plataforma todo-en-uno que conecta voluntarios, gestiona recursos y transparenta finanzas para fortalecer tu comunidad.
          </p>
          <div className="hero-buttons">
            <a href="#unete">
              <Button text="Únete ahora y sé parte del cambio" />
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