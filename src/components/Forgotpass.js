import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';

export default function Forgotpass() {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false); // State to toggle forms

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

  const notifyError = () =>
    toast.error('Please enter a valid email address.', {
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
      notifyError(); // Show error notification if email field is empty
      return;
    }

    const newdata = {
      email: email
    };

    fetch('https://wallyt.com/forgotpass', {
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
        notifySuccess();  
        setEmailSent(true); 
      })
      .catch((err) => {
        console.log('error', err.message);
      });
  };

  const formik = useFormik({
    initialValues: {
      newpass: '',
      confirmpass: '',
    },
    validationSchema: Yup.object({
      newpass: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(11, 'Password must be less than 12 characters')
        .required('Password is required'),
      confirmpass: Yup.string()
        .oneOf([Yup.ref('newpass')], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit: (values) => {
      console.log('Form values:', values);
      // Handle password reset logic
      toast.success('Password has been reset successfully!', {
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
    },
  });

  return (
    <div className="container mt-0 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-xl-10">
          {/* Conditionally render based on emailSent */}
          {!emailSent ? (
            <div className="carde p-5 bigger-card" style={{ background: 'linear-gradient(135deg, #f5af1993, #f1271175)' }}>
              <h3 className="mb-4 text-center" style={{ fontWeight: '900' }}>Forgot your password!</h3>
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
              <button className="btn btn-dark w-100 mb-3" onClick={handleForgotPassword}>Send Email</button>
            </div>
          ) : (
            <div className="carde p-5 bigger-card" style={{ background: 'linear-gradient(135deg, #f5af1993, #f1271175)' }}>
              <h3 className="mb-4 text-center" style={{ fontWeight: '900' }}>Reset Password</h3>
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="newpass" className="form-label">Create New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="newpass"
                    placeholder="Enter your new password"
                    value={formik.values.newpass}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.newpass && formik.errors.newpass ? (
                    <div className="text-danger">{formik.errors.newpass}</div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmpass" className="form-label">Confirm your Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmpass"
                    placeholder="Confirm password"
                    value={formik.values.confirmpass}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.confirmpass && formik.errors.confirmpass ? (
                    <div className="text-danger">{formik.errors.confirmpass}</div>
                  ) : null}
                </div>
                <button className="btn btn-dark w-100 mb-3" type="submit">Reset Password</button>
              </form>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
