import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // Import the custom CSS file
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import img1 from './images/Ellipse 2.png';
import img2 from './images/Ellipse 3.png';
import img3 from './images/Ellipse 4.png';
import img4 from './images/Ellipse 5.png';
import * as Yup from 'yup';

const ResetPassword = () => {
  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .required('New password is required')
        .min(6, 'Password must be at least 6 characters')
        .matches(/^[A-Z][a-z]{5,10}$/, 'Password must be between 6 to 11 characters and start with an uppercase letter'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword')], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit: (values) => {
      console.log('Form values:', values);
      handleResetPassword(values);
    },
  });

  const handleResetPassword = (data) => {
    console.log('Data to be sent:', data);

    fetch('https://wallyt.com/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + 'YOUR_BEARER_TOKEN', // Replace with your actual bearer token
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log('Response status:', res.status);
        console.log('Response headers:', res.headers);

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Response data:', JSON.stringify(data));
        alert('Password reset successful');
      })
      .catch((err) => {
        console.error('Error:', err.message);
        alert('Password reset failed');
      });
  };

  return (
    <div className="page-container">
      {/* Reset Password Section */}
      <div className="login-content">
        <h2 className="login-header">Reset Password</h2>
        <form onSubmit={formik.handleSubmit}>
          {/* New Password */}
          <div className="input-box">
            <label htmlFor="newPassword" className="form-label">New Password</label>
            <input
              type="password"
              id="newPassword"
              placeholder="Enter your new password"
              {...formik.getFieldProps('newPassword')}
            />
            {formik.touched.newPassword && formik.errors.newPassword ? (
              <div className="text-danger">{formik.errors.newPassword}</div>
            ) : null}
          </div>

          {/* Confirm Password */}
          <div className="input-box">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your new password"
              {...formik.getFieldProps('confirmPassword')}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-danger">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>

          <button type="submit" className="button btn-primary w-100">Reset</button>
          <div className="link-text text-end mt-3">
            <Link to="/Forgotpass">Forgot Password?</Link>
          </div>
        </form>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-content">
        <div className="circle-image large-circle">
          <img src={img1} alt="Large Testimonial" />
        </div>
        <div className="circle-image medium-circle">
          <img src={img2} alt="Medium Testimonial" />
        </div>
        <div className="circle-image small-circle">
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
    </div>
  );
};

export default ResetPassword;