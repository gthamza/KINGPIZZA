import { Link } from "react-router-dom";
import { useCart } from "../pages/CardContext"; // Import Cart Context
import logo from "../assets/logo.svg";
import cart from "../assets/cart.png";
import "../components/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const { cartCount } = useCart(); // Get cart count from context

  return (
    <div className="nav-container sticky-top">
      <Link className="nav-link" to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            HOME
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/menu">
            MENU
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/about">
            ABOUT
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
        </li>
      </ul>

      <div className="cart-container">
        <Link to="/cart" className="cart-link">
          <img src={cart} alt="cart" className="cart-logo" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
