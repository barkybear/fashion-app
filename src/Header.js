import React from 'react';
import NavBar from './NavBar';
import logo from './images/logo-bijenkorf.svg';
import expand from './images/expand_more_icon.svg';
import './css/Header.css';

const Header = () =>
  <div className="header-container">
    <img className="header-logo" src={logo} alt="de bijenkorf logo" />
    <NavBar />
    <div className="header-title">
      <div className="header-title-top">Make It</div>
      <div className="header-title-bottom">You</div>
    </div>
    <img className="header-icon" src={expand} alt="expand to see more" />
  </div>;

export default Header;
