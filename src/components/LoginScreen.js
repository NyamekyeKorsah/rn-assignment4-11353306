import React, { useState } from 'react';
import iphoneIcon from '../assets/iphone.png';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/facebook.png';

const LoginScreen = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (name && email) {
      onLogin({ name, email });
    }
  };

  return (
    <div className="login-container">
      <h1>Jobizz</h1>
      <div className="welcome-back">
        <span>Welcome Back</span> <span role="img" aria-label="Waving Hand">👋</span>
      </div>
      <p>Let's log in. Apply to jobs!</p>

      <div className="login-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleLogin}>Log in</button>
      </div>

      <div className="social-login">
        <p>or continue with</p>
        <div className="social-icons">
          <span><img src={iphoneIcon} alt="iPhone Logo" /></span>
          <span><img src={googleIcon} alt="Google Logo" /></span>
          <span><img src={facebookIcon} alt="Facebook Logo" /></span>
        </div>
      </div>

      <div className="register-link">
        <p>Haven't an account? <a href="#">Register</a></p>
      </div>
    </div>
  );
};

export default LoginScreen;
