import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import img from '../components/images/logo-86.png'; // Assuming the image is in the right path

const Header = () => {
  const hardcodedNotifications = [
    {
      id: 1,
      name: 'Abagael Luth',
      action: 'deleted Volley against violence',
      time: '2 min ago',
      avatar: 'https://via.placeholder.com/30',
      read: false,
    },
    {
      id: 2,
      name: 'Lucille Pena',
      action: 'commented on file Guest list',
      time: '25 min ago',
      avatar: 'https://via.placeholder.com/30',
      read: false,
    },
  ];

  const [notifications, setNotifications] = useState(hardcodedNotifications);
  const location = useLocation(); // To track current path

  useEffect(() => {
    fetch(`https://wallyt.com/notifications/user/{userId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to get notifications');
        }
        return res.json();
      })
      .then((data) => {
        setNotifications(data);
      })
      .catch((error) => {
        console.error('Error fetching notifications:', error);
        setNotifications(hardcodedNotifications);
      });
  }, []);

  const handleMarkAsRead = (id) => {
    fetch(`https://wallyt.com/notifications/mark-as-read/${id}`, {
      method: 'POST',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to mark notification as read');
        }
        setNotifications((prevNotifications) =>
          prevNotifications.filter((notification) => notification.id !== id)
        );
      })
      .catch((error) => {
        console.error('Error marking notification as read:', error);
      });
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo and Branding */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={img}
            alt="Reveyou Logo"
            style={{ height: 40, marginRight: 10 }} // Adjust as necessary
          />
          <span style={{ color: 'black', fontSize: 30, fontFamily: 'Poppins', fontWeight: 700 }}>
            Reveyou
          </span>
        </Link>

        {/* Toggler for mobile view */}
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

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/')}`} to="/" style={{ fontSize: '17.71px', color: isActive('/') ? '#377BF7' : '#474545' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/categories')}`} to="/categories" style={{ fontSize: '17.71px', color: isActive('/categories') ? '#377BF7' : '#474545' }}>
                Category
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/review')}`} to="/review" style={{ fontSize: '17.71px', color: isActive('/review') ? '#377BF7' : '#474545' }}>
                Review
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/about')}`} to="/about" style={{ fontSize: '17.71px', color: isActive('/about') ? '#377BF7' : '#474545' }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/Contact')}`} to="/contact" style={{ fontSize: '17.71px', color: isActive('/contact') ? '#377BF7' : '#474545' }}>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Login and Register buttons */}
          <div className="d-flex align-items-center gap-3">
            <div style={{ display: 'flex' }}>
              <div style={{ borderRadius: 30, display: 'flex' }}>
                <Link
                  style={{
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 14,
                    paddingBottom: 14,
                    background: '#377BF7',
                    borderRadius: 30,
                    color: 'white',
                    fontSize: 15,
                    fontFamily: 'Inter',
                    fontWeight: '600',
                    letterSpacing: 0.07,
                    textAlign: 'center',
                    textDecoration: 'none',
                  }}
                  to="/login"
                >
                  Login
                </Link>
              </div>
            </div>

            <div style={{ display: 'flex' }}>
              <div style={{ borderRadius: 30, display: 'flex' }}>
                <Link
                  style={{
                    paddingLeft: 17,
                    paddingRight: 16,
                    paddingTop: 14,
                    paddingBottom: 14,
                    borderRadius: 30,
                    border: '1px #377BF7 solid',
                    color: '#3B82F6',
                    fontSize: 15,
                    fontFamily: 'Inter',
                    fontWeight: '600',
                    letterSpacing: 0.07,
                    textAlign: 'center',
                    textDecoration: 'none',
                  }}
                  to="/register"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
