import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold s-1" to="/">Wallyt</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
