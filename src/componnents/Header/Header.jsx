import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <nav className="navbar">
  <div className="lg:pl-12 lg:text-3xl">
 <img src={logo} alt="logo" />
  </div>
  <div className="lg:gap-6 gap-3 lg:text-2xl font-semibold lg:pr-12 text-white">
    <Link to="/">Shop</Link>
    <Link to="/orders">Orders</Link>
    <Link to="/inventory">Inventory</Link>
    <Link to="/login">Login</Link>
  </div>
</nav>
  
  );
};

export default Header;