import React from "react";
import "../../styles/components.css";
import RoleCard from "../molecules/RoleCard";

function Roles() {
  const roles = [
    {
      title: "Voluntarios",
      desc: "Pueden unirse a diferentes cocinas, apoyar eventos, donar productos o dinero, y compartir su tiempo y habilidades.",
    },
    {
      title: "Dueños de Cocina",
      desc: "Administran los recursos de su cocina, crean eventos, asignan tareas y gestionan a los voluntarios inscritos.",
    },
  ];

  return (
    <section id="roles" className="section roles">
      <div className="container">
        <h2>Los dos pilares de nuestra comunidad</h2>
        <div className="roles-grid">
          {roles.map((r, i) => (
            <RoleCard key={i} title={r.title} desc={r.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Roles;
