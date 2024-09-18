import React from "react";
import shoes from './images/image 35.png';
import phone from './images/image 35 (1).png';
import watch from './images/Frame 44.png';
import frame from './images/Frame 31.png';
import './Trending.css';

export default function TopRate() { // Corrected the function name to TopRate
  const groups = [
    [{ image: shoes, label: 'Shoes' }, { image: phone, label: 'Phone' }, { image: frame, label: 'Frame' }, { image: watch, label: 'Watch' }],
    [{ image: frame, label: 'Frame' }, { image: phone, label: 'Phone' }, { image: watch, label: 'Watch' }, { image: shoes, label: 'Shoes' }]
  ];

  return (
    <section className="pt-5" id="exercise">
      <h2 className="pb-4 ">Top Rated Products</h2>
      <p className="fw-bold ">Browse our most top-rated products</p>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          {groups.map((group, idx) => (
            <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
              <div className="row">
                {group.map((item, index) => (
                  <div key={index} className="col-sm-6 col-lg-3 mb-4">
                    <div className="card text-center">
                      <img src={item.image} className="card-img-top" alt={`${item.label}`} />
                      <div className="card-body text-start">
                        <p className="product-title text-dark">{item.label}</p>
                        <div className="rating text-warning">★★★★★</div>
                        <p>233,000 Review </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
