import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
     
      <div className="title-section mt-5">
        <h2>About us</h2>
      </div>
      <div className="description-section">
        <p>
          Reveyou is Germany's premier platform for product reviews and ratings, launched to provide a space where consumers can share their honest opinions. Whether you're satisfied or not, Reveyou offers a place for you to voice your experience with products and the stores that sell them.
          <br /><br />
          On Reveyou, you'll find genuine feedback from real consumers across Germany. We make it easy for users to discover products, read reviews, and contribute their own insights.
          <br /><br />
          We believe that consumer feedback drives product improvement and innovation. Beyond benefiting customers, our unbiased reviews offer valuable insights to manufacturers and retailers about current market trends.
        </p>
      </div>
    </div>
  );
};

export default About;
