import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Style.css';
import { FaYoutube } from 'react-icons/fa';
// Importing images
import bali from './images/bali-indonesiajpg.jpg';
import searchIcon from './images/akar-icons_search.png';
import TopRate from './Top-rate';
import Trending from "./Trending"
import Last from "./Last";

const Head = ({ content }) => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (search !== "") {
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
    navigate(`/products/${id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center gap-5">
        {/* Left Section - Text and Search */}
        <div className="col-md-6 ">
          <h1 className="display-4 fw-bold">{content["header-title"]}</h1>
          <p className="lead text-secondary">
            {content["header-span"]}
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="input-group my-3">
            <div className="position-relative search-bar" style={{ marginTop: "24px", width: '100%' }}>
              <img
                src={searchIcon}
                alt="Search Icon"
                style={{
                  position: "absolute",
                  left: "10px",
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
                  padding: "20px 100px 20px 40px", // Adjust padding for icon and button
                  width: "100%",
                  fontSize: "16px"
                }}
                onChange={handleSearchChange}
              />
              <button className="btn btn-primary rounded-5 position-absolute ps-4 pe-4  pt-3 pb-3" style={{ right: '0px', top: '20%', transform: 'translateY(-50%)' }} type="button">
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

        {/* Right Section - Image */}
        <div className="col-md-5 position-relative">
          <img src={bali} className="card-img-top rounded-5 h-100" alt="Hotel Paradise, Bali" />
          <div className="card-body">
            <div style={{ position: 'absolute', bottom: '25%', right: '0px', left: '30px' }}>
              <h4 className="card-title fw-bold text-light">Hotel Paradise, Bali</h4>
              <div className="d-flex align-items-center mt-3">
                <span className="me-2 text-warning bg-light rounded-5 ps-3 pe-3">★★★★☆</span>
              </div>
            </div>
            <div style={{ width: '100%', marginTop: '25px', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
              <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 5, display: 'inline-flex' }}>
                <div style={{ width: 10, height: 10, position: 'relative', transform: 'rotate(-180deg)', transformOrigin: '0 0', background: '#377BF7', borderRadius: 100 }} />
                <div style={{ width: 10, height: 10, position: 'relative', transform: 'rotate(-180deg)', transformOrigin: '0 0', background: 'rgba(55, 123, 247, 0.60)', borderRadius: 100 }} />
                <div style={{ width: 10, height: 10, position: 'relative', transform: 'rotate(-180deg)', transformOrigin: '0 0', background: 'rgba(55, 123, 247, 0.60)', borderRadius: 100 }} />
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
