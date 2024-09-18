import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; // Corrected import
import './Style.css'; // Ensure the CSS file name is correct and located in the proper directory

// Importing images
import img0 from './images/image 6.png';
import img1 from './images/image 6 (1).png';
import img2 from './images/image 6 (3).png';
import cup from './images/cup.png';
import threed from './images/3dcube.png';
import crown from './images/crown.png';
import shape from './images/Vector 2.png';
import status from './images/status-up.png';
import searchIcon from './images/akar-icons_search.png';

import Categories from './Categories';
import Trending from './Trending';
import TopRate from "./Top-rate";

const Head = () => {
  const [search, setSearch] = useState(""); // Correct naming convention for state
  const [searchData, setSearchData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (search !== "") {
      // Assuming you have a valid URL and proper backend setup to handle the fetch request
      fetch(`https://Wallyt.com/search?query=${search}`) 
        .then(res => {
          if (!res.ok) {
            throw new Error('Product not found');
          }
          return res.json();
        })
        .then(data => setSearchData(data.products))
        .catch(error => console.error(error.message));
    }
  }, [search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleProductClick = (id) => {
    navigate(`/products/${id}`); // Correct URL path
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: Add function logic if needed for submitting search
  };

  return (
    <div className="hero-section">
      <div className="top-section">
        <div className="badge-container">
          <span className="badge text-center">
            <img src={cup} alt="Top site badge icon" className="badge-icon" />
            TOP website rating in the world
          </span>
        </div>

        <div className="main-content">
          <div className="left-cards">
            {[img0, img1, img2].map((image, index) => (
              <div className="card chen-liaw" key={index}>
                <img src={image} alt="Chen Liaw" className="card-img" />
                <div className="card-content">
                  <span className="name">Chen Liaw</span>
                  <div className="rating text-warning ms-2">★★★★★</div>
                </div>
                <span className="date text-secondary">12 Jun 2023</span>
              </div>
            ))}
          </div>

          <div className="content">
            <h1 className="title">Rate and Rely on the Products You Love</h1>
            <p className="subtitle">
              500,000 ratings by 100 valid user community, reviews by people like you.
            </p>

            <div className="search-bar">
              <div className="search-input-wrapper">
                <img src={searchIcon} alt="Search Icon" className="search-icon" />
                <input
                  type="text"
                  placeholder="Search product, title, or brand"
                  className="search-input"
                  onChange={handleSearchChange}
                />
                <button className="search-button" onClick={handleSubmit}>Search</button>
              </div>
            </div>
          </div>

          <div className="right-cards">
            {[{ img: crown, name: "Hotel NYK" }, { img: status, name: "Nike 142" }, { img: threed, name: "Nike 256" }].map((product, index) => (
              <div className="card" key={index}>
                <img src={product.img} alt={product.name} className="card-img" />
                <div className="card-content">
                  <span className="name">{product.name}</span>
                  <div className="rating text-warning ms-2">★★★★★</div>
                </div>
                <span className="type text-secondary">{product.name.includes("Hotel") ? "Hotel" : "Shoes"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="d-flex align-items-end justify-content-end w-100 shape">
        <img src={shape} alt='Decorative Shape' className="hide-on-phone" />
      </div>
      <Categories />
      <Trending />
      <TopRate />
    </div>
  );
};

export default Head; // Ensure the component name matches the filename if using default export
