import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import { FaUser, FaSignInAlt, FaSignOutAlt, FaTachometerAlt, FaShoppingCart } from "react-icons/fa";
import { Badge } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Header.css"; // Custom CSS for styling
import { useCart } from "../../context/cart";
import logo from "../../pages/images/logo.png"; // Ensure the image path is correct

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();

  const handleLogout = () => {
    setAuth({ user: null, token: "" });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <nav className="navbar navbar-expand-lg shadow-sm custom-navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fw-bold d-flex align-items-center">
          <img src={logo} alt="Logo" className="logo" />
         
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>

            {!auth?.user ? (
              <>
                <li className="nav-item">
                  <NavLink to="/registration" className="nav-link">
                    <FaUser className="me-1" /> Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    <FaSignInAlt className="me-1" /> Login
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  {auth?.user?.name}
                </NavLink>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <NavLink
                      to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                      className="dropdown-item"
                    >
                      <FaTachometerAlt className="me-1" /> Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={handleLogout} to="/login" className="dropdown-item">
                      <FaSignOutAlt className="me-1" /> Logout
                    </NavLink>
                  </li>
                </ul>
              </li>
            )}

            <li className="nav-item">
              <NavLink to="/cart" className="nav-link">
                <Badge count={cart?.length} showZero>
                  <FaShoppingCart className="me-1" /> Cart
                </Badge>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
