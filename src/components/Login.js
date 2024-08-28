import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css'; // Import the custom CSS file
import { Link } from 'react-router-dom';

const About = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleLogin = () => {
    const data = {
      email: email,
      password: password,
    };
    console.log('Data to be sent:', data);

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + 'YOUR_BEARER_TOKEN' // Replace with your actual bearer token
      },
      body: JSON.stringify(data),
    })
      .then(res => {
        console.log('Response status:', res.status);
        console.log('Response headers:', res.headers);

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        console.log('Response data:', JSON.stringify(data));
      })
      .catch(err => {
        console.error('Error:', err.message);
      });
  };

  return (
    <div className="container mt-0 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-xl-10">
          <div className="carde p-5 bigger-card" style={{ background: 'linear-gradient(135deg, #f5af1993, #f1271175)' }}>
            <h3 className="mb-4 text-center" style={{ fontWeight: '900' }}>Login</h3>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-dark w-100 mb-3" onClick={handleLogin}>Continue with Email</button>
            <button className="btn btn-dark w-100">Continue with Facebook</button>
            <button className="btn btn-dark w-100 mt-3 mb-2">Continue with Google</button>
            <Link className='mt-5 pt-2 link-underline link-underline-opacity-0 text-danger fw-bold' to={'/Forgotpass'}>Forgot your password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
