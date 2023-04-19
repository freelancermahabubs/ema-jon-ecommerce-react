import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };
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
        <Link to="/singup">SingUp</Link>
        {user && (
          <small>
            {user.email}
            <button
              className="ml-2 bg-red-600 p-2 rounded-md"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </small>
        )}
      </div>
    </nav>
  );
};

export default Header;
