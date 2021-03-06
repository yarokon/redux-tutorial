import React from 'react';

import logo from './logo.svg';
import './WelcomeApp.css';

const WelcomeApp = () => (
  <div className="welcome-app">
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
      <h1>Welcome to React</h1>
    </div>
  </div>
);

export default WelcomeApp;
