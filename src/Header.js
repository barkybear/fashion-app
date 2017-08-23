import React from 'react';
import NavBar from './NavBar';
import logo from './images/logo-bijenkorf.svg';
import expand from './images/expand_more_icon.svg';
import './css/Header.css';

const Header = ({ onClick }) =>
  <div className="header-container">
    <img className="header-logo" src={logo} alt="de bijenkorf logo" />
    <NavBar />
    <div className="header-title">
      <div className="header-title-top">Make It</div>
      <div className="header-title-bottom">You</div>
    </div>
    <button onClick={onClick}>
      <img className="header-icon" src={expand} alt="expand to see more" />
    </button>
  </div>;

export default Header;
