import React from "react";
import '../styles/pages/ContactPage.css';

const ContactPage = (props) => {
  return (
    <main className="contact">
      <div>
        <h2>Contacto Rápido</h2>
        <form action="" method="" className="form">
          <p>
            <label for="nombre">Nombre</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="email">Email</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="telefono">Telefono</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="mensaje">Mensaje</label>
            <textarea type="text" name=""></textarea>
          </p>
          <p className="actions">
            <input type="submit" value="Enviar" />
          </p>
        </form>
      </div>
      <div className="data">
        <h2>Otras vias de comunicación</h2>
        <p>
          También puede contactarse con nosotros usando uno de los siguientes
          medios
        </p>
        <ul>
          <li>Teléfono: 43242388</li>
          <li>Email: contacto@transportex.com.ar</li>
          <li>Facebook:</li>
          <li>Twitter:</li>
          <li>Skype:</li>
        </ul>
      </div>
    </main>
  );
};

export default ContactPage;
