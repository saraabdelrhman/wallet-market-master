import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './images/technology-emotions-gadgets-concept-cheerful-goodlooking-redhead-woman-dancing-with-hands-up-clo.jpg';
import Mainreviews from './Mainreviews';
import Content from './Content';
import './Head.css';

const Head = () => {
  const [Search, SetSearch] = useState("");
  const [SearchData, SetSearchData] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  const handlesearch = (e) => {
    SetSearch(e.target.value);
  };

  useEffect(() => {
    if (Search !== "") {
      fetch(`https://wallyt.com/Products${Search}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Product not found');
          }
          return res.json();
        })
        .then((data) => SetSearchData(data.products))
        .catch((error) => console.error(error.message));
    }
  }, [Search]);
  const handleProductClick = (id) => {
    navigate(`/Products/${id}`); // Navigate to the product details page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="position-relative text-white vh-100">
        <img
          src={img}
          alt="img-header"
          className="img-fluid w-100 h-100"
          style={{ objectFit: 'cover' }}/>
        <div
          className="position-absolute top-50 start-50 translate-middle text-center px-3"
          style={{
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            width: '100%',
            height: '100%',
          }}
        >
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <h1 className="fw-bold display-4 display-md-3 display-lg-2 mb-4">
              Discover honest reviews, share your experiences,<br /> trust the right businesses.
            </h1>
            <form className="w-75" onSubmit={handleSubmit}>
              <div className="input-group input-group-lg mb-3">
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Search for a smartphone"
                  aria-label="Search"
                  onChange={handlesearch}
                  value={Search}
                  style={{ borderRadius: '30px 30px' }}
                />
              </div>
            </form>
            <div className="search-suggestions">
              
              {SearchData.map((data, index) => (
                <div
                  key={index}
                  className="search_suggestion_line"
                  onClick={() => handleProductClick(data.id)}
                  style={{ cursor: 'pointer' }}>
                  {data.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Content />
      <Mainreviews />
    </div>
  );
};
export default Head;
