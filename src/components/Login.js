import React from 'react';
import './Login.css';

const Login = ({ onCloseClick }) => {
  return (
    <div className='login-container'>
      <div className='login-content'>
        <h3>Login</h3>
        <form>
          <label>
            Email:
            <input type='email' />
          </label>
          <label>
            Password:
            <input type='password' />
          </label>
          <button type='submit'>Submit</button>
        </form>
        <button className='close-button' onClick={onCloseClick}>Close</button>
      </div>
    </div>
  );
};

export default Login;
