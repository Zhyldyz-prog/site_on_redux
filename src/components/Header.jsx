import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner container">
        <div className="logo">
          <div className="logo-icon">❤</div>
          <div className="logo-text">
            <h2>SmartClinic</h2>
            <span>Premium Healthcare</span>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/doctors">Doctors</NavLink>
          <NavLink to="/appointments">Appointments</NavLink>
          <NavLink to="/my-appointments" className="nav-button">
            My Appointments
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
