import React from "react";
import shoes from './images/image 35.png';
import phone from './images/image 35 (1).png';
import watch from './images/Frame 44.png';
import frame from './images/Frame 31.png';
import shoes1 from './images/shoes.jpg';
import phone1 from './images/iphone.jpg';
import watch1 from './images/watch.jpg';
import frame1 from './images/frame.jpg';
import './Trending.css';
import './TopFooter.css'; 

export default function TopRate({ content }) {
  const groups = [
    // First set of images
    [
      { image: shoes, label: 'Shoes' }, 
      { image: phone, label: 'Phone' }, 
      { image: frame, label: 'Frame' }, 
      { image: watch, label: 'Watch' }
    ],
    // Second set of images
    [
      { image: shoes1, label: 'Shoes ' }, 
      { image: phone1, label: 'Phone' }, 
      { image: frame1, label: 'Frame ' }, 
      { image: watch1, label: 'Watch ' }
    ],
  ];

  return (
    <div className="container-fluid" style={{ backgroundColor: "#eef5ff" }}>
      <section className="pt-5 container-fluid" id="exercise">
        <h2 className="pb-4 fs-2 fw-bold">{content["popular-cat"]}</h2>
        <p className="fw-bold text-secondary ">{content["header-desc"]}</p>

        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            {groups.map((group, idx) => (
              <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
                <div className="row justify-content-center">
                  {group.map((item, index) => (
                    <div key={index} className="col-sm-6 col-lg-3 mb-4">
                      <div className="border-0 position-relative">
                        <img 
                          src={item.image} 
                          className="card-img-top rounded-4" 
                          alt={item.label} 
                          style={{ height: '200px', objectFit: 'cover' }} 
                        />
                        <p className="product-title text-light" style={{
                          fontSize: '30px',
                          position: 'absolute',
                          bottom: '10px',
                          left: '5px',
                          right: '5px',
                          padding: '5px',
                        }}>
                          {item.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
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
    </div>
  );
}
