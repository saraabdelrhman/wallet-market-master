import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Style.css';

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

import Trending from './Trending';
import TopRate from "./Top-rate";
import Content from "./Content";

const Head = ({content}) => {
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
    <div className="hero-section">
      <div className="top-section">
        <div className="badge-container" style={{ textAlign: "center", marginBottom: "16px" }}>
          <span className="badge" style={{ backgroundColor: "", padding: "8px 12px", borderRadius: "16px", fontWeight: "bold" }}>
            <img src={cup} alt="Top site badge icon" style={{ marginRight: "8px" }} />
            TOP website rating in the world
          </span>
        </div>

        <div className="main-content" style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left Cards */}
          <div className="left-cards d-none d-md-flex flex-column">
  {[img0, img1, img2].map((image, index) => (
    <div key={index} style={{ display: "flex", alignItems: "center", backgroundColor: "#fff", borderRadius: "12px", padding: "16px", marginBottom: "16px", boxShadow: "20px 50px 50px #FDE3FF", width: "100%" }}>
      <img src={image} alt="Chen Liaw" style={{ borderRadius: "50%", width: "48px", height: "48px", objectFit: "cover", marginRight: "16px" }} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: "18px", fontWeight: "600", color: "#1F1F2E" }}>Chen Liaw</span>
        <div style={{ fontSize: "14px", color: "#FFD700", marginBottom: "4px" }}>★★★★★</div>
        <span style={{ fontSize: "12px", color: "#B0B0B0" }}>12 Jun 2023</span>
      </div>
    </div>
  ))}
</div>
          

          {/* Main Content */}
          <div className="content" style={{ flex: "1", marginLeft: "32px" }}>
            <h1 className="title">{content["header-title"]}</h1>
            <p className="subtitle">
            {content["header-span"]}
            </p>

            <div className="search-bar" style={{ marginTop: "24px" }}>
  <div style={{ display: "flex", alignItems: "center", backgroundColor: "#f1f1f1", borderRadius: "50px",border:'1px solid #a0c4ff', padding: "8px", position: "relative" }}>
    <img 
      src={searchIcon} 
      alt="Search Icon" 
      style={{ position: "absolute", left: "16px", width: "20px", height: "20px" }} 
    />
    <input
      type="text"
      placeholder="Search product, title, or brand"
      style={{ border: "0", background: "none", outline: "none", fontSize: "16px", padding: "8px 16px 8px 40px", width: "100%" }}
      onChange={handleSearchChange}
    />
    <button style={{ backgroundColor: "#3B82F6", color: 'white', border: "none", padding: "12px 24px", borderRadius: "50px", marginLeft: "8px", cursor: "pointer" }} onClick={handleSubmit}>
      Search
    </button>
    </div>
    </div>
    <div className="d-flex justify-content-center gap-1">
    <img className=" rounded-circle" src={img0} style={{width:'30px'}}></img>
    <img className=" rounded-circle" style={{width:'30px'}} src={img2}></img>
    <img className=" rounded-circle"style={{width:'30px'}} src={img1}></img>
    <div className="mt-3" style={{color: '#0B0A2F', fontSize: 15.75, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}> 289,199 Review </div>
    </div>
    
    </div>


     
          {/* Right Cards */}
          <div className="right-cards d-none d-md-flex flex-column">
  {[{ img: crown, name: "Hotel NYK" }, { img: status, name: "Nike 142" }, { img: threed, name: "Nike 256" }].map((product, index) => (
    <div key={index} style={{ display: "flex", alignItems: "center", backgroundColor: "#fff", borderRadius: "12px", padding: "16px", marginBottom: "16px", boxShadow: "20px 50px 50px #DEDFFF", width: "100%" }}>
      <img src={product.img} alt={product.name} style={{ width: "48px", height: "48px", marginRight: "16px" }} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: "18px", fontWeight: "600", color: "#1F1F2E" }}>{product.name}</span>
        <div style={{ fontSize: "14px", color: "#FFD700", marginBottom: "4px" }}>★★★★★</div>
        <span style={{ fontSize: "12px", color: "#B0B0B0" }}>{product.name.includes("Hotel") ? "Hotel" : "Shoes"}</span>
      </div>
    </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end", width: "100%", marginTop: "32px" }}>
        <img src={shape} alt="Decorative Shape" style={{ display: "none", visibility: "hidden" }} />
      </div>
      <Content content={content}></Content>
      <Trending content={content}/>
      <TopRate content={content} />
    </div>
  );
};

export default Head;
