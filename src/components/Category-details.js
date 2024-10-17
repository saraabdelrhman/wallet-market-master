import React, { useState, useEffect } from "react"; // Added useEffect import
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <div>
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

      <div className="main-content mt-5">
        <>
          {/* Sidebar (will be hidden on mobile) */}
          {!isMobile && (
            <aside className="sidebar mt-5 pe-5 ps-3 pt-4 pb-4 rounded-5">
              <SidebarRadioGroup
                title="CATEGORY"
                items={categories}
                selected={category}
                onChange={handleCategoryChange}
                className='rightside'
              />
              <SidebarRadioGroup
                title="SUBCATEGORY"
                items={subcategories}
                selected={subcategory}
                onChange={handleSubcategoryChange}
                className='leftside'
              />
            </aside>
          )}

          {/* Filters (both category and subcategory) shown on mobile */}
          {isMobile && (
            <div className="d-flex ms-2 mt-3 align-items-center">
              <select
                className="ps-3 pt-3 pb-3 pe-3 text-secondary me-2"
                style={{ border: '1px solid #e4e7e9' }}
                onChange={handleCategoryChange}
              >
                <option value="">Filter by Category</option>
                {categories.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>

              <select
                className="ps-3 pt-3 pb-3 pe-3 text-secondary me-2"
                style={{ border: '1px solid #e4e7e9' }}
                onChange={handleSubcategoryChange}
              >
                <option value="">Filter by Subcategory</option>
                {subcategories.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>

              {/* Search bar for mobile */}
             
            </div>
          )}
        </>

        <div className="product-list mt-5">
          <div className="search-sort d-flex justify-content-between align-items-center">
            <div className="search-bar d-flex align-items-center">
              <input
                type="text"
                placeholder="Search for anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
                className="me-2 pt-2 pb-2 pe-2"
              />
              <img src={icon} alt="Search" />
            </div>

            <div className="d-flex align-items-center">
              <span className="mt-3 me-2 mb-4 sortby">sort by:</span>
              <select className="ps-3 pe-3 pt-3 pb-3 mb-3 text-secondary" style={{ border: '1px solid #e4e7e9' }}>
                <option>Most Popular</option>
                {/* Add other sorting options here if needed */}
              </select>
            </div>
          </div>

          <div className="filter-bar">
            <div className="active-filters">
              <div style={{ color: '#5F6C72' }}>Active Filters:</div>
              <div className="filter-item">
                <div>{subcategory}</div>
                <div style={{ color: '#5F6C72' }}>
                  <div>X</div>
                </div>
              </div>
              <div className="filter-item">
                <div>{category} Rating</div>
                <div style={{ color: '#5F6C72' }}>
                  <div style={{ fontSize: '14' }}>x</div>
                </div>
              </div>
            </div>
            <div className="result-count">
              <span className="count">{filteredProducts.length}</span> Results found.
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
