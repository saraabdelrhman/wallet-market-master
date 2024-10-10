import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Importing images directly
import smartphoneImage from './images/BG.png';
import kitchenImage from './images/BG (2).png';
import fashionImage from './images/BG (4).png';
import financeImage from './images/BG (1).png';
import carsImage from './images/BG (3).png';
import laptopsImage from './images/BG (1).png'; // same image as finance
import shape from './images/zgzg-removebg-preview.png';
import shape2 from './images/zgzg-left.png';

const Categories = ({ content }) => {
  const categories = [
    {
      name: 'Smartphones',
      image: smartphoneImage,
      items: ['Apple', 'Samsung', 'OnePlus', 'Xiaomi'],
    },
    {
      name: 'Kitchen',
      image: kitchenImage,
      items: ['Microwave', 'Blenders', 'Dishwasher', 'Refrigerator'],
    },
    {
      name: 'Fashion',
      image: fashionImage,
      items: ['Nike', 'Louis V', 'Adidas', 'Polo'],
    },
    {
      name: 'Finance',
      image: financeImage,
      items: ['American Digital Bank', 'SolarisBank', 'O2 Banking', 'Penta'],
    },
    {
      name: 'Cars',
      image: carsImage,
      items: ['Tesla', 'Toyota', 'BYD', 'Honda'],
    },
    {
      name: 'Laptops',
      image: laptopsImage,
      items: ['MacBook', 'Dell', 'HP', 'Lenovo'],
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.items.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="container my-4">
      
      <img src={shape2} alt="shape" className="d-none d-md-block position-absolute" style={{ top: '250px', left: '0', width: '300px', zIndex: '-1' }} />
      <img src={shape} alt="shape" className="d-none d-md-block position-absolute" style={{ top: '100px', right: '0', width: '300px', zIndex: '-1' }} />
      <div className="row ">
        <div className="col-12 text-center mb-3">
          <h2 className='mt-5 mb-3' style={{color: 'black', fontSize: 30, fontFamily: 'Helvetica', fontWeight: '700', wordWrap: 'break-word'}}>
            {content["catrgory-title"]}
          </h2>
          <div className="input-group mb-3" style={{ maxWidth: '600px', margin: 'auto' }}>
            <span className="input-group-text bg-white border-end-0"><FaSearch /></span>
            <input
              type="text" 
              className="form-control border-start-0 p-3 rounded-3"
              placeholder={content["category-search"]}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="col-12 mb-3 mt-5 pt-5">
          <h3 className="text-start  fw-bolder">{content["category-search"]}</h3>
        </div>

        <div className="col-12">
          <div className="row g-4">
            {filteredCategories.length > 0 ? filteredCategories.map((category) => (
              <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch " key={category.name}>
              
                <div className="card  text-center p-3 w-100 d-flex justify-content-center align-items-center">
                  <img src={category.image} className="card-img-top mx-auto" style={{ width: '100px', height: '100px', borderRadius: '50%' }} alt={category.name} />
                  
                  <div className="card-body d-flex flex-column justify-content-center align-items-center p-2 ">
                    <h5 className="card-title fw-bolder">{category.name}</h5>
                    
                    <ul className="list-unstyled">
                      {category.items.map((item) => <li key={item} style={{lineHeight:'45px'}}>{item}<hr></hr></li>)}
                    </ul>
                    <Link to="/categoriesdetails" className="btn btn-outline-primary">{content["more"]}</Link>
                  </div>
                </div>
              </div>
            )) : (
              <div className="col-12 text-center">
                <p>No categories or companies found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
