import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export default function ReportReview() {
  const [name, setName] = useState('');
  const [reviewId, setReviewId] = useState('');
  const [message, setMessage] = useState('');

  const notifySuccess = () => toast.success('Your report has been submitted successfully!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    transition: Bounce,
  });

  const notifyError = (msg) => toast.error(msg, {
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
    e.preventDefault();

    if (name.trim() === '' || reviewId.trim() === '' || message.trim() === '') {
      notifyError('All fields are required!');
      return;
    }

    fetch('https://wallyt.com/reports', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, reviewId, message }),
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => {
      notifySuccess();
      setName('');
      setReviewId('');
      setMessage('');
    })
    .catch((err) => {
      console.error('Error:', err.message);
      notifyError('An error occurred while submitting your report. Please try again later.');
    });
  };

  return (
    <div className='container mt-5 mb-5 d-flex justify-content-center align-items-center'>
      <div className='col-md-6'>
        <form onSubmit={handleSubmit}>
          <h2 className='mb-4 text-center' style={{ fontWeight: '900' }}>Report a Review</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              aria-label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="reviewId" className="form-label">Review ID</label>
            <input 
              type="text" 
              className="form-control" 
              id="reviewId" 
              aria-label="Review ID"
              value={reviewId}
              onChange={(e) => setReviewId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Reason for Reporting</label>
            <textarea 
              className="form-control" 
              id="message" 
              aria-label="Reason for Reporting"
              rows="3" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-danger">Submit Report</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
