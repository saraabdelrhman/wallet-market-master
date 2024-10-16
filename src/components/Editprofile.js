import React, { useState } from "react";
import defaultImg from "./images/unsplash_xZSEvSlHRv8.png"; // Placeholder image path
import icon from './images/Icons.png'; // Camera icon for upload

const Profile = ({ content }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    bio: "",
    avatar: defaultImg, // Placeholder image
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
    alert("Profile picture uploaded successfully!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="profile-container" style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <style>
        {`
          .profile-card {
            width: 80%;
            max-width: 1000px;
            padding: 40px;
            background-color: #fff;
            border-radius: 20px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap; /* Allows wrapping for smaller screens */
          }

          .profile-avatar-container {
            position: relative;
            flex-basis: 30%; /* Give it a percentage width */
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .profile-avatar {
            border-radius: 50%;
            width: 150px;
            height: 150px;
            object-fit: cover;
          }

          .change-photo-icon {
            position: absolute;
            bottom: 0;
            right: 20px;
            background-color: white;
            border-radius: 50%;
            padding: 10px;
            border: 1px solid #ddd;
            cursor: pointer;
          }

          .profile-fields {
            flex-basis: 65%; /* Take the remaining space */
            padding-left: 30px;
          }

          .profile-field {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
          }

          .profile-label {
            font-weight: bold;
            margin-right: 20px;
            min-width: 100px;
            color: #333;
          }

          .profile-input, .profile-textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
            background-color: #f9f9f9;
          }

          .profile-input::placeholder, .profile-textarea::placeholder {
            color: #6c757d; /* Secondary color like Bootstrap */
          }

          .profile-textarea {
            resize: vertical;
            height: 80px;
          }

          .button-container {
            display: flex;
            justify-content: center;
            margin-top: 20px;
          }

          .edit-profile-button {
            background-color: #3B82F6;
            color: white;
            border: none;
            padding: 10px 30px;
            border-radius: 20px;
            cursor: pointer;
            margin: 0 10px;
          }

          .edit-profile-button.cancel {
            background-color: transparent;
            color: #3B82F6;
            border: 2px solid #3B82F6;
          }

          .edit-profile-button:hover {
            background-color: #2563EB;
          }

          /* Responsive Styles */
          @media (max-width: 768px) {
            .profile-card {
              flex-direction: column; /* Stack content vertically */
              align-items: center;
              padding: 20px;
            }

            .profile-avatar-container {
              flex-basis: auto;
              margin-bottom: 20px;
            }

            .profile-fields {
              padding-left: 0;
              flex-basis: 100%;
            }

            .profile-label {
              min-width: 80px; /* Adjust label width */
            }
          }

          @media (max-width: 480px) {
            .profile-avatar {
              width: 120px;
              height: 120px;
            }

            .profile-label {
              min-width: 70px; /* Further reduce label width */
            }

            .edit-profile-button {
              width: 100%;
              margin-top: 10px;
              padding: 10px;
            }

            .button-container {
              flex-direction: column;
            }
          }
        `}
      </style>
      
      <div className="d-flex text-start" style={{ width: "65%" }}>
        <h2 className="fs-2" style={{ textAlign: "left" }}>User Profile</h2>
      </div>

      <div className="profile-card">
        <div className="profile-avatar-container">
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

        <div className="profile-fields">
          <div className="profile-field">
            <label htmlFor="name" className="profile-label">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              className="profile-input"
              placeholder="Gerald"
            />
          </div>

          <div className="profile-field">
            <label htmlFor="email" className="profile-label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="profile-input"
              placeholder="Gerald@gmail.com"
            />
          </div>

          <div className="profile-field">
            <label htmlFor="bio" className="profile-label">Bio:</label>
            <textarea
              id="bio"
              name="bio"
              value={user.bio}
              onChange={handleInputChange}
              className="profile-textarea"
              placeholder="I’m a gadget enthusiast for 3 years and love to share everything in my review"
            />
          </div>

          <div className="button-container">
            <button className="edit-profile-button cancel">Cancel</button>
            <button className="edit-profile-button">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
