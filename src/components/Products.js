// Components/Products.js
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './ProductCard';  // Component for individual product cards
import config from '../Config'; // Import the config file

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${config.apiUrl}/products`) // Use the API URL from the config
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setProducts(data.products);
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
    <div className="container-fluid">
      <div className="container">
        <h2 className="fw-bold pb-3">Products</h2>
        <div className="row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
