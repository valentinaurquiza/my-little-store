import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-item">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-item">
        <Link to="/catalog">Catalog</Link>
      </div>
      <div className="nav-item">
        <Link to="/about">About us</Link>
      </div>
      <div className="nav-item">
        <Link to="/contact">Contact us</Link>
      </div>
      <div className="cart-item">
        <Link to="/cart">🛒</Link>
      </div>
    </nav>
  );
};

export default NavBar;
