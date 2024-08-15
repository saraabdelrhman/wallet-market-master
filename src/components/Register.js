import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css'; 

const About = () => {
  return (
    <div className=" mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-xl-10"> 
          <div className="card  p-5 bigger-card"> 
            <h3 className="mb-4 text-center" style={{fontWeight:'900'}}>Register</h3>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password" />
            </div>
            <button className="btn btn-warning w-100 mb-3">Continue with Email</button>
            <button className="btn btn-dark w-100">Continue with Facebook</button>
            <button className="btn btn-warning w-100 mt-3">Continue with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
