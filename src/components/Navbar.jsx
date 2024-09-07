import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg";
import cart from "../assets/cart.png";
import '../components/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/Cart.jsx';


function Navbar() {
  return (
    <div className="nav-container sticky-top">
      <Link className='nav-link' to='/Home'>
      <img src={logo} alt='logo' className="logo" />
      </Link>
      <ul className="nav justify-content-center">
        
        <li className="nav-item">
          <Link className="nav-link" to="/">HOME</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/menu">MENU</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/about">ABOUT</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/contact">CONTACT</Link>
        </li>
      </ul>

      <div className="cart-container ">
      <Link to="/cart">
      <img src={cart} alt="cart" className="logo" />
      </Link>

      </div>
    </div>
  );
}

export default Navbar;
