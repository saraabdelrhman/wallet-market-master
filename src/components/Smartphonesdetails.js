import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Smartphones.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SmartphonesDetails() {
  const { id } = useParams(); 
  const [smartphone, setSmartphone] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setSmartphone(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="container mt-5"><h2>Loading...</h2></div>;
  }

  if (error) {
    return <div className="container mt-5"><h2>Error: {error}</h2></div>;
  }

  return (
    <div className="container-fluid" style={{background: '' }}>
      <div className="container" style={{ backgroundColor: 'transparent' }}>
        <h2 className="fw-bold pb-3">{smartphone.title}</h2>
        <div className="row" style={{ backgroundColor: 'transparent' }}>
          <div className="col-md-6">
            <img src={smartphone.thumbnail} className="img-fluid p-3" alt={smartphone.title} style={{ width: '100%', height: '400px', objectFit: 'contain' }} />
          </div>
          <div className="col-md-6 mt-5 bg-light p-3 rounded-5">
            <p className="card-text">{smartphone.description}</p>
            <p className="card-text"><strong>Brand:</strong> {smartphone.brand}</p>
            <p className="card-text"><strong>Price:</strong> <span className="text-danger">${smartphone.price}</span></p>
            <p className="card-text"><strong className="fw-bold">Rating:</strong> <span className="text-danger fw-bold">{smartphone.rating} ⭐</span></p>
            <p className="card-text"><strong>Stock:</strong> {smartphone.stock} units available</p>
            <Link to="/Report" className='link-underline link-underline-opacity-0 mt-5 pt-5 text-danger'>Report here</Link><br></br>
            <button className="button mt-3 mb-5" > Add to Cart 🛒</button>

            <Link to="/phonereview" className='buttone link-underline link-underline-opacity-0 ms-2'>Add Review ⭐</Link><br></br>
            
          </div>
         
        </div>
      </div>
    </div>
  );
}
