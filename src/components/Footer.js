import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css'; // Correctly referenced
import { Link } from 'react-router-dom';
import img from '../components/images/logo-86.png'; // Assuming correct path to logo image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo and Address */}
        <div className="footer-logo">
          <Link className="navbar-brand" to="/">
            <img
              src={img}
              alt="Reveyou Logo"
              style={{ height: 40, marginRight: 10 }} 
            />
            <span
              style={{
                color: '#FFF5F5',
                fontSize: 30,
                fontFamily: 'Poppins',
                fontWeight: 700
              }}
            >
              Reveyou
            </span>
          </Link>
          <div className="footer-address" style={{ color: '#9a9a9a', marginTop: '10px' }}>
            McAllister St, German<br />
            081291239323
          </div>
        </div>

        {/* Review Links */}
        <div className="footer-links">
          <h5 style={{ color: '#FFF', fontWeight: 'bold' }}>Review</h5>
          <Link to="/write-review" style={{ color: '#9a9a9a' }}>
            Write a review
          </Link>
        </div>

        {/* Category Links */}
        <div className="footer-links">
          <h5 style={{ color: '#FFF', fontWeight: 'bold' }}>Category</h5>
          <Link to="/category/fashion" style={{ color: '#9a9a9a' }}>Fashion</Link><br />
          <Link to="/category/fashion" style={{ color: '#9a9a9a' }}>Fashion</Link><br />
          <Link to="/category/fashion" style={{ color: '#9a9a9a' }}>Fashion</Link><br />
          <Link to="/category/fashion" style={{ color: '#9a9a9a' }}>Fashion</Link><br />
          <Link to="/category/fashion" style={{ color: '#9a9a9a' }}>Fashion</Link>
        </div>

        {/* Company Links */}
        <div className="footer-links">
          <h5 style={{ color: '#FFF', fontWeight: 'bold' }}>Company</h5>
          <Link to="/about-us" style={{ color: '#9a9a9a' }}>About Us</Link><br />
          <Link to="/contact-us" style={{ color: '#9a9a9a' }}>Contact Us</Link>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social mt-5">
          <FaFacebookF style={{ color: '#fff', margin: '0 10px', cursor: 'pointer' }} />
          <FaInstagram style={{ color: '#fff', margin: '0 10px', cursor: 'pointer' }} />
          <FaTwitter style={{ color: '#fff', margin: '0 10px', cursor: 'pointer' }} />
          <FaYoutube style={{ color: '#fff', margin: '0 10px', cursor: 'pointer' }} />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p style={{ color: '#9a9a9a', textAlign: 'center', margin: 0 }}>
          Copyright © 2024 Reveyou | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
