import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Style.css';
import { FaYoutube } from 'react-icons/fa';
// Importing images
import bali from './images/bali-indonesiajpg.jpg';
// import googleLogo from './images/google-logo.png'; // Example paths
// import facebookLogo from './images/facebook-logo.png';
// import youtubeLogo from './images/youtube-logo.png';
// import webflowLogo from './images/webflow-logo.png';
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
          <form onSubmit={handleSubmit} className="input-group my-3">
          <div className="search-bar" style={{ marginTop: "24px" }}>
   <div style={{ display: "flex", alignItems: "center", backgroundColor: "#f1f1f1", borderRadius: "50px", padding: "8px", position: "relative" }}>
    <img 
      src={searchIcon} 
      alt="Search Icon" 
      style={{ position: "absolute", left: "16px", width: "20px", height: "20px" }} 
    />
    <input
      type="text"
      placeholder="Search product, title, or brand"
      style={{ border: "0", background: "none", outline: "none", fontSize: "16px", padding: "8px 100px 8px 40px"}}
      onChange={handleSearchChange}
    />
    <button style={{ backgroundColor: "#3B82F6", color: 'white', border: "none", padding: "12px 24px", borderRadius: "50px", marginLeft: "8px", cursor: "pointer" }} onClick={handleSubmit}>
      Search
    </button>
    </div>
    </div>
          </form>
          <span className="text-body-tertiary">Supported by:</span>
          <div className="d-flex align-items-center mt-3 gap-3">
          
   <h5 className="text-secondary ">Google</h5>
   <h5 className="text-secondary ">Facebook</h5>
   <div className="d-flex">
   <FaYoutube className="text-secondary fs-3" />
   <h5 className="text-secondary ">Youtube</h5>
   </div>

   <h5 className="text-secondary ">Webflow</h5>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="col-md-5 position-relative">
            <img src={bali} className="card-img-top rounded-5 h-100" alt="Hotel Paradise, Bali" />
            <div className="card-body">
              <div style={{position:'absolute',bottom:'25%' , right:'0px',left:'30px'}}>
              <h4 className="card-title fw-bold text-light">Hotel Paradise, Bali</h4>
              <div className="d-flex align-items-center mt-3">
                <span className="me-2 text-warning bg-light rounded-5 ps-3 pe-3">★★★★☆</span>
              </div>
              </div>
              <div style={{width: '100%',marginTop:'25px', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 5, display: 'inline-flex'}}>
        <div style={{width: 10, height: 10, position: 'relative', transform: 'rotate(-180deg)', transformOrigin: '0 0', background: '#377BF7', borderRadius: 100}} />
        <div style={{width: 10, height: 10, position: 'relative', transform: 'rotate(-180deg)', transformOrigin: '0 0', background: 'rgba(55, 123, 247, 0.60)', borderRadius: 100}} />
        <div style={{width: 10, height: 10, position: 'relative', transform: 'rotate(-180deg)', transformOrigin: '0 0', background: 'rgba(55, 123, 247, 0.60)', borderRadius: 100}} />
    </div>
</div>
            </div>
         
        </div>
        <TopRate content={content} />
        <Trending content={content} />
        <Last></Last>
      </div>
    </div>
  );
};

export default Head;
