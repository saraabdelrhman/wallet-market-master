import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import img from '../components/images/logo-86.png';
import threelines from '../components/images/more-dots-vertical.png';
import person1 from '../components/images/image 6 (1).png';
import person2 from '../components/images/image 6 (2).png';
import language from '../components/images/material-symbols_language (3).png';
import notification from '../components/images/notification.png';
import { Dropdown } from 'react-bootstrap';
import './Header.css'
const Header = () => {
  const location = useLocation();

  // Check if the current path matches the passed path
  const isActive = (path) => {
    return location.pathname === path
      ? { color: '#377bf7' } // Apply active style
      : { color: '#474545' }; // Default style
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={img}
            alt="Reveyou Logo"
            style={{ height: 40, marginRight: 10 }}
          />
          <span style={{ color: 'black', fontSize: 30, fontFamily: 'Poppins', fontWeight: 700 }}>
            Reveyou
          </span>
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
          <ul className="navbar-nav ms-auto gap-5">
            <li className="nav-item mt-1 " >
            <Link className="nav" to="/" style={isActive('/')} >
    Home
</Link>

            </li>
            <li className="nav-item mt-1">
              <Link className="nav" style={isActive('/categories')} to="/categories">
                Category
              </Link>
            </li>
            <li className="nav-item mt-1">
              <Link className="nav" style={isActive('/about')} to="/about">
                About
              </Link>
            </li>
            <li className="nav-item mt-1">
              <Link className="nav" style={isActive('/contact')} to="/contact">
                Contact Us
              </Link>
            </li>

            {/* Language Selector */}
            <li className="nav d-flex align-items-center">
              <select
                id="languageSelect"
                style={{
                  width: 'auto',
                  border: '0',
                  marginRight: '5px',
                  borderRadius: '5px',
                  backgroundColor: 'white',
                }}
              >
                <option value="English">English</option>
                <option value="Sweden">Sweden</option>
                <option value="Français">Français</option>
                <option value="български">български</option>
              </select>
            </li>

            {/* Notification Dropdown */}
            <li className="nav-item d-flex align-items-center">
              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-notification"
                  className="d-flex align-items-center"
                >
                  <img
                    src={notification}
                    alt="Notification Icon"
                    style={{ cursor: 'pointer', height: '24px', marginRight: '5px' }}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ width: '380px' }}>
                  <Dropdown.ItemText>
                    <div className="d-flex justify-content-between align-items-center ">
                      <div>
                        <span>Notifications</span>
                        <span className="badge bg-primary text-light text-center rounded-circle ms-2 m-0">2</span>
                      </div>
                      <div>
                        <div style={{ fontSize: '12px', color: '#0085FF' }} className="d-flex mt-3">
                          Mark all as read
                          <img src={threelines} alt="three dots"></img>
                        </div>
                      </div>
                    </div>
                  </Dropdown.ItemText>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">
                    <div className="d-flex">
                      <img
                        src={person1}
                        alt="Edward Curr"
                        className="rounded-circle"
                        style={{ width: '32px', height: '32px', marginRight: '5px' }}
                      />
                      <div className="ms-2">
                        <strong>Edward Curr</strong>
                        <div className="text-muted" style={{ color: '#696F8C', fontSize: '13px' }}>
                          Added a comment to
                          <span className="fw-bolder text-dark ms-1">Gerald</span>
                        </div>
                      </div>
                    </div>
                    <p style={{ color: '#696F8C', fontSize: '13px', marginTop: '15px', marginLeft: '50px' }}>
                      This is a great idea! 
                    </p>
                    <small className="text-muted ms-5">1 day ago</small>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">
                    <div className="d-flex">
                      <img
                        src={person2}
                        alt="Maria Hill"
                        className="rounded-circle"
                        style={{ width: '32px', height: '32px', marginRight: '10px' }}
                      />
                      <div className="ms-2">
                        <strong>Maria Hill</strong>
                        <div className="text-muted" style={{ color: '#696F8C', fontSize: '13px' }}>
                          Added a comment to
                          <span className="fw-bolder text-dark ms-1">Gerald</span>
                        </div>
                      </div>
                    </div>
                    <p style={{ color: '#696F8C', fontSize: '13px', marginTop: '15px', marginLeft: '50px' }}>
                      This can help us so much
                    </p>
                    <small className="text-muted ms-5">2 days ago</small>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>

          {/* Login and Register Links */}
          <div className="d-flex align-items-center gap-3 ">
            <Link
              to="/login"
              style={{
                background: '#377BF7',
                borderRadius: 30,
                color: 'white',

                fontSize: 15,
                padding: '14px 16px',
                fontFamily: 'Inter',
                fontWeight: '600',
                letterSpacing: 0.07,
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              Login
            </Link>
            <Link
              to="/register"
              style={{
                borderRadius: 30,
                border: '1px #377BF7 solid',
                color: '#3B82F6',
                fontSize: 15,
                padding: '14px 17px',
                fontFamily: 'Inter',
                fontWeight: '600',
                letterSpacing: 0.07,
                textAlign: 'center',
                textDecoration: 'none',
               
              }}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
