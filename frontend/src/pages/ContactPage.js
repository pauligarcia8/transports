import React from "react";
import "../styles/pages/ContactPage.css";
import { useState } from "react";

const ContactPage = (props) => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    message: "", 
  }

  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState(initialFormData);


  const handleFormDataChange = (e) => { 
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => { 
    e.preventDefault();
    setMessage("");
    setSending(true);
    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    setSending(false);
    setMessage(data.message);
    if (!data.error) {
      setFormData(initialFormData);
    }
  }

  return (
    <main className="contact">
      <div>
        <h2>Quick Contact</h2>
        <form action="/contact" method="post" className="form" onSubmit={handleSubmit}>
          <p>
            <label for="nombre">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleFormDataChange} />
          </p>
          <p>
            <label for="email">Email</label>
            <input type="text" name="email" value={formData.email} onChange={handleFormDataChange} />

          </p>
          <p>
            <label for="telefono">Phone</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleFormDataChange} />

          </p>
          <p>
            <label for="mensaje">Message</label>
            <textarea type="text" name="message" value={formData.message} onChange={handleFormDataChange}></textarea>
          </p>
          <p className="actions">
            <input type="submit" value="Enviar" />
          </p>
        </form>
        {sending && <p>Sending...</p>}
        {message && <p>{message}</p>}
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
