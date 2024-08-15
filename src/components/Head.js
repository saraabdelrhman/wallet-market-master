import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './images/technology-emotions-gadgets-concept-cheerful-goodlooking-redhead-woman-dancing-with-hands-up-clo.jpg';
import Reviews from './Reviews'; // Import the Reviews component
import Content from './Content'; // Import the Content component

const Head = () => {
  return (
    <div>
      <div className="position-relative text-white vh-100">
        <img src={img} alt="img-header" className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
        <div 
          className="position-absolute top-50 start-50 translate-middle text-center px-3" 
          style={{ 
            color: 'white', 
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', 
            backgroundColor: 'rgba(0, 0, 0, 0.4)', 
            width: '100%',
            height: '100%'
          }}
        >
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <h1 className="fw-bold display-4 display-md-3 display-lg-2 mb-4">Discover honest reviews, share your experiences,<br /> trust the right businesses.</h1>
            <form className="w-75">
              <div className="input-group input-group-lg mb-3">
                <input 
                  type="text" 
                  className="form-control mt-2" 
                  placeholder="Company or category" 
                  aria-label="Company or category"
                  style={{ borderRadius: '30px 0 0 30px' }} 
                />
                <button 
                  className="btn btn-dark mt-2 " 
                  type="submit"
                  style={{ borderRadius: '0 30px 30px 0' }}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Content /> {/* Use Content with an uppercase 'C' */}
      <Reviews /> {/* Include the Reviews component at the end */}
    </div>
  );
};

export default Head;
