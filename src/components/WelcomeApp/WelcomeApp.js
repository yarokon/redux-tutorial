import React from 'react';

import logo from './logo.svg';
import './WelcomeApp.css';

const WelcomeApp = () => {
  return (
    <div className="welcome-app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1>Welcome to React with Redux</h1>
      </div>
    </div>
  );
}

export default WelcomeApp;
