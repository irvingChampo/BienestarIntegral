import React from "react";
import "../../styles/components.css";

function RoleCard({ title, desc }) {
  return (
    <div className="role-card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default RoleCard;
