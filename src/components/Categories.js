import React, { useState } from 'react';
import img from './images/BG.png';
import img1 from './images/BG (1).png';
import img2 from './images/BG (2).png';
import img3 from './images/BG (3).png';
import img4 from './images/BG (4).png';
import img5 from './images/BG (5).png';
import shape from './images/zgzg-removebg-preview.png';
import shape2 from './images/zgzg-left.png';

import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Smartphones',
    image: img,
    items: ['Apple', 'Samsung', 'OnePlus', 'Xiaomi'],
  },
  {
    name: 'Kitchen',
    image: img2,
    items: ['Microwave', 'Blenders', 'Dishwasher', 'Refrigerator'],
  },
  {
    name: 'Fashion',
    image: img4,
    items: ['Nike', 'Louis V', 'Adidas', 'Polo'],
  },
  {
    name: 'Finance',
    image: img1,
    items: ['American Digital Bank', 'SolarisBank', 'O2 Banking', 'Penta'],
  },
  {
    name: 'Cars',
    image: img3,
    items: ['Tesla', 'Toyota', 'BYD', 'Honda'],
  },
  {
    name: 'Laptops',
    image: img1, // Adding the 6th category with another image
    items: ['MacBook', 'Dell', 'HP', 'Lenovo'],
  },
];

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter categories based on search input
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    category.items.some((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        position: 'relative', // Set position relative to anchor the absolute shapes
      }}
    >
      {/* Left shape */}
      <img
        src={shape2}
        alt="shape"
        className='d-none d-md-flex'
        style={{
          position: 'absolute',
          top: '140px',
          left: '0',
          width: '300px', // Adjust width as needed
          zIndex: '-1', // Keep it behind the content
        }}
      />

      {/* Right shape */}
      <img
        src={shape}
        alt="shape"
        className='d-none d-md-flex'
        style={{
          position: 'absolute',
          top: '15px',
          right: '0',
          width: '300px', // Adjust width as needed
          zIndex: '-1', // Keep it behind the content
        }}
      />

      <div
        style={{
          width: '100%',
          textAlign: 'center',
          color: 'black',
          fontSize: '2rem',
          fontFamily: 'Helvetica',
          fontWeight: '700',
          wordWrap: 'break-word',
          marginBottom: '20px',
        }}
      >
        What are you looking for ?
      </div>

      {/* Search Input with Icon on the Left */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#eef5ff',
          maxWidth: '600px',
          marginBottom: '30px',
        }}
      >
        <FaSearch
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#ccc',
          }}
        />
        <input
          type="text"
          placeholder="Search categories or companies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 10px 10px 40px', // Add extra padding on the left for the icon
            border: '0px solid #ccc',
            borderRadius: '8px',
            fontSize: '1rem',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* The sentence aligned to the left */}
      <div style={{ width: '100%', marginBottom: '20px' }}>
        <h3 className='fs-3 fw-bold mt-5 pt-5' style={{ marginLeft: '10%', fontWeight: '400' }}>
          Explore companies by category
        </h3>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          width: '100%',
          maxWidth: '1200px',
          boxSizing: 'border-box',
        }}
      >
        {/* Display Filtered Categories */}
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <div
              key={category.name}
              style={{
                padding: '20px',
                borderRadius: '10px',
                border: '1px solid #DFDFDF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '20px',
                backgroundColor: '#fff',
              }}
            >
              <img
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '9999px',
                }}
                src={category.image}
                alt={category.name}
              />
              <div
                style={{
                  fontSize: '1.5rem',
                  fontFamily: 'Poppins',
                  fontWeight: '700',
                  textAlign: 'center',
                  color: 'black',
                }}
              >
                {category.name}
              </div>
              <div
                style={{
                  width: '100%',
                  textAlign: 'center',
                  color: 'black',
                  fontSize: '1rem',
                  fontFamily: 'Poppins',
                  fontWeight: '400',
                  lineHeight: '1.5',
                }}
              >
                {category.items.map((item) => (
                  <div key={item} style={{ marginBottom: '10px' }}>
                    {item}
                  </div>
                ))}
              </div>
              <Link to={'/categoriesdetails'}>
                <button
                  style={{
                    padding: '10px 20px',
                    borderRadius: '20px',
                    border: '1px solid #377BF7',
                    backgroundColor: '#fff',
                    color: '#377BF7',
                    cursor: 'pointer',
                  }}
                >
                  Find More
                </button>
              </Link>
            </div>
          ))
        ) : (
          <div
            style={{
              gridColumn: 'span 3',
              textAlign: 'center',
              fontSize: '1.2rem',
              color: '#777',
            }}
          >
            No categories or companies found.
          </div>
        )}
      </div>

      {/* Responsive Design: Add media queries */}
      <style>
        {`
          @media (max-width: 1200px) {
            div[style*='grid-template-columns'] {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 768px) {
            div[style*='grid-template-columns'] {
              grid-template-columns: repeat(1, 1fr);
            }

            div[style*='font-size: 2rem'] {
              font-size: 1.5rem;
            }

            input[type="text"] {
              font-size: 0.9rem;
              padding: 8px 8px 8px 35px;
            }

            h3.fs-3.fw-bold {
              font-size: 1.25rem;
              margin-left: 5%;
            }

            img[alt="shape"] {
              width: 200px !important; 
            }

            div[style*='padding: 20px'] {
              padding: 15px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Categories;

