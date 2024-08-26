import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./assets/logo.svg";
import cart from "./assets/cart.svg";
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <div className="nav-container sticky-top">
      <img src={logo} alt='logo' className="logo" />
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/menu">MENU</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">CONTACT</Link>
        </li>
      </ul>
      <div className="cart-container">
        <Link to="/cart">
          <img src={cart} alt="cart" className="logo" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
