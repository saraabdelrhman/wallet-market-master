// Components/SingleProduct.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const[error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://wallyt.com/products/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setProduct(data);
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

  if (!product) {
    return <div className="container mt-5"><h2>Product not found!</h2></div>;
  }

  return (
    <div className="container-fluid">
      <div className="container">
        <h2 className="fw-bold pb-3">{product.title}</h2>
        <div className="row">
          <div className="col-md-6">
            <img src={product.thumbnail} className="img-fluid p-3" alt={product.title} style={{ width: '100%', height: '400px', objectFit: 'contain' }} />
          </div>
          <div className="col-md-6 mt-5 bg-light p-3 rounded-5">
            <p className="card-text">{product.description}</p>
            <p className="card-text"><strong>Brand:</strong> {product.brand}</p>
            <p className="card-text"><strong>Price:</strong> <span className="text-danger">${product.price}</span></p>
            <p className="card-text"><strong>Rating:</strong> <span className="text-danger fw-bold">{product.rating} ⭐</span></p>
            <Link to="/products" className="btn btn-primary mt-3">Back to Products</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
