// Components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="col-md-4 mb-4">
    <div className="card h-100">
      <img src={product.thumbnail} alt={product.title} className="card-img-top img-fluid" style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text"><strong>Price:</strong> ${product.price}</p>
        <Link to={`/singleproduct/${product.id}`} className="btn btn-primary">View Details</Link>
      </div>
    </div>
  </div>
);

export default ProductCard;
