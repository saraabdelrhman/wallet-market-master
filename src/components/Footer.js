import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Import the custom CSS file

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 320" transform="scale(1, -1)">
          <path fill="#e8ecee" fillOpacity="1"
          d="M0,256L48,240C96,224,192,192,288,160C384,128,480,96,576,101.3C672,107,768,149,864,176C960,203,1056,213,
          1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320
          ,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>About</h5>
            <ul>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/jobs">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/transparency-report">Transparency Report</Link></li>
              <li><Link to="/press">Press</Link></li>
              <li><Link to="/investor-relations">Investor Relations</Link></li>
            </ul>
          </div>
          {/* Community Section */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Community</h5>
            <ul>
              <li><Link to="/trust-reviews">Trust in Reviews</Link></li>
              <li><Link to="/help-center">Help Center</Link></li>
              <li><Link to="/login">Log In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </div>
          {/* Businesses Section */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>For Businesses</h5>
            <ul>
              <li><Link to="/business">Business Solutions</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/pricing">Plans & Pricing</Link></li>
              <li><Link to="/business-login">Business Login</Link></li>
              <li><Link to="/business-blog">Business Blog</Link></li>
            </ul>
          </div>
          {/* Follow Us Section - Icons Only */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <Link to="#"><FontAwesomeIcon icon={faFacebookF} /></Link>
              <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
              <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
              <Link to="#"><FontAwesomeIcon icon={faLinkedin} /></Link>
              <Link to="#"><FontAwesomeIcon icon={faYoutube} /></Link>
            </div>
            <div className="mt-3">
              <label htmlFor="country-select" className="form-label text-white-50">Choose Country</label>
              <select id="country-select" className="form-select">
                <option>United States</option>
                <option>Germany</option>
                <option>Egypt</option>
              </select>
            </div>
          </div>
        </div>
        {/* Legal Section */}
        <div className="row mt-2">
          <div className="col text-center mb-0 pb-0">
            <p className="mb-0">&copy; {currentYear} Wallyt. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
