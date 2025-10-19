import React from "react";
import "../../styles/components.css";
import Button from "../atoms/Button";

function CTASection() {
  return (
    <section className="section cta">
      <div className="container cta-content">
        <h2>Únete a Bienestar Integral</h2>
        <p>
          Sé parte del cambio positivo. Dona, colabora o crea una cocina
          comunitaria para mejorar vidas.
        </p>
        <div className="cta-buttons">
        <a href="#contact">
            <Button text="Unirme como voluntario" />
        </a>
        <a href="#contact">
            <Button text="Registrar mi cocina"/>
        </a>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
