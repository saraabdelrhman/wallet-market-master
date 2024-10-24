import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img1 from './images/Ellipse 2.png';
import img2 from './images/Ellipse 3.png';
import img3 from './images/Ellipse 4.png';
import img4 from './images/Ellipse 5.png';
import './Forgotpass.css';
import config from '../Config'; // Assuming the same config file for the API URL

export default function Forgotpass({ content }) {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const notifySuccess = () => {
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
  };

  const notifyError = (message) => {
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
  };

  const handleForgotPassword = () => {
    if (!email.trim()) {
      notifyError('Email field cannot be empty. Please enter a valid email address.');
      return;
    }

    const newdata = { email: email };

    fetch(`${config.apiUrl}/forgot-password`, { 
      method: 'POST',
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
    .then(() => {
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
      <div className="forgot-password-container">
        <h2 className="forgot-password-header pt-5 text-dark">
          {content["forgot-password"] || "Forgot Password"}
        </h2>

        <div className="forgot-password-form mt-3">
          <label htmlFor="email" className="forgot-password-label mt-3">Email</label>
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
          <button className="forgot-password-submit" onClick={handleForgotPassword} disabled={emailSent}>
            Submit
          </button>
        </div>
      </div>

      <div className="testimonial-content">
        <img src={img1} alt="Large Testimonial" className="circle-image large-circle" />
        <img src={img2} alt="Medium Testimonial" className="circle-image medium-circle" />
        <img src={img3} alt="Small Testimonial" className="circle-image small-circle" style={{ marginBottom: '20%' }} />
        <img src={img4} alt="Extra Small Testimonial" className="circle-image extra-small-circle" />

        <div className="testimonial-box">
          <p>
            This website helped me check reviews for items I bought before having any regrets.
          </p>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <span>Tania, Gadget enthusiast</span>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
