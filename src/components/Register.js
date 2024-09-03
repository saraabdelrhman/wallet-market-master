import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import * as Yup from 'yup';
import { Formik, useFormik } from 'formik';
import { Link } from 'react-router-dom';

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

    fetch('https://wallyt.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' 
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
        console.log('Response data:', data);
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
            <h3 className="mb-4 text-center" style={{ fontWeight: '900' }}>Register</h3>
            <form className="mb-3" onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  {...formik.getFieldProps('email')}  //function call returns an object that contains properties (name, value, onChange, onBlur, etc.)
                  // necessary to make the input field work seamlessly with Formik's state management.]
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
              <button type="submit" className="btn btn-dark w-100 mb-3">Continue with Email</button>
              <button className="btn btn-dark w-100 mb-3">Continue with Google</button>
              <button className="btn btn-dark w-100 mb-3">Continue with Facebook</button>
              <Link className="mt-5 pt-2 link-underline link-underline-opacity-0  text-dark" to={'/Login'}>
              Already have an account?   <span className='text-danger fw-bold' > Login</span>
            </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
