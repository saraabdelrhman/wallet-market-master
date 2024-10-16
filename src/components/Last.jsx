import React from "react";
import man from './images/manandwomen.png';

export default function Last() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Button clicked!');
  };

  return (
    <div className="container mt-5 mb-6">
      <div className="row align-items-center gap-5">
        {/* Left Section - Image */}
        <div className="col-md-5 position-relative">
          <img
            src={man}
            className="rounded-5 img-fluid" // Added img-fluid for responsiveness
            alt="Join our community"
            style={{
              width:'400px',
              height: '400px', // Changed height to auto for responsive scaling
              maxHeight: '400px', // Sets a max height for larger screens
              width: '100%', // Ensures full width for the container
            }}
          />
        </div>

        {/* Right Section - Text and Buttons */}
        <div className="col-md-6">
          <h3 className="display-4 fw-bold mb-3">Join our community and write your review</h3>
          <p className="lead text-secondary mb-4">
            Join us for product reviews and share your insights to help others make better choices. Your opinion matters!
          </p>
          <div className="d-flex mt-4">
            {/* Sign Up Button */}
            <button
              style={{
                backgroundColor: "#3B82F6",
                color: 'white',
                border: "none",
                padding: "12px 30px",
                borderRadius: "50px",
                cursor: "pointer",
                marginRight: "20px", // Increased margin for spacing between buttons
                fontWeight: "bold"
              }}
              onClick={handleSubmit}
            >
              Sign up
            </button>

            {/* Write Review Button */}
            <button
              style={{
                backgroundColor: "white",
                color: '#3B82F6',
                border: "2px solid #3B82F6", // Increased border thickness for emphasis
                padding: "12px 30px",
                borderRadius: "50px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
              onClick={handleSubmit}
            >
              Write review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
