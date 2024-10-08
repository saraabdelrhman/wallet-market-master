import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo-86.png';
import user from './images/profile-2user.png';
import product from './images/sms-tracking.png';
import category from './images/chart-2.png';
import logout from './images/security-safe.png';

const Navigation = () => {
  const [activeItem, setActiveItem] = useState('/');
  const [isVisible, setIsVisible] = useState(true);  // Visibility state

  const toggleSidebar = () => setIsVisible(!isVisible);  // Toggle function

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
      <div
        onClick={toggleSidebar}
        style={{
          position: 'fixed',
          top: 20,
          left: isVisible ? 260 : 20,  // Adjust based on sidebar visibility
          zIndex: 1000,
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          height: '25px',  // Adjust the height as needed
          width: '30px',  // Adjust the width as needed
          padding: '5px',
        }}
      >
        <div
          style={{ background: 'black', height: '3px', width: '100%', borderRadius: '5px' }}
        ></div>
        <div
          style={{ background: 'black', height: '3px', width: '100%', borderRadius: '5px' }}
        ></div>
        <div
          style={{ background: 'black', height: '3px', width: '100%', borderRadius: '5px' }}
        ></div>
      </div>

      <div
        style={{
          width: 250,
          height: '100vh',
          padding: '20px 15px',
          background: '#FBFBFB',
          borderRight: '1px solid #EEEEEE',
          display: isVisible ? 'flex' : 'none',  // Control visibility
          flexDirection: 'column',
          alignItems: 'flex-start',  // Align items to the left
          position: 'fixed',
          top: 0,
          left: 0,
          overflowY: 'auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            width: '100%',
          }}
        >
          <img src={logo} alt="Logo" style={{ width: 45, height: 45 }} />
          <Link to="/" style={{ textDecoration: 'none' }} onClick={() => setActiveItem('/')}>
            <div
              style={{
                color: 'black',
                fontSize: 33,
                fontFamily: 'Poppins',
                fontWeight: '700',
              }}
            >
              Reveyou
            </div>
          </Link>
        </div>

        <div
          style={{
            textAlign: 'center',
            color: '#A5ABB2',
            fontSize: 13.5,
            fontFamily: 'Poppins',
            fontWeight: '700',
            wordWrap: 'break-word',
            marginTop: '30px',
          }}
        >
          DAILY USE
        </div>

        {/* Navigation items */}
        <div style={{ width: '100%', marginTop: '20px' }}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              style={{ textDecoration: 'none', width: '100%' }}
              onClick={() => setActiveItem(item.path)}
            >
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
    </>
  );
};

export default Navigation;
