import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';



function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // this is where I will code to  send the form data to a server or API
  }

  return (
    <div>
     
      <button onClick={() => setShowForm(true)}>Contact Us</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Message:
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
}

export default Contact;

