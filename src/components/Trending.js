import React from 'react';
import { Carousel } from 'react-bootstrap';
import shoes from './images/Image.png';
import phone from './images/Image (2).png';
import watch from './images/Image (1).png';
import frame from './images/Frame 31.png';
import img from './images/Ellipse 2.png';
import shoes1 from './images/shoes.jpg';
import phone1 from './images/iphone.jpg';
import watch1 from './images/watch.jpg';
import watch3 from './images/watch3.jpg';
import frame1 from './images/frame.jpg';
import './Trending.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export default function Trending({ content }) {
  const groups = [
    [
      { image: watch, label: 'Shoes' },
      { image: shoes, label: 'Phone' },
      { image: frame, label: 'Frame' },
      { image: watch3, label: 'Watch' }
    ],
    [
      { image: frame1, label: 'Frame ' },
      { image: phone1, label: 'Phone ' },
      { image: watch1, label: 'Watch ' },
      { image: shoes1, label: 'Shoes ' }
    ]
  ];

  return (
    <section className="trending-section pt-5" id="trending">
      <h2 className="section-title pb-4 fs-2 ms-3 fw-bold">{content["trending"]}</h2>
      <p className="section-description fw-bold text-secondary ms-3">{content["header-desc"]}</p>

      <Carousel id="carouselExampleFade" fade>
        {groups.map((group, idx) => (
          <Carousel.Item key={idx}>
            <div className="row">
              {group.map((item, index) => (
                <div key={index} className="col-sm-6 col-lg-3 px-2 mb-4 text-center">
                  <div className="card product-card">
                    <img src={item.image} className="card-img-top full-width-img" alt={item.label} />
                    <div className="card-body">
                      <p className="product-title fw-bold">{item.label}</p>
                      <h6 className="product-highlight">Super good with new chips</h6>
                      <p className="product-description">
                        This product exceeded my expectations! It’s easy to use, well-designed, and offers great value for the price.
                      </p>
                      <div className="rating text-warning">★★★★★</div>
                      <div className="reviewer-info d-flex align-items-center justify-content-center">
                        <img src={img} alt="Reviewer" className="profile-img me-2" />
                        <div>Mark Villiams</div>
                      </div>
                    </div>
                    <p className="last-updated text-secondary" style={{ fontSize: '14px' }}>
                      Last updated 5 mins ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
