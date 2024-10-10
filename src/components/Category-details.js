import React, { useState } from "react";
import "./Category-details.css";
import icon from './images/akar-icons_search.png';
import { Link } from "react-router-dom";
import shape from './images/zgzg-removebg-preview.png';
import shape2 from './images/zgzg-left.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing the arrow icons

const categories = ["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"];
const subcategories = ["Nike", "Louis Vuitton", "Adidas", "Polo", "Gucci"];

const ProductReviewPage = ({ content }) => {
  const [category, setCategory] = useState("1 Star");
  const [subcategory, setSubcategory] = useState("Nike");
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    { title: "Nike Pegasus 41 PQ", reviews: 8000 },
    { title: "Adidas Boost Pro", reviews: 5000 },
    { title: "Louis Vuitton Runner", reviews: 3000 },
    { title: "Polo Sport Max", reviews: 4000 },
    { title: "Gucci Flex Run", reviews: 2000 }
  ];

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubcategoryChange = (e) => {
    setSubcategory(e.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const SidebarRadioGroup = ({ title, items, selected, onChange }) => (
    <div className="sidebar-section">
      <h6 className="sidebar-title">{title}</h6>
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
      <div className="me-2 d-flex align-items-end justify-content-end">
        <Link to={'/reviews'}>
          <button className="btn rounded-5 me-2" style={{ backgroundColor: '#3B82F6', color: 'white' }}>
            {content["see-reviews"]}
          </button>
        </Link>
        <button className="btn rounded-5" style={{ borderColor: '#3B82F6', color: '#3B82F6' }}>
          {content["write-review"]}
        </button>
      </div>
      <div className="">
        <span className="stars me-3" style={{ fontSize: '20px' }}>★★★★☆</span>
        <span style={{ color: '#77878F' }}>{reviews} Reviews</span>
      </div>
      <p>Responsive cushioning in the Pegasus provides an energized ride for everyday road running. <a href="#">read more</a></p>
    </div>
  );

  return (
    <div className="container w-100">
      <header>
        <img
          src={shape2}
          alt="shape"
          className='d-none d-md-flex'
          style={{
            position: 'absolute',
            top: '200px',
            left: '0',
            width: '300px',
            zIndex: '1',
          }}
        />
        <img
          src={shape}
          alt="shape"
          className='d-none d-md-flex'
          style={{
            position: 'absolute',
            top: '80px',
            right: '0',
            width: '300px',
            zIndex: '1',
          }}
        />
      <div className='d-flex justify-content-center align-items-center'>
    <h1 className="text-center mt-5 mb-5 fw-bold w-75">{content["best-rated"]}</h1>
</div>

      </header>

      <div className="main-content">
        <aside className="sidebar">
          <SidebarRadioGroup title="CATEGORY" items={categories} selected={category} onChange={handleCategoryChange} />
          <SidebarRadioGroup title="SUBCATEGORY" items={subcategories} selected={subcategory} onChange={handleSubcategoryChange} />
        </aside>

        <div className="product-list">
          <div className="search-sort">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search for anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}  // Update search query state
              />
              <img src={icon} alt="Search" />
            </div>

            <select className="d-flex ms-2">
              <option>sort by: Most Popular</option>
            </select>
          </div>

          <div className="filter-bar">
            <div className="active-filters">
              <div style={{ color: '#5F6C72' }}>Active Filters:</div>
              <div className="filter-item">
                <div>Nike</div>
                <div style={{ color: '#5F6C72' }}>
                  <div>X</div>
                </div>
              </div>
              <div className="filter-item">
                <div>4 Star Rating</div>
                <div style={{ color: '#5F6C72' }}>
                  <div style={{ fontSize: '14' }}>x</div>
                </div>
              </div>
            </div>
            <div className="result-count">
              <span className="count">65,867</span> Results found.
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={index} title={product.title} reviews={product.reviews} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductReviewPage;
