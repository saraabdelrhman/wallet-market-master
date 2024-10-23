import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Edit3 } from "react-feather";
import "./Profile.css";
import defaultImg from "./images/unsplash_xZSEvSlHRv8.png";
import dot from './images/Group 48097650.png';
import shape from './images/Group 9.png';
import icon from './images/Icons.png';
import rec from './images/Rectangle 1.png';
import messagesIcon from './images/text.png';
import config from "../Config"; // Assuming you have this config for API URL

const Profile = ({ content, role, userId }) => {
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
  const [messages, setMessages] = useState([]); // State for storing messages
  const [unreadCount, setUnreadCount] = useState(0); // Unread messages count

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

  useEffect(() => {
    // Fetch messages if user is a business user
    const fetchMessages = async () => {
      try {
        // Show fake messages first (if needed)
        const fakeMessages = [
          {
            id: 1,
            sender: "Ammi Watts",
            text: "Oh, hello! Can you help us to improve this product?",
            read: false,
          },
        ];
        setMessages(fakeMessages);
        setUnreadCount(fakeMessages.filter((n) => !n.read).length);

        // Now, fetch the real messages from API for business users only
        if (role === 'business') {
          const response = await fetch(`${config.apiUrl}/messages/conversation/${userId}`, {
            method: 'GET', // Assuming GET is the correct method for fetching messages
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });

          if (!response.ok) throw new Error('Failed to fetch messages');

          const data = await response.json();

          // Replace the fake messages with real data
          setMessages(data.messages);
          setUnreadCount(data.messages.filter((n) => !n.read).length);
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [userId, role]);

  const handleSendMessage = () => {
    if (role !== 'business') {
      // If the user is not a business user, show an alert
      alert("Messaging is only available for business users.");
    } else {
      // Handle message sending logic for business users
      alert("Message sent successfully!");
    }
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
            <Link to="#" className={getLinkClass("profile")} onClick={() => setView("profile")}>  {content["profile"]}</Link>
            <Link to="#" className={getLinkClass("addProduct")} onClick={() => setView("addProduct")}>  {content["add-product"]}</Link>
            <Link to="#" className={getLinkClass("exportData")} onClick={() => setView("exportData")}>  {content["export"]}</Link>
          </div>

          {view === "profile" && (
            <div className="mb-5" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="profile-image-container">
                <div className="row">
                  <div className="col-md-4 col-sm-12 d-flex justify-content-center mb-3">
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
                      <div
                        className="change-photo-icon"
                        onClick={handleProfilePictureUpload}
                        style={{
                          position: 'absolute',
                          left: '100px',
                          bottom: '35px',
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

                        <input
                          id="file-input"
                          type="file"
                          onChange={handleFileChange}
                          style={{ display: 'none' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-12">
                    <div className="profile-info ms-5">
                      <p><span>Name:</span> {user.name}</p>
                      <p><span>Email:</span> {user.email}</p>
                      <p><span>Created:</span> {user.joinDate}</p>
                      <p><span>Bio:</span> {user.bio}</p>
                    </div>
                    <Link to={'/editprofile'} className="no-underline">
                      <button className="edit-profile-button ps-5 ms-5 pe-5">
                        <Edit3 /> Edit profile
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="profile-details">
                <div
                  style={{
                    width: '100%',
                    paddingTop: '30px',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 30,
                    display: 'inline-flex',
                  }}
                >
                  <div
                    style={{
                      alignSelf: 'stretch',
                      color: 'black',
                      fontSize: 22,
                      fontFamily: 'Poppins',
                      fontWeight: 500,
                      lineHeight: '30px',
                      wordWrap: 'break-word',
                    }}
                  >
                    Review Alert
                  </div>

                  <div className="paddin"
                    style={{
                      paddingTop: 24,
                      paddingLeft: 5,
                      paddingRight: 5,
                      background: 'white',
                      borderRadius: 24,
                      border: '1px solid #B3261E',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      gap: 8,
                      display: 'flex',
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: 21,
                        display: 'inline-flex',
                      }}
                    >
                      <div
                        style={{
                          flex: '1 1 0',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                          gap: 24,
                          display: 'inline-flex',
                        }}
                      >
                        <div style={{ alignSelf: 'stretch', height: 83 }}>
                          <span
                            style={{
                              color: 'black',
                              fontSize: 16,
                              fontFamily: 'Poppins',
                              fontWeight: 400,
                              lineHeight: '28px',
                              wordWrap: 'break-word',
                            }}
                          >
                            The cushioning in the Pegasus felt disappointing and lacked the responsiveness I expected for road running. Despite the promise of an energized ride...
                          </span>
                          <span
                            style={{
                              color: '#B3261E',
                              fontSize: 16,
                              fontFamily: 'Poppins',
                              fontWeight: 400,
                              lineHeight: '28px',
                              wordWrap: 'break-word',
                            }}
                          >
                            read more<br />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Button for All Users */}
                  <div
                    style={{
                      position: 'relative',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: '20px' // Adjusted for spacing
                    }}
                  >
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
                        backgroundColor: 'white',
                        color: '#377BF7',
                      }}
                    >
                      <div style={{ width: 24, height: 24, position: 'relative' }}>
                        <img
                          src={messagesIcon}
                          style={{ width: 20, height: 20, left: 2, top: 2, position: 'absolute' }}
                          alt="messages icon"
                        />
                      </div>
                      <div
                        style={{
                          fontSize: 18,
                          fontFamily: 'Poppins',
                          fontWeight: 500,
                          textTransform: 'capitalize',
                          lineHeight: '24px',
                          wordWrap: 'break-word',
                        }}
                      >
                        Message
                      </div>
                    </button>
                  </div>

                  {/* Message Modal */}
                  {isVisible && (
                    <div
                      style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onClick={toggleVisibility}
                    >
                      <div
                        style={{
                          width: '80%',
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
                        <div
                          style={{
                            width: '100%',
                            height: '100%',
                            paddingTop: 8,
                            paddingBottom: 8,
                            background: 'rgba(55, 123, 247, 0.20)',
                            borderRadius: 24,
                            display: 'inline-flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 14,
                          }}
                        >
                          <div
                            style={{
                              height: '41px',
                              textAlign: 'center',
                              color: 'black',
                              fontSize: 28,
                              fontFamily: 'DM Sans',
                              fontWeight: '700',
                              zIndex: '2',
                            }}
                          >
                            Message
                          </div>
                        </div>

                        <div
                          style={{
                            width: '100%',
                            flexDirection: 'column',
                            gap: 40,
                            display: 'inline-flex',
                          }}
                        >
                          <div
                            style={{
                              paddingLeft: 24,
                              paddingRight: 24,
                              paddingTop: 16,
                              paddingBottom: 16,
                              borderBottom: '0.25px #AFB8CF solid',
                              display: 'inline-flex',
                            }}
                          >
                            <div
                              style={{
                                flex: '1 1 0',
                                height: 35,
                                display: 'flex',
                                gap: 8,
                              }}
                            >
                              <img
                                style={{ width: 35, height: 35, borderRadius: 8 }}
                                src={rec}
                                alt="profile"
                              />
                              <div
                                style={{
                                  color: '#636363',
                                  fontSize: 14,
                                  fontFamily: 'Inter',
                                  fontWeight: '600',
                                  wordWrap: 'break-word',
                                }}
                              >
                                Ammi Watts
                              </div>
                            </div>
                          </div>

                          <div
                            style={{
                              width: '100%',
                              paddingBottom: 17,
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 8,
                            }}
                          >
                            <div
                              style={{
                                width: '50%',
                                height: 'auto', // Let the height adjust dynamically
                                paddingLeft: 24,
                                marginLeft: '50%', // Align it to the right
                                paddingRight: 24,
                                paddingTop: 16,
                                paddingBottom: 16,
                                background: '#3D64FD',
                                borderTopLeftRadius: 32,
                                borderTopRightRadius: 32,
                                borderBottomLeftRadius: 32, // Add the missing corner radius for message bubble effect
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: 10,
                                display: 'inline-flex',
                                color: '#F8F9FD', // Text color for readability
                                fontFamily: 'Inter',
                                fontSize: 12,
                              }}
                            >
                              <div
                                style={{
                                  color: '#F8F9FD',
                                  fontSize: 12,
                                  fontFamily: 'Inter',
                                  fontWeight: '400',
                                  wordWrap: 'break-word',
                                }}
                              >
                                Oh, hello! Can you help us to improve this product?
                              </div>
                            </div>

                            <input
                              placeholder="Text here..."
                              style={{
                                border: 'none',
                                color: '#1e1e1e',
                                borderRadius: 15,
                                marginTop: '20px',
                                padding: '50px 20px',
                                outline: 'none',
                                width: '100%',
                                fontSize: 18,
                              }}
                              // Custom styles for the placeholder text
                              placeholderStyle={{
                                color: '#1e1e1e',
                                fontWeight: '100', // Lighter font weight for the placeholder
                              }}
                            />

                            <div className="d-flex justify-content-center">
                              <button
                                style={{
                                  padding: '12px 40px',
                                  borderRadius: 24,
                                  background: '#377BF7',
                                  color: 'white',
                                  border: 'none',
                                  fontSize: 16,
                                  fontFamily: 'Poppins',
                                  cursor: 'pointer',
                                }}
                                onClick={handleSendMessage} // Handle message sending
                              >
                                Send
                              </button>
                              <button
                                style={{
                                  padding: '12px 40px',
                                  marginLeft: '12px',
                                  borderRadius: 24,
                                  color: '#377BF7',
                                  border: '2px solid #377BF7',
                                  backgroundColor: 'transparent',
                                  fontSize: 16,
                                  fontFamily: 'Poppins',
                                  cursor: 'pointer',
                                }}
                                onClick={toggleVisibility}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {view === "addProduct" && (
            <div className="addproduct">
              <div
                style={{
                  width: '100%',
                  padding: '20px 10px',
                  margin: '20px 10px',
                  background: '#F5F7FE',
                  borderRadius: 25,
                  border: '1px #E4E7E9 solid',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    flex: '1',
                    maxWidth: '1400px',
                    background: '#F5F7FE',
                    borderRadius: 25,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 32,
                  }}
                >
                  <div style={{ textAlign: 'center', fontSize: 24, fontFamily: 'Poppins', fontWeight: '500' }}>
                    Add Product
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label style={{ color: '#0A090B', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600' }}>Name</label>
                    <input
                      type="text"
                      placeholder="Product Name"
                      style={{
                        width: '100%',
                        height: 48,
                        padding: '2px 8px',
                        background: 'white',
                        borderRadius: 8,
                        border: '1px #E6E8EC solid',
                        fontSize: 16,
                        fontFamily: 'Poppins',
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label style={{ color: '#0A090B', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600' }}>Category</label>
                    <select
                      style={{
                        width: '100%',
                        height: 48,
                        padding: '12px 18px',
                        background: 'white',
                        borderRadius: 8,
                        border: '1px #E6E8EC solid',
                        fontSize: 16,
                        fontFamily: 'Poppins',
                      }}
                    >
                      <option value="">Select Category</option>
                    </select>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label style={{ color: '#0A090B', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600' }}>Description</label>
                    <textarea
                      placeholder="Product Description"
                      style={{
                        width: '100%',
                        height: 143,
                        padding: '12px 18px',
                        background: 'white',
                        borderRadius: 8,
                        border: '1px #E6E8EC solid',
                        fontSize: 16,
                        fontFamily: 'Poppins',
                      }}
                    />
                  </div>

                  <button
                    style={{
                      height: 46,
                      background: '#377BF7',
                      borderRadius: 30,
                      color: 'white',
                      border: 'none',
                      fontSize: 15,
                      fontFamily: 'Inter',
                      cursor: 'pointer',
                      padding: '12px 16px',
                      alignSelf: 'center',
                    }}
                  >
                    Add Product
                  </button>
                </div>
              </div>
            </div>
          )}

          {view === "exportData" && (
            <div style={{
              width: '100%',
              height: '100%',
              paddingLeft: 32,
              paddingRight: 32,
              paddingTop: 50,
              paddingBottom: 50,
              background: '#F5F7FE',
              borderRadius: 25,
              border: '1px solid #E4E7E9',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{
                maxWidth: 552,
                width: '100%',
                flexDirection: 'column',
                display: 'flex',
                alignItems: 'center',
                gap: 40
              }}>
                <div style={{
                  alignSelf: 'stretch',
                  height: 145,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 17
                }}>
                  <div style={{ width: 86, height: 80, position: 'relative' }}>
                    <img src={messagesIcon} style={{ width: 60.54, height: 71.79, position: 'absolute', left: 12.73, top: 4.11 }} alt="Messages Icon" />
                  </div>
                  <div style={{
                    alignSelf: 'stretch',
                    height: 48,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 6
                  }}>
                    <div style={{
                      textAlign: 'center',
                      color: '#474545',
                      fontSize: 16,
                      fontFamily: 'Poppins',
                      fontWeight: '600'
                    }}>Export your data</div>
                    <div style={{
                      textAlign: 'center',
                      color: '#838E9E',
                      fontSize: 12,
                      fontFamily: 'Poppins',
                      fontWeight: '400'
                    }}>Data will export by Excel</div>
                  </div>
                </div>
                <div style={{
                  alignSelf: 'stretch',
                  height: 46,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 8
                }}>
                  <div style={{ width: 189, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 27 }}>
                    <div style={{ flex: 1, height: 46 }}>
                      <div style={{ flex: 1, height: 46, borderRadius: 30, display: 'flex' }}>
                        <div style={{
                          flex: 1,
                          paddingLeft: 16,
                          paddingRight: 16,
                          paddingTop: 14,
                          paddingBottom: 14,
                          background: '#377BF7',
                          borderRadius: 30,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: 10
                        }}>
                          <div style={{
                            textAlign: 'center',
                            color: 'white',
                            fontSize: 15,
                            fontFamily: 'Inter',
                            fontWeight: '600',
                            letterSpacing: '0.07em'
                          }}>Export</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ flex: 1, background: '#F5F7FE' }}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
