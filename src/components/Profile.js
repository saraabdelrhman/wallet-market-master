import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';
import { Link } from 'react-router-dom';
import defaultImg from './images/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png';

const Profile = () => {
  const [user] = useState({
    name: 'Abdelrhman Shehata',
    email: 'abdelrhman.Shehata@gmail.com',
    bio: 'Experienced Frontend Developer with a passion for creating interactive and user-friendly web applications. Proficient in HTML, CSS, JavaScript, and React.',
    avatar: defaultImg,
    role: 'Frontend Developer',
  });

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100">
        <div className="col-md-6 offset-md-3 text-center">
          <img src={user.avatar} alt="User Avatar" className="rounded-circle img-fluid profile-avatar mb-4 shadow-lg" />
          <h3 className="fw-bold mt-3 text-primary">{user.name}</h3>
          <p className="text-muted">{user.email}</p>
          <h5 className="text-primary fw-semibold">{user.role}</h5>
          
          <div className="mt-5 text-center">
            <Link to="/edit">
              <button className="btn btn-warning me-2 fw-bold">Edit Profile</button>
            </Link>
            <button className="btn btn-danger fw-bold">Delete Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
