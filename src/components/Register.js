import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css'; // Make sure this path is correct
import { useFormik } from 'formik';
import google from './images/search 1.png'; // Ensure image paths are correct
import facebook from './images/facebook 1.png';
import img1 from './images/Ellipse 2.png';
import img2 from './images/Ellipse 3.png';
import img3 from './images/Ellipse 4.png';
import img4 from './images/Ellipse 5.png';

import * as Yup from 'yup';

const About = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      accountType: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Complete Name is required'),
      email: Yup.string().email('Email is not valid').required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(20, 'Password must be less than 20 characters'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
      accountType: Yup.string().required('Account type is required'),
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      console.log('Form values:', values);
      try {
        const response = await fetch('https://wallyt.com/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: 'Bearer ' + 'YOUR_BEARER_TOKEN',
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Response data:', JSON.stringify(data));
        setIsSubmitting(false);
        setIsSubmitted(true);
      } catch (err) {
        console.error('Error:', err.message);
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="login-content w-100">
            <h2 className="login-header fw-bolder" style={{fontFamily:'Helvetica'}}>Register</h2>
            {isSubmitted && <div className="alert alert-success">Registration successful!</div>}
            <form onSubmit={formik.handleSubmit} className="w-100">
             
                <span className="form-label pb-3">Complete Name</span>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="form-control mb-4 p-3"
                  {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-danger">{formik.errors.name}</div>
                ) : null}
             
                <span className="form-label pb-3">Email Address</span>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="form-control mb-4 p-3" style={{color: '#838E9E',
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    fontWeight: '100',
                    wordWrap: 'break-word'}}
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
           
             
                <span className="form-label pb-3" >Choose Account Type</span>
                <select
                  id="accountType"
                  className="form-select mb-4 p-3"
                  {...formik.getFieldProps('accountType')}
                >
                  <option value="">Select account type</option>
                  <option value="personal">Personal</option>
                  <option value="business">Business</option>
                </select>
                {formik.touched.accountType && formik.errors.accountType ? (
                  <div className="text-danger">{formik.errors.accountType}</div>
                ) : null}
           
             
                <span className="form-label pb-3">Password</span>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter a strong password"
                  className="form-control mb-4 p-3"
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-danger">{formik.errors.password}</div>
                ) : null}
           
             
                <span className="form-label pb-3">Confirm Password</span>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  className="form-control mb-4 p-3"
                  {...formik.getFieldProps('confirmPassword')}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                  <div className="text-danger">{formik.errors.confirmPassword}</div>
                ) : null}
           
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating Account...' : 'Create My Account'}
              </button>
            </form>
            <div className="or-divider text-center">- Or Continue with -</div>
            <div className='d-flex justify-content-center'>
              <div className="btn btn-google w-50 me-2 d-flex align-items-center justify-content-center">
                <img src={google} alt="Google Logo" />
                Google
              </div>
              <div className="btn btn-facebook w-50 ms-2 d-flex align-items-center justify-content-center">
                <img src={facebook} alt="Facebook Logo" />
                Facebook
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 testimonial-content d-none d-lg-block">
          <div className="circle-image large-circle">
            <img src={img1} alt="Large Testimonial" />
          </div>
          <div className="circle-image medium-circle">
            <img src={img2} alt="Medium Testimonial" />
          </div>
          <div className="circle-image small-circle" style={{marginBottom:'40%'}}>
            <img src={img3} alt="Small Testimonial" />
          </div>
          <div className="circle-image extra-small-circle" style={{marginBottom:'30%'}}>
            <img src={img4} alt="Extra Small Testimonial" />
          </div>
          <div className="testimonial-box">
            <p>This website helped me check reviews for items I bought before having any regrets.</p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <span>Tania, Gadget enthusiast</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

