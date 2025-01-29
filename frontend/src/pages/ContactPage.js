import React from "react";
import "../styles/pages/ContactPage.css";

const ContactPage = (props) => {
  return (
    <main className="contact">
      <div>
        <h2>Quick Contact</h2>
        <form action="" method="" className="form">
          <p>
            <label for="nombre">Name</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="email">Email</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="telefono">Phone</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="mensaje">Message</label>
            <textarea type="text" name=""></textarea>
          </p>
          <p className="actions">
            <input type="submit" value="Enviar" />
          </p>
        </form>
      </div>
      <div className="data">
        <h2>Other means of communication</h2>
        <p>You can also contact us using one of the following media</p>
        <ul>
          <li>Phone: 43242388</li>
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
