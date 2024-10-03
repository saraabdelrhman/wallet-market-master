import React, { useState } from "react";
import "./Profile.css"; // Updated CSS file path
import defaultImg from "./images/unsplash_xZSEvSlHRv8.png"; // Placeholder image path
import dot from './images/Group 48097650.png';
import shape from './images/Group 9.png';
import icon from './images/Icons.png';
import { Edit3 } from "react-feather"; // Using react-feather for the edit icon
import { Link } from "react-router-dom";
import messages from './images/messages.png';

const Profile = () => {
  const [user, setUser] = useState({
    name: "Gerald",
    email: "Gerald@gmail.com",
    joinDate: "09/08/2024",
    bio: "I’m a gadget enthusiast for 3 years and love to share everything in my review",
    avatar: defaultImg // Using a default image as placeholder
  });

  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Handle profile picture upload (mock function for now)
  const handleProfilePictureUpload = () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    // Mock upload
    alert("Profile picture uploaded successfully!");
  };

  return (
    <div className="profile-container text-left">
      <h2 className="profile-title">User Profile</h2>

      {/* Decorative images */}
      <img src={dot} alt="Dots" className="decorative-dot" />
      <img src={dot} alt="Dots" className="decorative-dot2" />
      <img src={shape} alt="Shape" className="decorative-shape-1" />
      <img src={shape} alt="Shape" className="decorative-shape-2" />

      <div className="profile-card mb-5">
        <div className="profile-image-container ">
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
          <div className="d-flex justify-content-between mb-5 p-3" style={{backgroundColor:'#f5f7fe'}}>
            <Link style={{textDecoration:'none'}} className="ps-5">Profile </Link>
            <Link style={{textDecoration:'none'}}>Add Product</Link>
            <Link style={{textDecoration:'none'}} className="pe-5">Export Data</Link>
          </div>
          <div className="">
            <p><span>Name:</span> {user.name}</p>
            <p><span>Email:</span> {user.email}</p>
            <p><span>Created:</span> {user.joinDate}</p>
            <p><span>Bio:</span> {user.bio}</p>
            </div>
          </div>
          <Link to={'/editprofile'} className="no-underline">
            <button className="edit-profile-button">
              <Edit3 /> Edit profile
            </button>
          </Link>

          <div style={{ width: '100%',paddingTop:'30px', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 30, display: 'inline-flex' }}>
            <div style={{ alignSelf: 'stretch', color: 'black', fontSize: 22, fontFamily: 'Poppins', fontWeight: 500, lineHeight: '30px', wordWrap: 'break-word' }}>
              Review Alert
            </div>

            <div style={{ padding: 24, background: 'white', borderRadius: 24, overflow: 'hidden', border: '1px solid #B3261E', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
              <div style={{ width: 689, justifyContent: 'flex-start', alignItems: 'center', gap: 21, display: 'inline-flex' }}>
                <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
                  <div style={{ alignSelf: 'stretch', height: 83 }}>
                    <span style={{ color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: 400, lineHeight: '28px', wordWrap: 'break-word' }}>
                      The cushioning in the Pegasus felt disappointing and lacked the responsiveness I expected for road running. Despite the promise of an energized ride...
                    </span>
                    <span style={{ color: '#B3261E', fontSize: 16, fontFamily: 'Poppins', fontWeight: 400, lineHeight: '28px', wordWrap: 'break-word' }}>
                      read more<br />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 14, display: 'inline-flex' }}>
              <div style={{ padding: 12, borderRadius: 24, border: '1px solid #377BF7', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'flex' }}>
                <div style={{ width: 24, height: 24, position: 'relative' }}>
                  <img src={messages} style={{ width: 20, height: 20, left: 2, top: 2, position: 'absolute'}}></img>
                </div>
                <div style={{ color: '#377BF7', fontSize: 18, fontFamily: 'Poppins', fontWeight: 500, textTransform: 'capitalize', lineHeight: '24px', wordWrap: 'break-word' }}>
                  Message
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
