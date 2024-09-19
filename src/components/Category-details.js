import React, { useState } from "react";
import "./Category-details.css";
import icon from './images/akar-icons_search.png'
const categories = ["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"];
const subcategories = ["Nike", "Louis Vuitton", "Adidas", "Polo", "Gucci"];

const SidebarRadioGroup = ({ title, items, selected, onChange }) => (
  <div className="sidebar-section">
    <h3 className="sidebar-title">{title}</h3>
    <div className="radio-group">
      {items.map((item, index) => (
        <label key={index} className="radio-label">
          <input 
            type="radio" 
            name={title} 
            value={item} 
            checked={selected === item}
            onChange={onChange}
          />
          {item}
        </label>
      ))}
    </div>
  </div>
);

const ProductCard = ({ title, reviews }) => (
  <div className="product-card">
    <h3>{title}</h3>
    <div className="product-rating">
      <span className="stars">★★★★☆</span>
      <span>{reviews} Reviews</span>
    </div>
    <p>Responsive cushioning in the Pegasus provides an energized ride for everyday road running. Experience lighter-weight energy return with dual Air Zoom... <a href="#">read more</a></p>
  </div>
);

const ProductReviewPage = () => {
  const [category, setCategory] = useState("1 Star");
  const [subcategory, setSubcategory] = useState("Nike");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubcategoryChange = (e) => {
    setSubcategory(e.target.value);
  };

  return (
    <div className="container w-100">
      <header style={{backgroundColor:'#EEF5FF'}}>
        <h1 className="text-center mt-5 mb-5 fw-bold">Browse the best<br></br> product review</h1>
      </header>
      <div className="main-content ">
        <aside className="sidebar">
          <SidebarRadioGroup title="CATEGORY" items={categories} selected={category} onChange={handleCategoryChange} />
          <SidebarRadioGroup title="SUBCATEGORY" items={subcategories} selected={subcategory} onChange={handleSubcategoryChange} />
        </aside>
        <div className="product-list">
          <div className="search-sort">
          <div className="search-bar">
    <input type="text" placeholder="Search for anything..." />
    <img src={icon} alt="Search" />
  </div>
            <select className="d-flex">
              <option> sort by :Most Popular</option>
            </select>
          </div>
          {[...Array(5)].map((_, index) => (
            <ProductCard key={index} title="Nike Pegasus 41 PQ" reviews={8000} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductReviewPage;

