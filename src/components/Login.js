import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css'; // Import the custom CSS file
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const About = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email is required')
        .email('Email is not valid'),
      password: Yup.string()
        .required('Password is required')
        .matches(/^[A-Z][a-z]{5,10}$/, 'Password must be between 6 to 11 characters and start with an uppercase letter'),
    }),
    onSubmit: (values) => {
      console.log('Form values:', values);
      handleRegister(values);
    },
  });

  const handleRegister = (data) => {
    console.log('Data to be sent:', data);

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + 'YOUR_BEARER_TOKEN' // Replace with your actual bearer token
      },
      body: JSON.stringify(data),
    })
      .then(res => {
        console.log('Response status:', res.status);
        console.log('Response headers:', res.headers);

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        console.log('Response data:', JSON.stringify(data));
      })
      .catch(err => {
        console.error('Error:', err.message);
      });
  };

  return (
    <div className="container mt-0 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-xl-10">
          <div className="carde p-5 bigger-card" style={{ background: 'linear-gradient(135deg, #f5af1993, #f1271175)' }}>
            <h3 className="mb-4 text-center" style={{ fontWeight: '900' }}>Login</h3>
            <form className="mb-3" onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-danger">{formik.errors.password}</div>
                ) : null}
              </div>
              <button type="submit" className="btn btn-dark w-100 mb-3">
                Continue with Email
              </button>
            </form>
            <button className="btn btn-dark w-100">Continue with Facebook</button>
            <button className="btn btn-dark w-100 mt-3 mb-2">Continue with Google</button>
            <Link className="mt-5 pt-2 link-underline link-underline-opacity-0 text-danger fw-bold" to={'/Forgotpass'}>
              Forgot your password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
