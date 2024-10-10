import React from "react";
import shoes from './images/image 35.png';
import phone from './images/image 35 (1).png';
import watch from './images/Frame 44.png';
import frame from './images/Frame 31.png';
import './Trending.css';
import './TopFooter.css'; 
import { Shoes } from './Shoes';  // Corrected import to match named export

export default function TopRate({content}) {
  const groups = [
    [{ image: shoes, label: 'Shoes' }, { image: phone, label: 'Phone' }, { image: frame, label: 'Frame' }, { image: watch, label: 'Watch' }],
    [{ image: frame, label: 'Frame' }, { image: watch, label: 'Watch' }, { image: shoes, label: 'Shoes' }, { image: phone, label: 'Phone' }],
  ];

  return (
    <section className="pt-5" id="exercise">
      <h2 className="pb-4 fs-2">{content["top-rated"]}</h2>
      <p className="fw-bold text-secondary">{content["header-desc"]}</p>
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
                        <p className="product-title text-dark" style={{ fontSize: '30px' }}>{item.label}</p> {/* Rounded font size */}
                        <div className="rating text-warning">★★★★★</div>
                        <p className="text-secondary" style={{ fontSize: '14px' }}>233,000 Reviews</p> {/* Pluralized "Review" */}
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

      {/* Shoes Component */}
      <Shoes  content={content}/>

      {/* TopFooter Component */}
      <TopFooter content={content} />
    </section>
  );
}

export function TopFooter({content}) {
  return (
    <div className="top-footer mt-5 mb-5">
      <div className="top-badge">
        {/* Complex shapes and logos should ideally be SVGs or images */}
        <div className="top-badge-icon"></div>
        <div className="top-badge-text">TOP website rating in the world</div>
      </div>
      <div>
        <div className="community-call">{content["footer"]}</div>
        <div className="community-description">Share your insights to help others choose better. Your opinion matters!</div>
      </div>
      <div className="">
        <button className="sign-up me-2">{content["sign-in"]}</button>
        <button className="write-review bg-transparent">Write a review</button>
      </div>
    </div>
  );
}
