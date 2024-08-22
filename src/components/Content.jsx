import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Content.css';  // Import the custom CSS file

const categories = [
  {
    title: "Smartphones",
    icon: "fas fa-mobile-alt",
    subcategories: ["Samsung", "Apple", "OnePlus"],
    link: "/smartphones"
  },
  {
    title: "Kitchen Appliances",
    icon: "fas fa-blender",
    subcategories: ["Refrigerators", "Ovens", "Blenders"],
    link: "/kitchen"
  },
];

const Content = () => {
  return (
    <div className="container mt-5 mb-5">
     <h3 className="fw-bold text-center mb-5 mt-5">
  <i className="fas fa-th icon"></i> {/* Using grid icon */}
  Explore Categories
</h3>

      <div className="row">
        {categories.map((category, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-1">
            <div className="card h-100 shadow-sm border-0 rounded-4 hover-shadow">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <i className={`${category.icon} me-3 text-primary fs-2`}></i>
                  <h5 className="card-title mb-0 text-uppercase">{category.title}</h5>
                </div>
                <ul className="list-group list-group-flush  ms-3 mb-3">
                  {category.subcategories.map((subcategory, subindex) => (
                    <li key={subindex} className="list-group-item border-0 px-0 py-1">
                      <span className="text-muted">{subcategory}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto ms-3 ms-2">
                  <Link to={category.link} className="btn btn-custom w-100">
                    Explore {category.title}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
