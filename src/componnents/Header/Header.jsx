import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg'

const Header = () => {
  return (
  <nav className="navbar">
  <div className="navbar-start lg:pl-12 lg:text-2xl">
 <img src={logo} alt="logo" />
  </div>
  <div className="gap-4 lg:text-2xl lg:pr-10 text-white">
    <a href="/order">Order</a>
    <a href="/orderreview">Order Review</a>
    <a href="/manageinventory">Manage Inventory</a>
    <a href="/login">Login</a>
  </div>
</nav>
  
  );
};

export default Header;