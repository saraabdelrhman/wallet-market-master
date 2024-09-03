import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Smartphones() {
  const [smartphones, setSmartphones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://wallyt.com/reports')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setSmartphones(data.products);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="container mt-5"><h2>Loading...</h2></div>;
  }

  if (error) {
    return <div className="container mt-5"><h2>Error: {error}</h2></div>;
  }

  return (
    <div className="container-fluid" style={{  background: '' }}>
      <div className="container" style={{ backgroundColor: 'transparent' }}>
        <h2 className="fw-bold pb-3">Smartphones</h2>
        <div className="row" style={{ backgroundColor: 'transparent' }}>
          {smartphones.map((phone) => (
            <div className="col-md-4 mb-4" key={phone.id} style={{ backgroundColor: 'transparent' }}>
              <div className="card h-100 rounded-4">
                <div className="card-img-top" style={{ backgroundColor: 'transparent' }}>
                  <img src={phone.thumbnail} className="img-fluid p-3" alt={phone.title} style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{phone.title}</h5>
                  <p className="card-text">{phone.description}</p>
                  <p className="card-text"><strong>Brand:</strong> {phone.brand}</p>
                  <p className="card-text">
                    <strong>Price:</strong> <span className="text-danger">${phone.price}</span>
                  </p>
                  <p className="card-text"><strong className="fw-bold">Rating:</strong> <span className="text-danger fw-bold">{phone.rating} ⭐</span></p>
                  <Link to={`/smartphones/${phone.id}`} className="btn btn-warning">View Details</Link> 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

