import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap'; // Make sure react-bootstrap is installed

const Advertisment = () => {
  const [adText, setAdText] = useState('');
  const [images, setImages] = useState([null, null, null]); 

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const updatedImages = [...images];
      updatedImages[index] = URL.createObjectURL(file); 
      setImages(updatedImages);
    }
  };

  return (
    <Container className="mt-5" style={{width: '80%',marginLeft:'16%'}}>
      <Row>
        <Col>
          {/* Label for Ad Text */}
          <Form.Group controlId="adText">
            <Form.Label className="fw-bold" style={{ fontSize: '18px' }}>
              Write Your Ad
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Write the content of your ad here..."
              value={adText}
              onChange={(e) => setAdText(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          {/* Image Upload Buttons */}
          <Form.Label className="fw-bold" style={{ fontSize: '18px' }}>
            Upload Images (Max 3)
          </Form.Label>
          <div className="d-flex gap-3">
            {images.map((image, index) => (
              <div key={index}>
                <Form.Control
                  type="file"
                  label="Choose Image"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(index, e)}
                />
                {image && (
                  <img
                    src={image}
                    alt={`uploaded-${index}`}
                    style={{ width: '100px', height: '100px', marginTop: '10px', objectFit: 'cover' }}
                  />
                )}
              </div>
            ))}
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className="text-center">
          {/* Submit Button */}
          <Button className='btn btn-primary' size="lg" style={{backgroundColor:'blue'}}>
            Submit Ad
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Advertisment;  // Make sure the component is exported properly
