import React, { useState } from "react";
import "./Profile.css"; // Ensure the CSS path is correct
import defaultImg from "./images/unsplash_xZSEvSlHRv8.png"; // Placeholder image path
import dot from './images/Group 48097650.png';
import shape from './images/Group 9.png';
import icon from './images/Icons.png';
import { Edit3 } from "react-feather"; // Using react-feather for the edit icon
import { Link } from "react-router-dom";

const Profile = ({content}) => {
  const [user, setUser] = useState({
    name: "Gerald",
    email: "Gerald@gmail.com",
    joinDate: "09/08/2024",
    bio: "I’m a gadget enthusiast for 3 years and love to share everything in my review",
    avatar: defaultImg // Using a default image as placeholder
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleProfilePictureUpload = () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    // Mock upload
    alert("Profile picture uploaded successfully!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="profile-container text-left">
      <h2 className="profile-title">{content["profile"]}</h2>

      {/* Decorative images */}
      <img src={dot} alt="Dots" className="decorative-dot" />
      <img src={dot} alt="Dots" className="decorative-dot2" />
      <img src={shape} alt="Shape" className="decorative-shape-1" />
      <img src={shape} alt="Shape" className="decorative-shape-2" />

      <div className="profile-card">
        <div className="profile-image-container">
          <img src={user.avatar} alt="Avatar" className="profile-avatar" />
          <div className="change-photo-icon" onClick={handleProfilePictureUpload}>
            <label htmlFor="file-input">
              <img src={icon} alt="Change Photo" />
            </label>
            <input
              id="file-input"
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
        </div>
        <div className="profile-details">
          <div className="profile-info">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              className="profile-input"
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="profile-input"
            />
            <input
              type="text"
              name="joinDate"
              value={user.joinDate}
              onChange={handleInputChange}
              className="profile-input"
            />
            <textarea
              name="bio"
              value={user.bio}
              onChange={handleInputChange}
              className="profile-textarea"
            />
          </div>
          <div className="d-flex">
           <Link to={'/profile'} className="no-underline">
           <button className="edit-profile-button me-3">
              Cancel
            </button></Link> 
            <button className="edit-profile-button">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

