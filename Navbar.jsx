import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("isLoggedIn"); // logout
    navigate("/");
  }

  return (
    <nav className="navbar">
      <h3 className="logo">Online Registry</h3>

      <ul className="nav-links">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
          {/* 🔥 ADD THIS */}
        <li><Link to="/admin">Admin Panel</Link></li>
        <li>
          <Link to="/new-registration">New Registration</Link>
        </li>

        <li onClick={handleLogout} style={{ cursor: "pointer" }}>
          Logout
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
