import React, { useState } from "react";
import "../../styles/components.css";
import Button from "../atoms/Button";
import { states, municipalities } from "../../data/locations";

function KitchenRegistrationForm({ onBack }) {
  const [selectedState, setSelectedState] = useState("");
  
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    // Opcional: Limpiar el municipio cuando el estado cambia
    // Aquí necesitarías un estado para el formulario completo
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Registro enviado! Revisa la consola para ver los datos (simulación).");
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Datos del formulario:", data);
  };

  return (
    <div className="registration-container">
      <div className="registration-header">
        <h2>Registra tu Cocina Comunitaria</h2>
        <p>Completa los siguientes datos para dar de alta tu espacio en nuestra comunidad.</p>
      </div>
      <form className="registration-form" onSubmit={handleSubmit}>
        {/* SECCIÓN 1: DATOS DEL USUARIO */}
        <fieldset className="form-section">
          <legend>1. Datos del Responsable</legend>
          <input name="names" type="text" placeholder="Nombres" required />
          <input name="first_last_name" type="text" placeholder="Primer Apellido" required />
          <input name="second_last_name" type="text" placeholder="Segundo Apellido" />
          <input name="email" type="email" placeholder="Correo Electrónico" required />
          <input name="password" type="password" placeholder="Contraseña" required />
          <input name="phone_number" type="tel" placeholder="Número de Teléfono" required />
        </fieldset>

        {/* SECCIÓN 2: DATOS DE LA COCINA */}
        <fieldset className="form-section">
          <legend>2. Datos de la Cocina</legend>
          <input name="kitchen_name" type="text" placeholder="Nombre de la cocina" required />
          <textarea name="description" placeholder="Pequeña descripción de la cocina" rows="3" required></textarea>
          <input name="contact_phone" type="tel" placeholder="Teléfono de contacto de la cocina" required />
          <input name="contact_email" type="email" placeholder="Email de contacto de la cocina" required />
        </fieldset>

        {/* SECCIÓN 3: DATOS DE LA UBICACIÓN */}
        <fieldset className="form-section">
          <legend>3. Ubicación</legend>
          <input name="street_address" type="text" placeholder="Dirección (Calle y Número)" required />
          <input name="neighborhood" type="text" placeholder="Barrio o Colonia" required />
          <select name="state_id" value={selectedState} onChange={handleStateChange} required>
            <option value="" disabled>Selecciona un estado</option>
            {states.map(state => (
              <option key={state.id} value={state.id}>{state.name}</option>
            ))}
          </select>
          <select name="municipality_id" disabled={!selectedState} required>
            <option value="" disabled>Selecciona un municipio</option>
            {selectedState && municipalities[selectedState].map(mun => (
              <option key={mun.id} value={mun.id}>{mun.name}</option>
            ))}
          </select>
          <input name="postal_code" type="text" placeholder="Código Postal" required />
        </fieldset>
        
        <div className="form-actions">
           <Button text="Volver" type="secondary" onClick={onBack} />
           <Button text="Registrar mi Cocina" type="primary" />
        </div>
      </form>
    </div>
  );
}

export default KitchenRegistrationForm;