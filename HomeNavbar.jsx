import { Link } from "react-router-dom";
import "./HomeNavbar.css";

function HomeNavbar() {
  return (
    <nav className="home-navbar">
      <h3 className="brand">Online Registry</h3>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/services">Services</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/Help">Help</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HomeNavbar;
