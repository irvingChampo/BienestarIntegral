import React from "react";
import "../../styles/components.css";

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-content">
        <div className="about-text">
          <h2>¿Qué es Bienestar Integral?</h2>
          <p>
            Es una aplicación que conecta <strong>voluntarios</strong> con{" "}
            <strong>cocinas comunitarias</strong> para fomentar la solidaridad,
            optimizar la gestión de recursos y brindar apoyo a comunidades que
            más lo necesitan.
          </p>
          <p>
            A través de la app, los dueños de cocinas pueden registrar eventos,
            administrar donaciones y asignar tareas a voluntarios según sus
            habilidades, generando un impacto real en la sociedad.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
