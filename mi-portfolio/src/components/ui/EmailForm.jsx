import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './EmailForm.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("xyknqgwe");
  
  if (state.succeeded) {
      return <p className="mensaje-exito">¡Gracias por escribirnos! Mensaje enviado.</p>;
  }
  
  return (
    <form onSubmit={handleSubmit} className="formulario-contacto">
      <div className="grupo-input">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="grupo-input">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required rows="4" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button type="submit" disabled={state.submitting} className="btn-enviar">
        {state.submitting ? 'Enviando...' : 'Submit'}
      </button>
    </form>
  );
}

export function EmailForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pantalla-completa">
      
      <button className="btn-abrir" onClick={() => setIsOpen(true)}>
        Abrir Formulario de Contacto
      </button>

      {isOpen && (
        <div className="overlay">
          <div className="dialog-caja">
            <h2>Contáctanos</h2>
            <p>Envíanos un mensaje directo a nuestro correo.</p>
            
            <ContactForm />
            
            <button className="btn-cerrar" onClick={() => setIsOpen(false)}>
              Cerrar Dialog
            </button>
          </div>
        </div>
      )}

    </div>
  );
}