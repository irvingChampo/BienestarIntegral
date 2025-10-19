import React from "react";
import "../../styles/components.css";
import FeatureCard from "../molecules/FeatureCard";

function Benefits() {
  const features = [
    {
      title: "Transparencia",
      desc: "Los recursos y donaciones son gestionados de manera clara y verificable.",
    },
    {
      title: "Comunidad",
      desc: "Crea lazos entre personas comprometidas con mejorar su entorno.",
    },
    {
      title: "Impacto Real",
      desc: "Cada acción cuenta: tus aportes llegan a quienes más lo necesitan.",
    },
    {
      title: "Solidaridad",
      desc: "Una plataforma que convierte la empatía en acción colectiva.",
    },
  ];

  return (
    <section id="benefits" className="section benefits">
      <div className="container">
        <h2>Beneficios de usar Bienestar Integral</h2>
        <div className="benefits-grid">
          {features.map((f, i) => (
            <FeatureCard key={i} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
