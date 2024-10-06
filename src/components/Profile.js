import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Edit3 } from "react-feather";
import "./Profile.css";
import defaultImg from "./images/unsplash_xZSEvSlHRv8.png";
import dot from './images/Group 48097650.png';
import shape from './images/Group 9.png';
import icon from './images/Icons.png';
import messages from './images/text.png';

const Profile = () => {
  const [user, setUser] = useState({
    name: "Gerald",
    email: "Gerald@gmail.com",
    joinDate: "09/08/2024",
    bio: "Lets do it",
    avatar: defaultImg
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [view, setView] = useState("profile");  // This state determines what to show

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

  // Helper function to get link classes
  const getLinkClass = (linkView) => {
    return `nav-link ${view === linkView ? 'nav-link-active' : ''}`;
  };
  const ProfilePicture = ({ user, icon, handleProfilePictureUpload, handleFileChange }) 

  return (
    <div className="profile-container text-left">
      <img src={dot} alt="Dots" className="decorative-dot" />
      <img src={dot} alt="Dots" className="decorative-dot2" />
      <img src={shape} alt="Shape" className="decorative-shape-1" />
      <img src={shape} alt="Shape" className="decorative-shape-2" />

      <div className="profile-card mb-5">

        <div className="profile-details">
          <div className="nav-links d-flex justify-content-between mb-5 p-3" style={{backgroundColor:'#f5f7fe'}}>
            <Link to="#" className={getLinkClass("profile")} onClick={() => setView("profile")}>Profile</Link>
            <Link to="#" className={getLinkClass("addProduct")} onClick={() => setView("addProduct")}>Add Product</Link>
            <Link to="#" className={getLinkClass("exportData")} onClick={() => setView("exportData")}>Export Data</Link>
          </div>

          {view === "profile" && <div className="mb-5">
        <div className="profile-image-container ">
          <div className="row">
<div className="col-md-4">
    <div className="col-md-4" style={{ position: 'relative' }}>
      <img
        src={user.avatar}
        alt="Avatar"
        className="profile-avatar"
        style={{
          width: 150,
          height: 150,
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
      
      {/* Change Photo Icon */}
      <div
        className="change-photo-icon"
        onClick={handleProfilePictureUpload}
        style={{
          position: 'absolute',
          left:'100px',
          right: '0px',
          bottom: '5px',
          background: '#fff',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
          <img
            src={icon}
            alt="Change Photo"
            style={{ width: '24px', height: '24px' }}
          />
        </label>

        {/* Hidden File Input */}
        <input
          id="file-input"
          type="file"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
    </div>

        </div>
        <div className="col-md-8">

        <div className="profile-info ms-5">
            <p><span>Name:</span> {user.name}</p>
            <p><span>Email:</span> {user.email}</p>
            <p><span>Created:</span> {user.joinDate}</p>
            <p><span>Bio:</span> {user.bio}</p>
            </div>
          
          <Link to={'/editprofile'} className="no-underline">
            <button className="edit-profile-button ps-5 pe-5">
              <Edit3 /> Edit profile
            </button>
          </Link>
        </div>
</div>
          </div>
          
        <div className="profile-details">
          

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
  
    }
          {view === "addProduct" && <div style={{ width: '100%', height: '100%', paddingLeft: 32, paddingRight: 32, paddingTop: 50, paddingBottom: 50, background: '#F5F7FE', borderRadius: 25, border: '1px solid #E4E7E9', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
  <div style={{ flex: '1 1 0', alignSelf: 'stretch', background: '#F5F7FE', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32 }}>
    <div style={{ alignSelf: 'stretch', height: 30, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 14 }}>
      <div style={{ alignSelf: 'stretch', height: 30, textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Poppins', fontWeight: 500, lineHeight: '28px', wordWrap: 'break-word' }}>Add Product</div>
    </div>

    <div style={{ alignSelf: 'stretch', height: 80, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8 }}>
      <div style={{ color: '#0A090B', fontSize: 16, fontFamily: 'Poppins', fontWeight: 600, wordWrap: 'break-word' }}>Name</div>
      <input type="text" placeholder="Example: Nike Dunk Low Panda Black White" 
        style={{ width: 552, height: 48, paddingLeft: 18, paddingRight: 18, background: 'white', borderRadius: 8, border: '1px solid #E6E8EC', color: '#838E9E', fontSize: 16, fontFamily: 'Poppins', fontWeight: 400, lineHeight: '24px', wordWrap: 'break-word' }} />
    </div>

    <div style={{ height: 80, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8 }}>
      <div style={{ color: '#0A090B', fontSize: 16, fontFamily: 'Poppins', fontWeight: 600, wordWrap: 'break-word' }}>Category</div>
      <select style={{ width: 552, height: 48, paddingLeft: 18, paddingRight: 18, background: 'white', borderRadius: 8, border: '1px solid #E6E8EC', color: '#838E9E', fontSize: 16, fontFamily: 'Inter', fontWeight: 400, lineHeight: '24px', wordWrap: 'break-word' }}>
        <option value="" disabled selected>Choose Category</option>
        <option value="footwear">Footwear</option>
        <option value="apparel">Apparel</option>
        <option value="accessories">Accessories</option>
        <option value="equipment">Equipment</option>
      </select>
    </div>

    <div style={{ alignSelf: 'stretch', height: 175, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8 }}>
      <div style={{ color: '#0A090B', fontSize: 16, fontFamily: 'Poppins', fontWeight: 600, wordWrap: 'break-word' }}>Description</div>
      <textarea placeholder="Example: This is a new product created specifically for winning runners."
        style={{ width: 552, height: 143, paddingLeft: 18, paddingRight: 18, paddingTop: 12, background: 'white', borderRadius: 8, border: '1px solid #E6E8EC', color: '#838E9E', fontSize: 16, fontFamily: 'Poppins', fontWeight: 400, lineHeight: '24px', wordWrap: 'break-word' }} />
    </div>

    <div style={{ width: 552, height: 68, paddingTop: 14, paddingBottom: 14, paddingLeft: 24, paddingRight: 12, background: 'white', borderRadius: 7, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ color: '#42526B', fontSize: 16, fontFamily: 'Inter', fontWeight: 500, lineHeight: '24px', wordWrap: 'break-word' }}>Attach file</div>
      <div style={{ paddingLeft: 20, paddingRight: 20, background: 'white', borderRadius: 5, border: '1px solid #E6E8EC', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
        <div style={{ color: '#061C3D', fontSize: 14, fontFamily: 'Lexend', fontWeight: 700, textTransform: 'capitalize', lineHeight: '40px', wordWrap: 'break-word' }}>Upload Image</div>
      </div>
    </div>

    <div style={{ alignSelf: 'stretch', height: 46, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
      <div style={{ width: 189, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 27 }}>
        <div style={{ flex: '1 1 0', height: 46, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ flex: '1 1 0', height: 46, paddingLeft: 16, paddingRight: 16, background: '#377BF7', borderRadius: 30, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <div style={{ textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Inter', fontWeight: 600, letterSpacing: 0.07, wordWrap: 'break-word' }}>Add Product</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
}
          {view === "exportData" && <div style={{width: '100%', height: '100%', paddingLeft: 32, paddingRight: 32, paddingTop: 50, paddingBottom: 50, background: '#F5F7FE', borderRadius: 25, border: '1px #E4E7E9 solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
    <div style={{width: 552, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', height: 145, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 17, display: 'flex'}}>
            <div style={{width: 86, height: 80, position: 'relative'}}>
                <img src={messages}style={{width: 60.54, height: 71.79, left: 12.73, top: 4.11, position: 'absolute'}}></img>
            </div>
            <div style={{alignSelf: 'stretch', height: 48, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'flex'}}>
                <div style={{alignSelf: 'stretch', textAlign: 'center', color: '#474545', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Export your data</div>
                <div style={{alignSelf: 'stretch', textAlign: 'center', color: '#838E9E', fontSize: 12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Data will export by Excel</div>
            </div>
        </div>
        <div style={{alignSelf: 'stretch', height: 46, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
            <div style={{width: 189, justifyContent: 'center', alignItems: 'center', gap: 27, display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', height: 46, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{flex: '1 1 0', height: 46, borderRadius: 30, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{flex: '1 1 0', height: 46, paddingLeft: 16, paddingRight: 16, paddingTop: 14, paddingBottom: 14, background: '#377BF7', borderRadius: 30, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                            <div style={{textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Inter', fontWeight: '600', letterSpacing: 0.07, wordWrap: 'break-word'}}>Export</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style={{flex: '1 1 0', alignSelf: 'stretch', background: '#F5F7FE'}} />
</div>}

          {/* <Link to={'/editprofile'} className="no-underline">
            <button className="edit-profile-button">
              <Edit3 /> Edit profile
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
