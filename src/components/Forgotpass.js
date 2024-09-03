import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Forgotpass() {
  const [email, setEmail] = useState('');

  const notify = () =>
    toast.success('Email sent! Please check your email for a link to reset your password.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const handleForgotPassword = () => {
    const newdata = {
      email: email
    };

    fetch('http://localhost:3000/api/forgotpass', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(newdata),
    })
      .then((res) => {
        console.log(res.headers)
        console.log(res.status);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log('data', data);
        notify();  // Show success notification after receiving response
      })
      .catch((err) => {
        console.log('error', err.message);
      });
  };

  return (
    <div className="container mt-0 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-xl-10">
          <div className="carde p-5 bigger-card" style={{ background: 'linear-gradient(135deg, #f5af1993, #f1271175)' }}>
            <h3 className="mb-4 text-center" style={{ fontWeight: '900' }}>Forgot your password!</h3>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button className="btn btn-dark w-100 mb-3" onClick={handleForgotPassword}>Send Email</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
