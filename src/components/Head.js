import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Style.css';
import { FaYoutube } from 'react-icons/fa';
// Importing images
import bali from './images/bali-indonesiajpg.jpg';
import bali2 from './images/balihotel2.jpg';
import bali3 from './images/balihotel3.jpg';
import searchIcon from './images/akar-icons_search.png';
import TopRate from './Top-rate';
import Trending from "./Trending";
import Last from "./Last";

const images = [bali, bali2, bali3]; // Array of images

const Head = ({ content }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Index of the current image
  const navigate = useNavigate();

  // Function to handle dot click
  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Handle touch events for swiping
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX; // Get initial touch position
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX; // Update touch position
  };

  const handleTouchEnd = () => {
    if (touchStartX > touchEndX + 50) {
      // Swipe left
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Move to next image
    } else if (touchStartX < touchEndX - 50) {
      // Swipe right
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Move to previous image
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center gap-5">
        {/* Left Section - Text and Search */}
        <div className="col-md-6 ">
          <h1 className="display-4 fw-bold">{content["header-title"]}</h1>
          <p className="lead text-secondary">{content["header-span"]}</p>

          {/* Search Bar */}
          <form onSubmit={(e) => e.preventDefault()} className="input-group my-3">
            <div className="position-relative search-bar" style={{ marginTop: "24px", width: '100%' }}>
              <img
                src={searchIcon}
                alt="Search Icon"
                style={{
                  position: "absolute",
                  left: "6px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "20px",
                  height: "20px"
                }}
              />
              <input
                type="text"
                placeholder="Search product, title, or brand"
                style={{
                  border: "0px solid #ccc",
                  background: "#eef5ff",
                  outline: "none",
                  borderRadius: "50px",
                  padding: "20px 0px 20px 25px", // Adjust padding for icon and button
                  width: "100%",
                  fontSize: "16px"
                }}
              />
              <button className="btn search-button btn-primary rounded-5 position-absolute ps-4 pe-4 pt-3 pb-3" style={{ right: '-2px', top: '20%', transform: 'translateY(-50%)' }} type="button">
                Search
              </button>
            </div>
          </form>

          <div>
            <span className="text-body-tertiary">Supported by:</span>
            <div className="d-flex align-items-center flex-wrap mt-3 gap-2 support-list">
              <h6 className="text-body-tertiary fw-bolder">Google</h6>
              <h6 className="text-body-tertiary fw-bolder">Facebook</h6>
              <div className="d-flex align-items-center">
                <FaYoutube className="text-body-tertiary fs-2 mb-2" />
                <h6 className="text-body-tertiary fw-bolder">Youtube</h6>
              </div>
              <h6 className="text-body-tertiary fw-bolder">Webflow</h6>
            </div>
          </div>
        </div>

        <div className="col-md-5 position-relative"
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd}>
          <img src={images[currentImageIndex]} className="bali rounded-5 img-fluid" alt="Hotel Paradise, Bali" style={{ height: '400px', maxWidth: '100%' }} />

          <div className="card-body">
            <div style={{ position: 'absolute', bottom: '25%', right: '0px', left: '30px' }}>
              <h4 className="card-title fw-bold text-light">Hotel Paradise, Bali</h4>
              <div className="d-flex align-items-center mt-3">
                <span className="me-2 text-warning bg-light rounded-5 ps-3 pe-3">★★★★☆</span>
              </div>
            </div>
            <div style={{ width: '100%', marginTop: '25px', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
              <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 5, display: 'inline-flex' }}>
                {images.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 100,
                      background: currentImageIndex === index ? '#377BF7' : 'rgba(55, 123, 247, 0.60)', // Change color based on active state
                      cursor: 'pointer'
                    }}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <TopRate content={content} />
        <Trending content={content} />
        <Last />
      </div>
    </div>
  );
};

export default Head;
