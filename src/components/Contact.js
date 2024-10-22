import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'; // This will hold additional styling
import config from '../Config'; // Import the config file

function Contact({ content }) {
  // State variables for form input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const notifySuccess = () =>
    toast.success('Thank you for your message! Your feedback has been submitted successfully!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });

  const notifyError = (error) => 
    toast.error(`Error submitting your feedback: ${error}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting the default way

    const newData = {
      name: name,
      email: email,
      message: message,
    };

    fetch(`${config.apiUrl}/contact`, { // Use the API URL from the config
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(newData),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(() => {
      notifySuccess();  // Show success notification
      setName(''); // Reset form fields
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Error:', error.message);
      notifyError(error.message);
    });
  };

  return (
    <div className="contact-section container mt-5 mb-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-7 col-md-12 text-start mb-5 mb-lg-0">
          <h2 className="text-uppercase">{content["contact-title"]}</h2>
          <h1 className="fw-bold">{content["contact-desc"]}</h1>
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

        <div className="col-lg-5 col-md-12">
          <div className="form-container p-5 rounded-3">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="form-label text-white">Name</label>
                <input type="text" className="form-control rounded-pill px-4" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Carter" required />
              </div>
              <div className="mb-4">
                <label className="form-label text-white">Email</label>
                <input type="email" className="form-control rounded-pill px-4" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@email.com" required />
              </div>
              <div className="mb-4">
                <label className="form-label text-white">Message</label>
                <textarea className="form-control rounded-3 px-4" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Please type your message here..." rows="4" required />
              </div>
              <button type="submit" className="btn btn-light rounded-pill px-4 py-2">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
