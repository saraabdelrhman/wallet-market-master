import React, { useState } from 'react';

import img from './images/BG.png';
import img1 from './images/BG (1).png';
import img2 from './images/BG (2).png';
import img3 from './images/BG (3).png';
import img4 from './images/BG (4).png';
import img5 from './images/BG (5).png';

// Import a search icon (FontAwesome or any other library can be used)
import { FaSearch } from 'react-icons/fa';

const categories = [
  {
    name: 'Smartphones',
    image: img1,
    items: ['Apple', 'Samsung', 'OnePlus', 'Xiaomi'],
  },
  {
    name: 'Kitchen',
    image: img2,
    items: ['Microwave', 'Blenders', 'Dishwasher', 'Refrigerator'],
  },
  {
    name: 'Fashion',
    image: img3,
    items: ['Nike', 'Louis V', 'Adidas', 'Polo'],
  },
  {
    name: 'Finance',
    image: img4,
    items: ['American Digital Bank', 'SolarisBank', 'O2 Banking', 'Penta'],
  },
  {
    name: 'Cars',
    image: img5,
    items: ['Tesla', 'Toyota', 'BYD', 'Honda'],
  },
  {
    name: 'Laptops',
    image: img, // Adding the 6th category with another image
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
      }}
    >
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
        Explore companies by category
      </div>

      {/* Search Input with Icon on the Left */}
      <div
        style={{
          position: 'relative',
          width: '100%',
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
            border: '1px solid #ccc',
            borderRadius: '8px',
            fontSize: '1rem',
            boxSizing: 'border-box',
          }}
        />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          width: '100%',
          maxWidth: '1200px',
          boxSizing: 'border-box',

          /* Media queries for responsiveness */
          '@media (max-width: 1024px)': {
            gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns for tablets
          },
          '@media (max-width: 768px)': {
            gridTemplateColumns: 'repeat(1, 1fr)', // 1 column for mobile devices
          },
        }}
      >
        {/* Display Filtered Categories */}
        {filteredCategories.map((category) => (
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
          </div>
        ))}

        {/* If no categories match the search query */}
        {filteredCategories.length === 0 && (
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
    </div>
  );
};

export default Categories;
