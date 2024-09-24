import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img1 from './images/Ellipse 2.png';
import img2 from './images/Ellipse 3.png';
import img3 from './images/Ellipse 4.png';
import img4 from './images/Ellipse 5.png';
import './Forgotpass.css'
import * as Yup from 'yup';
import { useFormik } from 'formik';

export default function Forgotpass() {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const notifySuccess = () =>
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

  const notifyError = (message) =>
    toast.error(message, {
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
    if (!email.trim()) {
      notifyError('Email field cannot be empty. Please enter a valid email address.'); 
      return;
    }

    const newdata = { email: email };

    fetch('https://wallyt.com/forgotpass', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(newdata),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        notifySuccess();  
        setEmailSent(true); 
      })
      .catch((err) => {
        notifyError('Something went wrong, please try again.');
        console.error('Error:', err.message);
      });
  };

  return (
    <div className="page-container">
      {/* Forgot Password Form */}
      <div className="forgot-password-container">
        <h2 className="forgot-password-header">Forgot Password?</h2>

        <div className="forgot-password-form">
          <label htmlFor="email" className="forgot-password-label">Email</label>
          <input
            type="email"
            id="email"
            className="forgot-password-input"
            placeholder="Write your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small className="forgot-password-instruction">
            Password reset instructions will be sent to your registered email address.
          </small>

          <button className="forgot-password-submit" onClick={handleForgotPassword}>
            Submit
          </button>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-content">
        <div className="circle-image large-circle">
          <img src={img1} alt="Large Testimonial" />
        </div>
        <div className="circle-image medium-circle">
          <img src={img2} alt="Medium Testimonial" />
        </div>
        <div className="circle-image small-circle" style={{marginBottom:'20%'}}>
          <img src={img3} alt="Small Testimonial" />
        </div>
        <div className="circle-image extra-small-circle">
          <img src={img4} alt="Extra Small Testimonial" />
        </div>

        <div className="testimonial-box">
          <p>
            This website helped me check reviews for items I bought before having any regrets.
          </p>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <span>Tania, Gadget enthusiast</span>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
}
