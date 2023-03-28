import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg'

const Header = () => {
  return (
  <nav className="navbar">
  <div className="lg:pl-12 lg:text-3xl">
 <img src={logo} alt="logo" />
  </div>
  <div className="lg:gap-6 gap-3 lg:text-2xl font-semibold lg:pr-12 text-white">
    <a href="/order">Order</a>
    <a href="/orderreview">Order Review</a>
    <a href="/manageinventory">Manage Inventory</a>
    <a href="/login">Login</a>
  </div>
</nav>
  
  );
};

export default Header;