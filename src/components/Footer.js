import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 className="text-white-50" style={{fontWeight:'900'}}>About</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">About us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Jobs</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-white text-decoration-none">How Trustpilot works</a></li>
              <li><a href="#" className="text-white text-decoration-none">Transparency Report</a></li>
              <li><a href="#" className="text-white text-decoration-none">Press</a></li>
              <li><a href="#" className="text-white text-decoration-none">Investor Relations</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-white-50">Community</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Trust in reviews</a></li>
              <li><a href="#" className="text-white text-decoration-none">Help Center</a></li>
              <li><a href="#" className="text-white text-decoration-none">Log in</a></li>
              <li><a href="#" className="text-white text-decoration-none">Sign up</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-white-50">Businesses</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Trustpilot Business</a></li>
              <li><a href="#" className="text-white text-decoration-none">Products</a></li>
              <li><a href="#" className="text-white text-decoration-none">Plans & Pricing</a></li>
              <li><a href="#" className="text-white text-decoration-none">Business Login</a></li>
              <li><a href="#" className="text-white text-decoration-none">Blog for Business</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-white-50">Follow us on</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Facebook</a></li>
              <li><a href="#" className="text-white text-decoration-none">Twitter</a></li>
              <li><a href="#" className="text-white text-decoration-none">Instagram</a></li>
              <li><a href="#" className="text-white text-decoration-none">LinkedIn</a></li>
              <li><a href="#" className="text-white text-decoration-none">YouTube</a></li>
            </ul>
            <div className="mt-3">
              <label htmlFor="country-select" className="form-label text-white-50">Choose country</label>
              <select id="country-select" className="form-select">
                <option>United States</option>
                <option>Germany</option>
                <option>Egypt</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#" className="text-white text-decoration-none">Legal</a></li>
              <li className="list-inline-item"><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li className="list-inline-item"><a href="#" className="text-white text-decoration-none">Terms & Conditions</a></li>
              <li className="list-inline-item"><a href="#" className="text-white text-decoration-none">Guidelines for Reviewers</a></li>
              <li className="list-inline-item"><a href="#" className="text-white text-decoration-none">System status</a></li>
              <li className="list-inline-item"><a href="#" className="text-white text-decoration-none">Cookie preferences</a></li>
              <li className="list-inline-item"><a href="#" className="text-white text-decoration-none">Modern Slavery Statement</a></li>
            </ul>
            <p className="text-white-50 mt-3">&copy; {currentYear} Wallyt. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
