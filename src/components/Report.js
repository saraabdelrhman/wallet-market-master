import React, { useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PhoneReport() {
  const [report, setReport] = useState('');

  const handleReportChange = (e) => setReport(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!report.trim()) {
      toast.error('Report content cannot be empty.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
      return;
    }

    const newReport = {
      report: report,
      Created_at:  new Date().toISOString(),
    };

    fetch('http://localhost:3000/api/report', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(newReport),
    })
      .then((res) => {
        console.log('Status:', res.status);
        console.log('Headers:', res.headers);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Response data:', data);
        
        // Notify the user of successful submission
        toast.success('Report submitted successfully!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });

        // Clear the input field after successful submission
        setReport('');
      })
      .catch((err) => {
        console.error('Error:', err.message);

        toast.error('An error occurred while submitting your report.', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4">Submit a New Report</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="report" className="form-label fw-bold">Report Content</label>
          <textarea
            id="report"
            className="form-control"
            rows="4"
            placeholder="Write your report here..."
            value={report}
            onChange={handleReportChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-warning mb-5">Submit Report</button>
        <ToastContainer />
      </form>
    </div>
  );
}
