import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import smartphonesandapps from './images/microscope.png';
import kitechenandcar from './images/kitchen.png';
import furnitureandlabtop from './images/house-2.png';
import fashonandinsurance from './images/building-4.png';

export default function Content({content}) {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerText}>
          <div style={styles.headerTitle}>{content["Categories"]}</div>
          <div style={styles.headerSubtitle}>Search categories that you love</div>
        </div>
        <div style={styles.exploreButton}>
          <div style={styles.exploreText}>Explore All</div>
        </div>
      </div>

      <div style={styles.categoryContainer}>
        {/* Smartphones */}
        <div style={styles.categoryCard}>
          <div style={styles.imageWrapper}>
            <img src={smartphonesandapps} alt="Smartphones and Apps" style={styles.image} />
          </div>
          <div style={styles.categoryText}>
            <div style={styles.categoryTitle}>Smartphones</div>
            <div style={styles.categoryCount}>18,394</div>
          </div>
        </div>

        {/* Kitchen */}
        <div style={styles.categoryCard}>
          <div style={styles.imageWrapper}>
            <img src={kitechenandcar} alt="Kitchen and Car" style={styles.image} />
          </div>
          <div style={styles.categoryText}>
            <div style={styles.categoryTitle}>Kitchen</div>
            <div style={styles.categoryCount}>18,394</div>
          </div>
        </div>

        {/* Furniture */}
        <div style={styles.categoryCard}>
          <div style={styles.imageWrapper}>
            <img src={furnitureandlabtop} alt="Furniture and Laptop" style={styles.image} />
          </div>
          <div style={styles.categoryText}>
            <div style={styles.categoryTitle}>Furniture</div>
            <div style={styles.categoryCount}>18,394</div>
          </div>
        </div>

        {/* Fashion */}
        <div style={styles.categoryCard}>
          <div style={styles.imageWrapper}>
            <img src={fashonandinsurance} alt="Fashion and Insurance" style={styles.image} />
          </div>
          <div style={styles.categoryText}>
            <div style={styles.categoryTitle}>Fashion</div>
            <div style={styles.categoryCount}>18,394</div>
          </div>
        </div>
      </div>

      <div style={styles.categoryContainer}>
        {/* Apps */}
        <div style={styles.categoryCard}>
          <div style={styles.imageWrapper}>
            <img src={smartphonesandapps} alt="Apps" style={styles.image} />
          </div>
          <div style={styles.categoryText}>
            <div style={styles.categoryTitle}>Apps</div>
            <div style={styles.categoryCount}>18,394</div>
          </div>
        </div>

        {/* Car */}
        <div style={styles.categoryCard}>
          <div style={styles.imageWrapper}>
            <img src={kitechenandcar} alt="Car" style={styles.image} />
          </div>
          <div style={styles.categoryText}>
            <div style={styles.categoryTitle}>Car</div>
            <div style={styles.categoryCount}>18,394</div>
          </div>
        </div>

        {/* Laptop */}
        <div style={styles.categoryCard}>
          <div style={styles.imageWrapper}>
            <img src={furnitureandlabtop} alt="Laptop" style={styles.image} />
          </div>
          <div style={styles.categoryText}>
            <div style={styles.categoryTitle}>Laptop</div>
            <div style={styles.categoryCount}>18,394</div>
          </div>
        </div>

        {/* Insurance */}
        <div style={styles.categoryCard}>
          <div style={styles.imageWrapper}>
            <img src={fashonandinsurance} alt="Insurance" style={styles.image} />
          </div>
          <div style={styles.categoryText}>
            <div style={styles.categoryTitle}>Insurance</div>
            <div style={styles.categoryCount}>18,394</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    background: '#F5F7FE',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '2vw',
  },
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  headerText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerTitle: {
    color: '#1A143C',
    fontSize: '2rem',
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  headerSubtitle: {
    color: '#9693A5',
    fontSize: '1.25rem',
    fontFamily: 'Poppins',
    fontWeight: '400',
  },
  exploreButton: {
    padding: '0.8rem 2rem',
    background: '#3B82F6',
    borderRadius: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exploreText: {
    color: 'white',
    fontSize: '1rem',
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  categoryContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2vw',
    justifyContent: 'space-between',
  },
  categoryCard: {
    flex: '1 1 calc(25% - 2vw)',
    background: 'white',
    borderRadius: '1rem',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '1rem',
    minWidth: '200px',
    marginBottom: '1.5rem',
  },
  imageWrapper: {
    width: '4rem',
    height: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  categoryText: {
    display: 'flex',
    flexDirection: 'column',
  },
  categoryTitle: {
    color: '#1A143C',
    fontSize: '1.5rem',
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  categoryCount: {
    color: '#9693A5',
    fontSize: '1.125rem',
    fontFamily: 'Poppins',
    fontWeight: '400',
  },
};

