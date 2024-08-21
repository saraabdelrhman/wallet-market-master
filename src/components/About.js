import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import img from './images/istockphoto-1346944001-612x612.jpg';

const About = () => {
  return (
    <div className="container mt-5 p-5 mb-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className='' style={{ fontWeight: '900' }}>We're Wallyt.</h1>
          <br />
          <br />
          <p style={{ fontWeight: '400', fontSize: '18px' }}>
            Wallyt began in 2024 with a simple yet powerful idea that is more relevant today than ever — to be the universal symbol of trust, bringing consumers and businesses together through reviews.
          </p>
          <p style={{ fontWeight: '400', fontSize: '18px' }}>
            Wallyt is open, independent, and impartial — we help consumers make the right choices and businesses to build trust, grow and improve.
          </p>
          <p style={{ fontWeight: '400', fontSize: '18px' }}>
            We are a forward-thinking startup revolutionising e-commerce with cutting-edge technology solutions. We develop innovative products and platforms that enhance online experiences. Our mission is to merge creativity and technology to drive the future of the digital world.
          </p>
        </div>
        <div className="col-md-6">
          <img src={img} alt='who-are-we' className='w-100 h-100' />
        </div>
      </div>
    </div>
  );
};

export default About;
