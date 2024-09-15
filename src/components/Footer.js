import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css'; // Correctly referenced
import { Link } from 'react-router-dom';
import img from '../components/images/logo-86.png'; // Correct image path assumed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <Link className="navbar-brand" to="/">
            <img
              src={img}
              alt="Reveyou Logo"
              style={{ height: 40, marginRight: 10 }} 
            />
            <span style={{ color: '#FFF5F5', fontSize: 30, fontFamily: 'Poppins', fontWeight: 700 }}>
              Reveyou
            </span>
            <div className="footer-address">
              McAllister St, German<br />
              081291239323
            </div>
          </Link>
        </div>
        <div className="footer-links">
          <a href="#category">Category</a>
          <a href="#product">Product</a>
          <a href="#review">Review</a>
          <a href="#about">About</a>
        </div>
        <div className="footer-social">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
      <div className="footer-bottom">
        Copyright © 2024 Reveyou | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
