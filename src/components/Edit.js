import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import defaultImg from './images/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png';
import { Link } from "react-router-dom";
import Profile from "./Profile";
const EditProfile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    bio: '',
    avatar: defaultImg,
    country: 'Egypt',
    role: 'Frontend Developer',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prevUser) => ({
          ...prevUser,
          avatar: reader.result,
        }));
      };
      reader.readAsDataURL(image);
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-5 mt-5 text-primary fw-bold">Edit Profile</h2>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="input-group mt-4">
            <input type="file" className="form-control" id="inputGroupFile01" onChange={handleImageUpload} />
          </div>
          <label className="form-label fw-bold">User Name</label>
          <div className="input-group flex-nowrap">
            <span className="input-group-text bg-dark text-white" id="addon-wrapping">@</span>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Username" 
              name="name"
              value={user.name}
              onChange={handleInputChange}
              aria-label="Username" 
              aria-describedby="addon-wrapping" 
            />
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label fw-bold">Email</label>
          <div className="input-group flex-nowrap">
            <span className="input-group-text bg-dark text-white" id="addon-wrapping">@</span>
            <input 
              type="email" 
              className="form-control" 
              placeholder="Email" 
              name="email"
              value={user.email}
              onChange={handleInputChange}
              aria-label="Email" 
              aria-describedby="addon-wrapping" 
            />
          </div>
        </div>
        <div className="col-md-12 mb-3">
          <label className="form-label fw-bold">Bio</label>
          <div className="input-group">
            <span className="input-group-text bg-dark text-white">Bio</span>
            <textarea 
              className="form-control" 
              aria-label="With textarea" 
              name="bio"
              value={user.bio}
              onChange={handleInputChange}
              placeholder="Write something about yourself..."
            ></textarea>
          </div>
        </div>
      </div>

      <div className="mt-5 text-end">
        <button className="btn btn-warning me-2 fw-bold">Save Changes</button>
       <Link to={'/profile'}> <button className="btn btn-secondary fw-bold">Cancel</button></Link>
      </div>
    </div>
  );
};

export default EditProfile;
