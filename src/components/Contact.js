import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'; // This will hold additional styling
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure Bootstrap Icons are included

export default function About() {
  // State variables for form input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const notify = () =>
    toast.success('Thank you for your message! Your feedback has been submitted successfully!', {
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

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting the default way

    const newdata = {
      name: name,
      email: email,
      message: message,
    };

    fetch('https://wallyt.com/contact', {
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
    .then(() => {
      notify();  // Show success notification
      setName(''); // Reset form fields
      setEmail('');
      setMessage('');
    })
    .catch((err) => {
      console.error('Error:', err.message);
    });
  };

  return (
    <div className="contact-section container mt-5 mb-5">
      <div className="row d-flex justify-content-center align-items-center">
        {/* Left Section: Contact Info */}
        <div className="col-lg-7 col-md-12 text-start mb-5 mb-lg-0">
          <h2 className="text-uppercase">Contact Us</h2>
          <h1 className="fw-bold">Get in touch today</h1>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt interdum tellus du.
          </p>
          <ul className="list-unstyled mt-4">
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-envelope-fill me-3"></i> contact@company.com
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-telephone-fill me-3"></i> (123) 456 - 7890
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-geo-alt-fill me-3"></i> 794 Mcallister St, German, 94102
            </li>
          </ul>
        </div>

        {/* Right Section: Form */}
        <div className="col-lg-5 col-md-12">
          <div className="form-container p-5 rounded-3">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="form-label text-white">Name</label>
                <input
                  type="text"
                  className="form-control rounded-pill px-4"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Carter"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label text-white">Email</label>
                <input
                  type="email"
                  className="form-control rounded-pill px-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label text-white">Message</label>
                <textarea
                  className="form-control rounded-3 px-4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please type your message here..."
                  rows="4"
                  required
                />
              </div>

              <button type="submit" className="btn btn-light rounded-pill px-4 py-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
