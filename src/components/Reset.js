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
import config from '../Config'; // Import config for API URL

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
      handleResetPassword(values);
    },
  });

  const handleResetPassword = (data) => {
    console.log('Data to be sent:', data);

    fetch(`${config.apiUrl}/reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
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
          <div className="form-group">
            <label htmlFor="newPassword" className="form-label">New Password</label>
            <input
              type="password"
              id="newPassword"
              placeholder="Enter your new password"
              className="form-control"
              {...formik.getFieldProps('newPassword')}
            />
            {formik.touched.newPassword && formik.errors.newPassword ? (
              <div className="text-danger">{formik.errors.newPassword}</div>
            ) : null}
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your new password"
              className="form-control"
              {...formik.getFieldProps('confirmPassword')}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-danger">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">Reset</button>
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
        <div className="circle-image small-circle"  style={{marginBottom:'20%'}}>
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
