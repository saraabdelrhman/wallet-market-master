import React from "react";
import shoes from './images/image 35.png';
import phone from './images/image 35 (1).png';
import watch from './images/Frame 44.png';
import frame from './images/Frame 31.png';
import './Trending.css';
import './TopFooter.css'; 

export default function TopRate() { // Corrected the function name to TopRate
  const groups = [
    [{ image: shoes, label: 'Shoes' }, { image: phone, label: 'Phone' }, { image: frame, label: 'Frame' }, { image: watch, label: 'Watch' }],
    [{ image: frame, label: 'Frame' }, { image: watch, label: 'Watch' }, { image: shoes, label: 'Shoes' }, { image: phone, label: 'Phone' }],
  ];

  return (
    <section className="pt-5" id="exercise">
      <h2 className="pb-4 fs-2 ">Top Rated Products</h2>
      <p className="fw-bold text-secondary">Browse our most top-rated products</p>
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
                        <p className="product-title text-dark" style={{fontSize:'30.57'}}>{item.label}</p>
                        <div className="rating text-warning">★★★★★</div>
                        <p className="text-secondary " style={{fontSize:'14px'}}>233,000 Review </p>
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
      <TopFooter></TopFooter>
    </section>
  );
}



export function TopFooter() {
    return (
      <div className="top-footer mt-5 mb-5">
        <div className="top-badge">
          {/* Complex shapes and logos should ideally be SVGs or images */}
          <div className="top-badge-icon"></div>
          <div className="top-badge-text">TOP website rating in the world</div>
        </div>
        <div>
          <div className="community-call">Join our community and write your review</div>
          <div className="community-description">Share your insights to help others choose better. Your opinion matters!</div>
        </div>
        {/* Buttons and actionable items should be <button> or <a> for accessibility */}
        <div>
          <button className="sign-up">Sign Up</button>
          <button className="write-review bg-transparent">Write a review</button>
        </div>
      </div>
    );
  }