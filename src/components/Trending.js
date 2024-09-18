import React from "react";
import shoes from './images/Image.png';
import phone from './images/Image (2).png';
import watch from './images/Image (1).png';
import frame from './images/Frame 31.png';
import img from './images/Ellipse 2.png';
import './Trending.css';

export default function Trending() {
  const groups = [
    [{ image: shoes, label: 'Shoes' }, { image: phone, label: 'Phone' }, { image: frame, label: 'Frame' }, { image: watch, label: 'Watch' }],
    [{ image: frame, label: 'Frame' }, { image: phone, label: 'Phone' }, { image: watch, label: 'Watch' }, { image: shoes, label: 'Shoes' }]
  ];

  return (
    <section className="pt-5" id="exercise">
      <h2 className="pb-4  ">Latest trending product</h2>
      <p className="fw-bold">Browse our most top rate product</p>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          {groups.map((group, idx) => (
            <div className={`carousel-item ${idx === 0 ? "active" : ""}`}>
              <div className="row">
                {group.map((item, index) => (
                  <div key={index} className="col-sm-6 col-lg-3 mb-4">
                    <div className="card text-center">
                      <img src={item.image} className="card-img-top" alt={item.label} />
                      <div className="card-body">
                        <p className="product-title">{item.label}</p>
                        <h6>Super good with new chips</h6>
                        <p className="product-description">This product exceeded my expectations! It’s easy to use, well-designed, and offers great value for the price.</p>
                        <div className="rating text-warning">★★★★★</div>
                        <div className="reviewer-info">
                          <img src={img} alt="Reviewer" className="profile-img" />
                          <div>Mark Villiams</div>
                        </div>
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