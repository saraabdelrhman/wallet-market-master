import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';
import { Link } from 'react-router-dom';
import defaultImg from './images/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Abdelrhman Shehata',
    email: 'abdelrhman.Shehata@gmail.com',
    bio: 'Experienced Frontend Developer with a passion for creating interactive and user-friendly web applications. Proficient in HTML, CSS, JavaScript, and React.',
    avatar: defaultImg,
    role: 'Frontend Developer',
    currentYear: new Date().getFullYear(),
  });

  const handleProfileUpdate = () => {
    const updatedProfile = { ...user };

    fetch('https://wallyt.com/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProfile),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update profile');
        }
        return response.json();
      })
      .then(data => {
        setUser(data); 
        alert('Profile updated successfully!');
      })
      .catch(error => {
        console.error('Error updating profile:', error);
      });
  };

  const handleProfileDelete = () => {
    if (window.confirm("Are you sure you want to delete your profile? This action cannot be undone.")) {
      fetch('https://wallyt.com/profile', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete profile');
        }
        return response.json();
      })
      .then(() => {
        alert('Profile deleted successfully!');
        setUser({});
      })
      .catch(error => {
        console.error('Error deleting profile:', error);
      });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 ">
      <div className="card shadow-lg w-100" style={{ maxWidth: '500px' }}>
        <div className="card-bodyy text-center p-5">
          <img src={user.avatar} alt="User Avatar" className="rounded-circle img-fluid profile-avatar mb-4" style={{ width: '150px', height: '150px' }} />
          <h3 className="fw-bold mt-3 text-dark">{user.name}</h3>
          <p className="text-muted mb-1">{user.email}</p>
          <h5 className="text-light fw-semibold">{user.role}</h5>
          <p className="text-light fw-semibold">{user.currentYear}</p>
          <p className="mt-3 text-muted">{user.bio}</p>
          
          <div className="mt-4">
            <Link to="/editprofile">
              <button className="btn btn-light me-2 fw-bold">Edit Profile</button>
            </Link>
            <button
              className="btn btn-outline-dark fw-bold"
              onClick={handleProfileDelete}
            >
              Delete Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
