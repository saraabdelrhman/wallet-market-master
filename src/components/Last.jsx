import React from "react";
import man from './images/manandwomen.png';

export default function Last() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Button clicked!');
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center gap-5">
        <div className="col-md-5 position-relative">
          <img src={man} className="card-img-top rounded-5 h-100" alt="Join our community" />
        </div>

        {/* Right Section - Text and Buttons */}
        <div className="col-md-6">
          <h3 className="display-4 fw-bold">Join our community and write your review</h3>
          <p className="lead text-secondary">
            Join us for product reviews and share your insights to help others choose better, your opinion matters!
          </p>
          <div className="d-flex mt-4">
            <button
              style={{
                backgroundColor: "#3B82F6",
                color: 'white',
                border: "none",
                padding: "12px 24px",
                borderRadius: "50px",
                cursor: "pointer",
                marginRight: "10px"
              }}
              onClick={handleSubmit}
            >
              Sign up
            </button>
            <button
              style={{
                backgroundColor: "white",
                color: '#3B82F6',
                border: "1px solid #3B82F6",
                padding: "12px 24px",
                borderRadius: "50px",
                cursor: "pointer"
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
