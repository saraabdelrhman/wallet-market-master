import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: "Smartphones",
    icon: "fas fa-mobile-alt",
    subcategories: ["Samsung", "Apple", "OnePlus"],
    link: "/smartphones"  // This should match the route in App.js
  },
  {
    title: "Kitchen Appliances",
    icon: "fas fa-blender",
    subcategories: ["Refrigerators", "Ovens", "Blenders"],
    link: "/kitchen"  // This should match the route in App.js
  },
];

const Content = () => {
  return (
    <div className='container mt-5 mb-5' style={{ cursor: 'pointer' }}>
      <h3 className='fw-bold text-center mb-5 mt-5 '>Explore Categories</h3>
      <div className='row'>
        {categories.map((category, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 rounded-4">
              <div className="card-body">
                <h5 className="card-title">
                  <i className={category.icon + " me-2 text-warning"}></i>
                  {category.title}
                </h5>
                <ul className="list-group list-group-flush">
                  {category.subcategories.map((subcategory, subindex) => (
                    <li key={subindex} className="list-group-item">
                      <p className="text-dark mb-0">{subcategory}</p>
                    </li>
                  ))}
                </ul>
                <Link to={category.link} className="btn btn-danger mt-3">
                  Explore {category.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
