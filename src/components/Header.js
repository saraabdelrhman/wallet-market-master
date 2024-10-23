import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import config from '../Config';
import img from '../components/images/logo-86.png';
import threelines from '../components/images/more-dots-vertical.png';
import person1 from '../components/images/image 6 (1).png';
import person2 from '../components/images/image 6 (2).png';
import notificationIcon from '../components/images/notification.png';
import { Dropdown } from 'react-bootstrap';

const Header = ({ language, setLanguage, userId }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? { color: '#377bf7' } : { color: '#474545' };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Fake notifications data
  const fakeNotifications = [
    {
      id: 1,
      userName: 'Edward Curr',
      userImage: person1,
      relatedItem: 'Gerald',
      comment: 'This is a great idea!',
      timeAgo: '1 day ago',
      read: false,
    },
    {
      id: 2,
      userName: 'Maria Hill',
      userImage: person2,
      relatedItem: 'Gerald',
      comment: 'This can help us so much',
      timeAgo: '2 days ago',
      read: false,
    },
  ];

  // Fetch notifications (real API) when component mounts
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        // Show fake notifications first
        setNotifications(fakeNotifications);
        setUnreadCount(fakeNotifications.filter((n) => !n.read).length);

        // Now, fetch the real notifications
        const response = await fetch(`${config.apiUrl}/notifications/user/${userId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });

        if (!response.ok) throw new Error('Failed to fetch notifications');

        const data = await response.json();

        // Replace the fake notifications with real data
        setNotifications(data.notifications);
        setUnreadCount(data.notifications.filter((n) => !n.read).length);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, [userId]);

  // Mark all notifications as read
  const markAllAsRead = async (id) => {
    try {
      // Mark notifications as read in the backend (with id in the URL)
      const response = await fetch(`${config.apiUrl}/notifications/mark-all-as-read/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) throw new Error('Failed to mark notifications as read');

      // Mark all as read locally
      setNotifications((prev) =>
        prev.map((notification) => ({ ...notification, read: true }))
      );
      setUnreadCount(0); // Reset unread count
    } catch (error) {
      console.error('Error marking notifications as read:', error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={img} alt="Reveyou Logo" style={{ height: 40, marginRight: 10 }} />
          <span style={{ color: 'black', fontSize: 30, fontFamily: 'Poppins', fontWeight: 700 }}>
            Gadgetzreview
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

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto gap-5">
            <li className="nav-item mt-1">
              <Link
                className="nav mt-2"
                style={isActive('/categories')}
                to="/categories"
                onClick={handleLinkClick}
              >
                Category
              </Link>
            </li>

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
                    src={notificationIcon}
                    alt="Notification Icon"
                    style={{ cursor: 'pointer', height: '24px', marginRight: '5px' }}
                  />
                  {unreadCount > 0 && (
                    <span className="badge bg-primary text-light rounded-circle">{unreadCount}</span>
                  )}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ width: '380px' }}>
                  <Dropdown.ItemText>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span>Notifications</span>
                        {unreadCount > 0 && (
                          <span className="badge bg-primary text-light text-center rounded-circle ms-2">
                            {unreadCount}
                          </span>
                        )}
                      </div>
                      <div>
                        <button
                          style={{ fontSize: '12px', color: '#0085FF' }}
                          className="d-flex border-0 bg-transparent"
                          onClick={() => markAllAsRead(userId)}  // Pass the user ID (or any other ID) here
                        >
                          <span>Mark all as read</span>
                          <img src={threelines} alt="three dots" />
                        </button>
                      </div>
                    </div>
                  </Dropdown.ItemText>
                  <Dropdown.Divider />

                  {/* Loop through notifications (initially fake, then real if fetched) */}
                  {notifications.map((notification) => (
                    <React.Fragment key={notification.id}>
                      <Dropdown.Item href="#">
                        <div className="d-flex">
                          <img
                            src={notification.userImage} // Use dynamic user image
                            alt={notification.userName}
                            className="rounded-circle"
                            style={{ width: '32px', height: '32px', marginRight: '5px' }}
                          />
                          <div className="ms-2">
                            <strong>{notification.userName}</strong>
                            <div className="text-muted" style={{ color: '#696F8C', fontSize: '13px' }}>
                              Added a comment to
                              <span className="fw-bolder text-dark ms-1">{notification.relatedItem}</span>
                            </div>
                          </div>
                        </div>
                        <p
                          style={{ color: '#696F8C', fontSize: '13px', marginTop: '15px', marginLeft: '50px' }}
                        >
                          {notification.comment}
                        </p>
                        <small className="text-muted ms-5">{notification.timeAgo}</small>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                    </React.Fragment>
                  ))}
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
