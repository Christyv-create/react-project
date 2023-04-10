import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    //  code to  send the form data to a server or API
  }

  const handleCloseClick = () => {
    setShowForm(false);
  };

  return (
    <div className="contact-container">
      <p> Contact us if you are interested in our private on-leash dog walking service.  We will get to know you and your dog's needs, then set up an account for you so that you can login and book your dog's walks. There is no charge for an account
        and you will only be billed for any walks your dog goes on.   </p>
      <p> If you are a dog walker and are interested in working with us, please reach out and let us know why you want to work with us!
          We are always looking for enthusiastic dog walkers.
      </p>
      <button onClick={() => setShowForm(true)}>Contact Us</button>
      {showForm && (
        <div className="form-container">
          <button className='close-button' onClick={handleCloseClick}>Close</button>
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
        </div>
      )}
    </div>
  );
}

export default Contact;
