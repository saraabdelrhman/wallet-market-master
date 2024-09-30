import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const Advertisment = () => {
  const [images, setImages] = useState([null, null, null]); // State for three image uploads

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const updatedImages = [...images];
      updatedImages[index] = URL.createObjectURL(file); // Preview the uploaded image
      setImages(updatedImages);
    }
  };

  return (
    <Container className="mt-5" style={{ width: '80%', marginLeft: '20%' }}>
      {/* Loop for 3 Image Upload Sections */}
      {[1, 2, 3].map((adIndex) => (
        <Row key={adIndex} className="mb-5">
          <Col>
            {/* Ad Label */}
            <Form.Label className="fw-bold" style={{ fontSize: '18px' }}>
              Ad Location {adIndex} {/* Labels for each ad location */}
            </Form.Label>

            {/* Image Upload Section */}
            <div className="d-flex gap-3 align-items-center">
              <Button
                variant=""
                style={{ width: '150px', height: '50px', fontSize: '16px',backgroundColor:'#377BF7',color:'white' }}
                as="label"
                htmlFor={`imageUpload-${adIndex}`}
              >
                Choose Image
              </Button>
              <Form.Control
                id={`imageUpload-${adIndex}`}
                type="file"
                style={{ display: 'none' }}
                accept="image/*"
                onChange={(e) => handleImageUpload(adIndex - 1, e)} // Handle image upload
              />
              {/* Display the selected image preview */}
              {images[adIndex - 1] && (
                <img
                  src={images[adIndex - 1]}
                  alt={`uploaded-${adIndex}`}
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                  }}
                />
              )}
            </div>
          </Col>
        </Row>
      ))}

      <Row className="mt-4">
        <Col className="text-center">
          {/* Submit Button */}
          <Button className="btn btn-primary" size="lg" style={{ backgroundColor: 'blue' }}>
            Submit Ad
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Advertisment;
