import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Edit3 } from "react-feather";
import "./Profile.css";
import defaultImg from "./images/unsplash_xZSEvSlHRv8.png";
import dot from './images/Group 48097650.png';
import shape from './images/Group 9.png';
import icon from './images/Icons.png';
import rec from './images/Rectangle 1.png'
import messages from './images/text.png';

const Profile = () => {
  const [user, setUser] = useState({
    name: "Gerald",
    email: "Gerald@gmail.com",
    joinDate: "09/08/2024",
    bio: "Lets do it",
    avatar: defaultImg,
  });

  const [view, setView] = useState("profile"); // State to determine what to show
  const [isVisible, setIsVisible] = useState(false); // State for message visibility
  const [selectedFile, setSelectedFile] = useState(null); // State for file input

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

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Helper function to get link classes
  const getLinkClass = (linkView) => {
    return `nav-link ${view === linkView ? 'nav-link-active' : ''}`;
  };

  return (
    <div className="profile-container text-left">
      <img src={dot} alt="Dots" className="decorative-dot" />
      <img src={dot} alt="Dots" className="decorative-dot2" />
      <img src={shape} alt="Shape" className="decorative-shape-1" />
      <img src={shape} alt="Shape" className="decorative-shape-2" />

      <div className="profile-card mb-5">
        <div className="profile-details">
          <div className="nav-links d-flex justify-content-between mb-5 p-3" style={{ backgroundColor: '#f5f7fe' }}>
            <Link to="#" className={getLinkClass("profile")} onClick={() => setView("profile")}>Profile</Link>
            <Link to="#" className={getLinkClass("addProduct")} onClick={() => setView("addProduct")}>Add Product</Link>
            <Link to="#" className={getLinkClass("exportData")} onClick={() => setView("exportData")}>Export Data</Link>
          </div>

          {view === "profile" && (
            <div className="mb-5">
              <div className="profile-image-container">
                <div className="row">
                  <div className="col-md-4">
                    <div style={{ position: 'relative' }}>
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
                          left: '100px',
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
                <div style={{ width: '100%', paddingTop: '30px', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 30, display: 'inline-flex' }}>
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

                  <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button
                      onClick={toggleVisibility}
                      style={{
                        padding: 12,
                        borderRadius: 24,
                        border: '1px solid #377BF7',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: 12,
                        display: 'flex',
                      }}
                    >
                      <div style={{ width: 24, height: 24, position: 'relative' }}>
                        <img src={messages} style={{ width: 20, height: 20, left: 2, top: 2, position: 'absolute' }} alt="messages icon" />
                      </div>
                      <div style={{
                        color: '#377BF7',
                        fontSize: 18,
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        textTransform: 'capitalize',
                        lineHeight: '24px',
                        wordWrap: 'break-word'
                      }}>
                        Message
                      </div>
                    </button>

                    {isVisible && (
                      <div
                        style={{
                          position: 'fixed',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Slightly dim the background
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        onClick={toggleVisibility} // Close the modal on background click
                      >
                        <div
                          style={{
                            width: '80%', // Adjust width as needed
                            maxWidth: 800,
                            padding: '32px',
                            background: '#F5F7FE',
                            borderRadius: 25,
                            border: '1px #E4E7E9 solid',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 16,
                          }}
                          onClick={(e) => e.stopPropagation()} // Prevent closing on content click
                        >
                          {/* The content goes here */}
                        

                          <div style={{width: '100%', height: '100%', paddingTop: 8, paddingBottom: 8, background: 'rgba(55, 123, 247, 0.20)', borderRadius: 24, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 14, display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', height: 41, textAlign: 'center', color: 'black', fontSize: 28, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 42, wordWrap: 'break-word',zIndex:'2'}}>Message</div>
</div>
                          <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', paddingLeft: 24,marginRight:'50PX', paddingRight: 24, paddingTop: 16, paddingBottom: 16, borderBottom: '0.25px #AFB8CF solid', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
        <div style={{flex: '1 1 0', height: 35, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
            <img style={{width: 35, height: 35, borderRadius: 8}} src={rec} />
            <div style={{color: '#636363', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Ammi Watts</div>
        </div>
    </div>
    <div style={{width: 894, marginRight:'110px',paddingBottom: 17, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
        <div style={{flex: '1 1 0', alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', display: 'inline-flex'}}>
            <div style={{paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, background: '#3D64FD', borderTopLeftRadius: 32, borderTopRightRadius: 32, borderBottomRightRadius: 32, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div style={{color: '#F8F9FD', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Oh, hello! can u help us to improve this product ?</div>
            </div>
            <div style={{paddingTop: 4, paddingRight: 8, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{color: '#AFB8CF', fontSize: 13, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>04:45 PM</div>
            </div>
        </div>
    </div>
</div>
                          <textarea rows={5} style={{ width: '100%', border: '1px solid #E4E7E9', borderRadius: 10, padding: 10 }} placeholder="Text here..."></textarea>
                          <div style={{ display: 'flex',gap:'15px', width: '100%' ,justifyContent:'center'}}>
                            <button style={{ padding: '10px 60px', background: '#377BF7', border: 'none', borderRadius: 20, color: '#FFF' }}>
                              Send
                            </button>
                            <button style={{ padding: '10px 60px', background: 'white',color:'#377BF7', border: 'none', borderRadius: 20 }}
                            onClick={toggleVisibility}>
                              
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {view === "addProduct" && <div>Add Product Component</div>}
          {view === "exportData" && <div>Export Data Component</div>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
