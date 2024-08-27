import React from "react";
import img from '../components/images/notfound.jpg';

export default function NotFound() {
  return (
    <div className="text-center mt-5">
      <h2>404 page not found</h2>
      <img 
        src={img} 
        alt="Page Not Found" 
        style={{ 
          maxWidth: '100%', 
          height: 'auto', 
          maxHeight: '80vh',
          objectFit: 'contain' 
        }} 
      />
    </div>
  );
}
