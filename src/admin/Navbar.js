import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo-86.png';
import user from './images/profile-2user.png';
import product from './images/sms-tracking.png';
import category from './images/chart-2.png';
import logout from './images/security-safe.png';

const Navigation = () => {
  const [activeItem, setActiveItem] = useState('/');
  const [isVisible, setIsVisible] = useState(false); // Sidebar initially hidden

  const toggleSidebar = () => setIsVisible(!isVisible);

  const handleLinkClick = (path) => {
    setActiveItem(path);
    setIsVisible(false); // Close sidebar when a link is clicked
  };

  const navItems = [
    { path: '/admin/user', label: 'User', img: user },
    { path: '/admin/products', label: 'Product', img: product },
    { path: '/admin/category', label: 'Category', img: category },
    { path: '/admin/review', label: 'Review', img: product },
    { path: '/admin/comment', label: 'Comment', img: product },
    { path: '/admin/report', label: 'Report', img: product },
    { path: '/admin/role', label: 'Role', img: product },
    { path: '/admin/advertisment', label: 'Advertisment', img: category },
    { path: '/admin/logout', label: 'Logout', img: logout },
  ];

  return (
    <>
      {/* Toggle Button (Hamburger Icon or Close Icon) */}
      <div
        onClick={toggleSidebar}
        style={{
          position: 'fixed',
          top: 20,
          left: 20,
          zIndex: 1001, // Ensure it's always above the sidebar
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          height: '30px',
          width: '35px',
          padding: '5px',
        }}
      >
        {/* Change to "X" icon when sidebar is visible */}
        {isVisible ? (
          <div style={{ fontSize: '24px', color: 'black' }}>×</div> // X icon
        ) : (
          <>
            <div
              style={{
                background: 'black',
                height: '3px',
                width: '100%',
                borderRadius: '5px',
              }}
            ></div>
            <div
              style={{
                background: 'black',
                height: '3px',
                width: '100%',
                borderRadius: '5px',
              }}
            ></div>
            <div
              style={{
                background: 'black',
                height: '3px',
                width: '100%',
                borderRadius: '5px',
              }}
            ></div>
          </>
        )}
      </div>

      {/* Sidebar */}
      <div
        style={{
          width: isVisible ? (window.innerWidth < 768 ? '100vw' : '250px') : '0', // 250px on larger screens, full width on mobile
          height: '100vh',
          padding: isVisible ? '20px 15px' : '0',
          background: '#FBFBFB',
          borderRight: '1px solid #EEEEEE',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          position: 'fixed',
          top: 0,
          left: 0,
          overflowY: 'auto',
          transition: 'width 0.3s ease-in-out',
          zIndex: 9999,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%' }}>
          <img src={logo} alt="Logo" style={{ width: 45, height: 45 }} />
          <Link to="/" style={{ textDecoration: 'none' }} onClick={() => handleLinkClick('/')}>
            <div style={{ color: 'black', fontSize: 33, fontFamily: 'Poppins', fontWeight: '700' }}>
              Reveyou
            </div>
          </Link>
        </div>

        <div style={{ textAlign: 'center', color: '#A5ABB2', fontSize: 13.5, fontFamily: 'Poppins', fontWeight: '700', marginTop: '30px' }}>
          DAILY USE
        </div>

        {/* Navigation Items */}
        <div style={{ width: '100%', marginTop: '20px' }}>
          {navItems.map((item) => (
            <Link key={item.label} to={item.path} style={{ textDecoration: 'none', width: '100%' }} onClick={() => handleLinkClick(item.path)}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '10px 15px',
                  margin: '5px 0',
                  borderRadius: 30,
                  background: activeItem === item.path ? '#377bf7' : 'transparent',
                  color: activeItem === item.path ? '#fff' : '#0A090B',
                  fontSize: 18,
                  fontFamily: 'Poppins',
                  fontWeight: '600',
                  width: '100%',
                }}
              >
                <img src={item.img} alt={item.label} style={{ width: 24, height: 24 }} />
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isVisible && (
        <div
          onClick={toggleSidebar}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
            zIndex: 9998, // Behind sidebar
          }}
        ></div>
      )}

      {/* Media Query for Mobile Devices */}
      <style jsx>{`
        @media (max-width: 768px) {
          /* No additional styles needed for mobile */
        }

        @media (min-width: 769px) {
          /* Sidebar width of 250px on larger screens */
          div[style*="width: 100vw"] {
            width: 250px; /* Set to fixed width on larger screens */
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;



