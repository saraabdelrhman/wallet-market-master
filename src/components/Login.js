import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css'; // Import the custom CSS file
import { Link } from 'react-router-dom';
import Forgotpass from './Forgotpass';
const About = () => {
  return (
    <div className="container mt-0 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-xl-10"> 
          <div className="carde p-5 bigger-card" style={{ background: 'linear-gradient(135deg, #f5af1993, #f1271175)' }}>
            <h3 className="mb-4 text-center" style={{fontWeight:'900'}}>Login</h3>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password" />
            </div>
            <button className="btn btn-dark w-100 mb-3">Continue with Email</button>
            <button className="btn btn-dark w-100">Continue with Facebook</button>
            <button className="btn btn-dark w-100 mt-3 mb-2">Continue with Google</button>
            <Link className='mt-5 pt-2 link-underline link-underline-opacity-0 text-danger fw-bold' to={'/Forgotpass'}> Forgot your password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
