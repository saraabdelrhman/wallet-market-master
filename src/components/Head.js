import React from "react";
import img0 from './images/image 6.png';
import img1 from './images/image 6 (1).png';
import img2 from './images/image 6 (3).png';
import img3 from './images/image 6 (4).png';
import cup from './images/cup.png';
import threed from './images/3dcube.png';
import crown from './images/crown.png';
import shape from './images/Vector 2.png';
import status from './images/status-up.png';
import searchIcon from './images/akar-icons_search.png'; // Assuming you have a search icon image
import './Style.css'; // Ensure this file contains your styles for the page
import Categories from './Categories'

export const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Top Badge Section */}
      <div className="top-section">
        <div className="badge-container">
          <span className="badge text-center">
            <img src={cup} alt="icon" className="badge-icon" />
            TOP website rating in the world
          </span>
        </div>

        {/* Main Content Section with Left and Right Cards and Search Bar in the Middle */}
        <div className="main-content">
          {/* Left Column (Chen Liaw Reviews) */}
          <div className="left-cards">
            <div className="card chen-liaw">
              <img src={img0} alt="Chen Liaw" className="card-img" />
              <div className="card-content">
                <span className="name">Chen Liaw</span>
             
                <div className="rating text-warning ms-2">★★★★★</div>
              </div>
              <span className="date text-secondary">12 Jun 2023</span>
            </div>

            <div className="card chen-liaw">
              <img src={img1} alt="Chen Liaw" className="card-img" />
              <div className="card-content">
                <span className="name">Chen Liaw</span>
                
                <div className="rating text-warning ms-2">★★★★★</div>
              </div>
              <span className="date text-secondary">12 Jun 2023</span>
            </div>

            <div className="card chen-liaw">
              <img src={img2} alt="Chen Liaw" className="card-img" />
              <div className="card-content">
                <span className="name">Chen Liaw</span>
          
                <div className="rating text-warning ms-2">★★★★★</div>
              </div>
              <span className="date text-secondary">12 Jun 2023</span>
            </div>
          </div>

          {/* Center Search Bar */}
          <div className="content">
            <h1 className="title">Rate and Rely on the Products You Love</h1>
            <p className="subtitle">
              500,000 rating text-warning ms-2s by 100 valid user community, reviews by people like you.
            </p>

            <div className="search-bar">
              <div className="search-input-wrapper">
                <img src={searchIcon} alt="Search Icon" className="search-icon" />
                <input
                  type text-secondary="text"
                  placeholder="Search product, title, or brand"
                  className="search-input"
                />
                <button className="search-button">Search</button>
              </div>
            </div>

            <div className="reviews-summary">
              <div className="reviewers">
                <img src={img0} alt="Reviewer 1" className="reviewer-img" />
                <img src={img3} alt="Reviewer 2" className="reviewer-img" />
                <img src={img2} alt="Reviewer 3" className="reviewer-img" />
              </div>
              <span className="review-count">289,199 Reviews</span>
            </div>
          </div>

          {/* Right Column (Products/Hotels) */}
          <div className="right-cards">
            <div className="card">
              <img src={crown} alt="Hotel NYK" className="card-img" />
              <div className="card-content">
                <span className="name">Hotel NYK</span>
              
                <div className="rating text-warning ms-2">★★★★★</div>
              </div>
              <span className="type text-secondary ">Hotel</span>
            </div>

            <div className="card">
              <img src={status} alt="Nike 142" className="card-img" />
              <div className="card-content">
                <span className="name">Nike 142</span>
           
                <div className="rating text-warning ms-2">★★★★★</div>
              </div>
              <span className="type text-secondary ">Shoes</span>
            </div>

            <div className="card">
              <img src={threed} alt="Nike 256" className="card-img" />
              <div className="card-content">
                <span className="name">Nike 256</span>
           
                <div className="rating text-warning ms-2 text-warning">★★★★★</div>
              </div>
              <span className="type text-secondary">Shoes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-end justify-content-end w-100 shape">
      <img src={shape} alt='shape' className="hide-on-phone"></img>
      </div>
     
      <Categories></Categories>
    </div>
  
  );
};

export default HeroSection; 