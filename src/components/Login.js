import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // Import the custom CSS file
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import img1 from './images/Ellipse 2.png';
import img2 from './images/Ellipse 3.png';
import img3 from './images/Ellipse 4.png';
import img4 from './images/Ellipse 5.png';
import google from './images/search 1.png';
import facebook from './images/facebook 1.png';
import * as Yup from 'yup';
import config from '../Config'; // Import the config file

const Login = ({ content }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required').email('Email is not valid'),
      password: Yup.string()
        .required('Password is required')
        .matches(/^[A-Z][a-z]{5,10}$/, 'Password must be between 6 to 11 characters and start with an uppercase letter'),
    }),
    onSubmit: (values) => {
      handleLogin(values); // Trigger login
    },
  });

  const handleLogin = (data) => {
    console.log('Data to be sent:', data);
    
    
    fetch(`${config.apiUrl}/login`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Login failed');
        }
        return res.json();
      })
      .then((loginData) => {
        console.log('Login successful:', loginData);
        
        // Now call the /login-success API if login is successful
        fetch(`${config.apiUrl}/login-success`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify({ userId: loginData.userId }), // Pass any relevant data here
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error('Login success API call failed');
            }
            return res.json();
          })
          .then((successData) => {
            console.log('Login success API response:', successData);
            // Perform any additional actions here (e.g., redirect, store data)
          })
          .catch((err) => {
            console.error('Error during login-success API call:', err.message);
          });
      })
      .catch((err) => {
        console.error('Error during login:', err.message);
      });
  };

  return (
    <div className="page-container">
      <div className="login-content">
        <h2 className="login-header">{content["login"]}</h2>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-danger">{formik.errors.email}</div>
          ) : null}

          <input
            type="password"
            id="password"
            placeholder="Password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-danger">{formik.errors.password}</div>
          ) : null}
          
          <div className="link-text text-end mt-3">
            <Link to="/forgotpassword" style={{ color: '#377BF7', fontSize: 16 }}>{content["forgot-password"]}</Link>
          </div>
          <button type="submit" className="btn btn-primary w-100">{content["sign-in"]}</button>
        </form>
        <div className="or-divider">-OR-</div>

        <div className="btn btn-google w-100 mb-3">
          <img src={google} alt="Google Logo" />
          Sign in with Google
        </div>
        <div className="btn btn-facebook w-100">
          <img src={facebook} alt="Facebook Logo" />
          Sign in with Facebook
        </div>
      </div>

      <div className="testimonial-content">
        <img src={img1} alt="Large Testimonial" className="circle-image large-circle" />
        <img src={img2} alt="Medium Testimonial" className="circle-image medium-circle" />
        <img src={img3} alt="Small Testimonial" className="circle-image small-circle" style={{ marginBottom: '20%' }} />
        <img src={img4} alt="Extra Small Testimonial" className="circle-image extra-small-circle" />

        <div className="testimonial-box">
          <p>This website helped me check reviews for items I bought before having any regrets.</p>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <span>Tania, Gadget enthusiast</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
