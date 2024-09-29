import React from 'react';
import shoes0 from './images/image 61.png';  // First shoe image
import shoes1 from './images/image 62.png';  // Second shoe image
import shoes2 from './images/image 63.png';  // Third shoe image
import shoes4 from './images/image 64.png';  // Assuming this is the large shoe image
import nikeLogo from './images/nike.png';    // Nike logo image

export function Shoes() {
  return (
    <div className="container-fluid bg-light py-5" style={{ position: 'relative' }}>
      {/* Nike Logo */}
      <img
        src={nikeLogo}
        alt="Nike Logo"
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          width: '80px',
          height: 'auto',
        }}
      />

      {/* Main Row for the large image and text section */}
      <div className="row d-flex align-items-center">
        {/* Left Section - Large Shoe Image */}
        <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
          <img
            src={shoes4}
            alt="Nike Air Max 90 Futura"
            className="img-fluid"
            style={{ maxWidth: '80%', height: 'auto' }}
          />
        </div>

        {/* Right Section - Title, Description, and Small Shoe Images */}
        <div className="col-12 col-md-6">
          {/* Title */}
          <h1
            style={{
              color: '#C39E93',
              fontSize: '48px',
              fontFamily: 'Bebas Neue',
              fontWeight: '400',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}
          >
            Nike Air Max 90 Futura
          </h1>

          {/* Description */}
          <p
            style={{
              color: '#4E4E4E',
              fontSize: '18px',
              fontFamily: 'Mulish',
              fontWeight: '400',
              lineHeight: '1.6',
              marginBottom: '20px',
            }}
          >
            The Nike Air Max 90 Futura re-imagines the icon of Air through your eyes—from design to
            testing to styling.
          </p>

          {/* Small Shoe Images and Divider */}
          <div className="d-flex align-items-center">
            {/* Small Shoe Images */}
            <div className="d-flex justify-content-center gap-2">
              <img style={{ width: '100px', height: 'auto' }} src={shoes0} alt="Shoe 1" className="img-fluid" />
              <img style={{ width: '100px', height: 'auto' }} src={shoes1} alt="Shoe 2" className="img-fluid" />
              <img style={{ width: '100px', height: 'auto' }} src={shoes2} alt="Shoe 3" className="img-fluid" />
            </div>

            {/* Divider */}
            <div
              className="mx-4"
              style={{
                width: '1px',
                height: '70px',
                backgroundColor: 'black',
              }}
            ></div>

            {/* Your Design Box */}
            <div
              style={{
                width: '100px',
                height: '70px',
                padding: '10px',
                backgroundColor: '#F6F6F6',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  color: '#4E4E4E',
                  fontSize: '16px',
                  fontFamily: 'Mulish',
                  fontWeight: '600',
                  textTransform: 'lowercase',
                }}
              >
                your design
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
