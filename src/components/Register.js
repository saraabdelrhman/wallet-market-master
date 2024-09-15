import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css'; // Import the custom CSS file
import { useFormik } from 'formik';
import google from './images/search 1.png'; // Replace with your Google icon image path
import facebook from './images/facebook 1.png'; // Replace with your Facebook icon image path
import img1 from './images/Ellipse 2.png'; // Replace with your image path
import img2 from './images/Ellipse 3.png'; // Replace with your image path
import img3 from './images/Ellipse 4.png'; // Replace with your image path
import img4 from './images/Ellipse 5.png'; // Replace with your image path
import * as Yup from 'yup';

const About = () => {
  // State for handling form submission and success
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Complete Name is required'),
      email: Yup.string().required('Email is required').email('Email is not valid'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(20, 'Password must be less than 20 characters'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
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
            Authorization: 'Bearer ' + 'YOUR_BEARER_TOKEN', // Replace with your actual bearer token
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Response data:', JSON.stringify(data));

        // Handle success state
        setIsSubmitting(false);
        setIsSubmitted(true);
      } catch (err) {
        console.error('Error:', err.message);
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="container-fluid  ">
      <div className="row">
        {/* Register Section */}
        <div className="col-12 col-lg-6">
          <div className="login-content w-100">
            <h2 className="login-header ">Register</h2>

            {/* Success message */}
            {isSubmitted && <div className="alert alert-success">Registration successful!</div>}

            <form onSubmit={formik.handleSubmit} className="w-100">
              {/* Complete Name */}
              <div className="input-box mb-3">
                <label htmlFor="name" className="form-label">Complete Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Write your correct input here"
                  aria-label="Complete Name"
                  className="form-control"
                  {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-danger">{formik.errors.name}</div>
                ) : null}
              </div>

              {/* Email Address */}
              <div className="input-box mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Write your correct input here"
                  aria-label="Email Address"
                  className="form-control"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
              </div>

              {/* Password */}
              <div className="input-box mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Write your correct input here"
                  aria-label="Password"
                  className="form-control"
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-danger">{formik.errors.password}</div>
                ) : null}
              </div>

              {/* Confirm Password */}
              <div className="input-box mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Write your correct input here"
                  aria-label="Confirm Password"
                  className="form-control"
                  {...formik.getFieldProps('confirmPassword')}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                  <div className="text-danger">{formik.errors.confirmPassword}</div>
                ) : null}
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 mb-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating Account...' : 'Create My Account'}
              </button>
            </form>

            <div className="or-divider text-center">- Or Continue with -</div>

            {/* Google and Facebook Buttons */}
            <div className='d-flex justify-content-center mb-2'>
              <div className="btn btn-google w-50 me-2 d-flex align-items-center justify-content-center">
                <img src={google} alt="Google Logo" className="me-2" />
                Google
              </div>
              <div className="btn btn-facebook w-50 ms-2 d-flex align-items-center justify-content-center">
                <img src={facebook} alt="Facebook Logo" className="me-2" />
                Facebook
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="col-12 col-lg-6 testimonial-content d-none d-lg-block">
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
    </div>
  );
};

export default About;
