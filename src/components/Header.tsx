import React from 'react';
import logo from '../logo.png';
import './styles.css';

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Logo Crefaz"/> 
    </div>
  ) 
}

export default Header