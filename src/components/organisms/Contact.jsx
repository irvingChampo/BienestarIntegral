import React from "react";
import "../../styles/components.css";
import Button from "../atoms/Button";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-content">
        <h2>Contáctanos</h2>
        <p>
          ¿Tienes dudas o deseas colaborar con nosotros? Déjanos un mensaje y te
          responderemos lo antes posible.
        </p>
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Gracias por tu mensaje 😊 (simulación)");
          }}
        >
          <input type="text" placeholder="Nombre completo" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea placeholder="Tu mensaje" rows="4" required></textarea>
          <Button text="Enviar mensaje" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
