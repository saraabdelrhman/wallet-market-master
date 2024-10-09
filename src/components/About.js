import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import './About.css'; // Import the CSS file

const About = ({ content }) => {
  return (
    <div className="about-container">
      <div className="title-section mt-5">
        <h2>{content.title}</h2>
      </div>
      <div className="description-section">
        <p>{content.description}</p>
      </div>
    </div>
  );
};

export default About;
