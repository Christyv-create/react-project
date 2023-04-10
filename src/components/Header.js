import React, { useState } from 'react';
import Login from './Login';
import './Header.css';

const Header = ({ title, subtitle }) => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseClick = () => {
    setShowLogin(false);
  };

  return (
    <header className='header'>
      {subtitle && <p>{subtitle}</p>}
      <h2>{title}</h2>
      <button onClick={handleLoginClick}>Log In</button>
      {showLogin && <Login onCloseClick={handleCloseClick} />}
    </header>
  );
};

export default Header;

