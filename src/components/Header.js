import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

import img from '../components/images/logo-86.png';
import threelines from '../components/images/more-dots-vertical.png';
import person1 from '../components/images/image 6 (1).png';
import person2 from '../components/images/image 6 (2).png';
import notification from '../components/images/notification.png';
import { Dropdown } from 'react-bootstrap';

const Header = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? { color: '#377bf7' }
      : { color: '#474545' };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Function to close the menu
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={img} alt="Reveyou Logo" style={{ height: 40, marginRight: 10 }} />
          <span style={{ color: 'black', fontSize: 30, fontFamily: 'Poppins', fontWeight: 700 }}>
            Reveyou
          </span>
        </Link>

        {/* Navbar Toggler for Responsive Menu */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNavDropdown"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links (conditionally rendered based on menu state) */}
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ms-auto gap-5">
            <li className="nav-item mt-1">
              <Link className="nav mt-2" style={isActive('/categories')} to="/categories" onClick={handleLinkClick}>
                Category
              </Link>
            </li>
            {/* <li className="nav-item mt-1">
              <Link className="nav mt-2" style={isActive('/about')} to="/about" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li className="nav-item mt-1">
              <Link className="nav mt-2" style={isActive('/contact')} to="/contact" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </li> */}

            {/* Language Selector */}
            <li className="nav d-flex align-items-center">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
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
                <option value="German">German</option>
                <option value="Swedish">Swedish</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
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
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span>Notifications</span>
                        <span className="badge bg-primary text-light text-center rounded-circle ms-2">2</span>
                      </div>
                      <div>
                        <div style={{ fontSize: '12px', color: '#0085FF' }} className="d-flex mt-3">
                          Mark all as read
                          <img src={threelines} alt="three dots" />
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

            {/* Login and Register Buttons */}
            <div className="d-flex align-items-center gap-3">
              <Link
                to="/login"
                style={{
                  background: '#377BF7',
                  borderRadius: 30,
                  color: 'white',
                  fontSize: 15,
                  padding: '14px 16px',
                  // fontFamily: 'Inter',
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
                  // fontFamily: 'Inter',
                  fontWeight: '600',
                  letterSpacing: 0.07,
                  textAlign: 'center',
                  textDecoration: 'none',
                }}
              >
                Register
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
