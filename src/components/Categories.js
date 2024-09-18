import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import micro from './images/microscope.png';
import buildings from './images/building-4.png';
import house from './images/house-2.png';
import kitchen from './images/kitchen.png';
import './Categories.css';

const CategoryCard = ({ icon, title, count }) => {
  return (
      <Col sm={6} md={4} lg={3} className="mb-3">
          <div className="category-card text-center p-3">
              <img src={icon} alt={title} className="category-icon" />
              <div className="category-title">{title}</div>
              <div className="category-count text-muted">{count}</div>
          </div>
      </Col>
  );
};

const Categories = () => {
    const categories = [
        { icon: micro, title: 'Smartphones', count: '18,394' },
        { icon: kitchen, title: 'Kitchen', count: '18,394' },
        { icon: house, title: 'Furniture', count: '18,394' },
        { icon: buildings, title: 'Fashion', count: '18,394' },
        { icon: micro, title: 'Apps', count: '18,394' },
        { icon: kitchen, title: 'Car', count: '18,394' },
        { icon: house, title: 'Laptop', count: '18,394' },
        { icon: buildings, title: 'Insurance', count: '18,394' }
    ];

    return (
        <Container className="my-5 mt-5 mb-5">
            <Row className="justify-content-between align-items-center mb-4">
                <Col>
                    <h2 className=''>Categories</h2>
                    <p>Search categories that you love</p>
                </Col>
                <Col className="text-end">
                    <Button className="bg-primary rounded-5 p-3">Explore All</Button>
                </Col>
            </Row>
            <Row>
                {categories.map((category, idx) => (
                    <CategoryCard key={idx} {...category} />
                ))}
            </Row>
        </Container>
    );
};

export default Categories;
