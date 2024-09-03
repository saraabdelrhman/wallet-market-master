import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import img from './images/0ab2a47a-0b9f-45af-b31f-0fa492e123ca-removebg-preview.png';
import './Contact.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function About() {
  // State variables for form input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const notify = () =>
    toast.success('Thank you for your review! Your feedback has been submitted successfully!', {
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

    console.log(newdata);

    fetch('https://wallyt.com/api/contact', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(newdata),
    })
    .then((res) => {
      console.log(res.headers);
      console.log(res.status);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => {
      console.log('data', data);
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
    <div className='container mt-5 mb-5'>
      <div className='row'>
        <div className='col-md-6'>
          <form onSubmit={handleSubmit}>
            <h2 className='mb-4' style={{ fontWeight: '900' }}>Contact Us</h2>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)} // Update state on change
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update state on change
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Send us a message</label>
              <textarea 
                className="form-control" 
                id="message" 
                rows="3" 
                value={message}
                onChange={(e) => setMessage(e.target.value)} // Update state on change
              ></textarea>
            </div>
            <div className="text-box">
              <button type="submit" className="btn btn-primary buttons">Submit</button>
            </div>
          </form>
        </div>
        <div className='col-md-6'>
          <img src={img} alt='contact-us' className='w-100' />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
