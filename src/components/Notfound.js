import React from "react";
import { Link } from "react-router-dom"; // Assuming you want to use these buttons as links
import img from '../components/images/removedbackgrounderror(1).png'; // Assuming the correct path for the image

export default function NotFound() {
  return (
    <div className="text-center mt-5 mb-5">
      {/* Main container for the Not Found image and text */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {/* Image container */}
        <div style={{ width: '100%', maxWidth: '500px' }}>
          <img
            src={img}
            alt="Not Found"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        {/* 404 Text */}
        <div style={{ color: '#191C1F', fontSize: '36px', fontWeight: '600', fontFamily: 'Public Sans' }}>
          404, Page Not Found
        </div>

        {/* Description */}
        <div style={{ color: '#475156', fontSize: '16px', fontWeight: '400', maxWidth: '536px', lineHeight: '24px', textAlign: 'center' }}>
          Something went wrong. It looks like the requested page could not be found. The link might be broken, or the page may have been removed.
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '20px' }}>
          {/* Go Back button */}
          <Link
            to="/"
            style={{
              padding: '14px 16px',
              background: '#377BF7',
              borderRadius: '30px',
              color: 'white',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '600',
              fontFamily: 'Inter',
              letterSpacing: '0.07px',
            }}
          >
            Go To Home
          </Link>

          {/* Go To Home button */}
          <button
            onClick={() => window.history.back()}
            style={{
              padding: '14px 16px',
              borderRadius: '30px',
              border: '1px solid #377BF7',
              color: '#377BF7',
              background: 'transparent',
              fontSize: '15px',
              fontWeight: '600',
              fontFamily: 'Inter',
              letterSpacing: '0.07px',
              cursor: 'pointer',
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

