import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Popper.js is bundled
import { FaBell } from 'react-icons/fa'; // Import bell icon

const Header = () => {
  // Initial hardcoded notifications
  const hardcodedNotifications = [
    {
      name: 'Abagael Luth',
      action: 'deleted Volley against violence',
      time: '2 min ago',
      avatar: 'https://via.placeholder.com/30',
    },
    {
      name: 'Lucille Pena',
      action: 'commented on file Guest list',
      time: '25 min ago',
      avatar: 'https://via.placeholder.com/30',
    },
    {
      name: 'Abagael Luth',
      action: 'edited Volley against violence',
      time: '16 October',
      avatar: 'https://via.placeholder.com/30',
    },
    {
      name: 'Sallie Moran',
      action: 'commented on file Guest list',
      time: '12 October',
      avatar: 'https://via.placeholder.com/30',
    },
  ];

  const [notifications, setNotifications] = useState(hardcodedNotifications); 

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
        // Fallback to hardcoded data in case of error
        setNotifications(hardcodedNotifications);
      });
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold s-1" to="/" style={{color:'#f15921', fontSize:'30px'}}>Wallyt</Link>
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
              <div className="dropdown">
                <button className="btn btn-dark position-relative d-flex p-0 pt-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <p>notifications</p>
                  <FaBell size={20} />
                  <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                    <span className="visually-hidden">New notifications</span>
                  </span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end p-3 shadow-lg" style={{ minWidth: '300px' }}>
                  {notifications.map((notification, index) => (
                    <li key={index} className="mb-2">
                      <div className="d-flex align-items-start">
                        <img src={notification.avatar} alt="avatar" className="rounded-circle me-2" style={{ width: '30px', height: '30px' }} />
                        <div>
                          <p className="mb-0 fw-bold">{notification.name}</p>
                          <p className="mb-0 text-muted small">{notification.action}</p>
                          <p className="mb-0 text-muted small">{notification.time}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                  {/* <li>
                    <Link to="/notifications" className="dropdown-item text-center text-primary fw-bold">VIEW ALL</Link>
                  </li> */}
                </ul>
              </div>
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
