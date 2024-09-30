import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap'; 

const Advertisment = () => {
  const [adText, setAdText] = useState(['', '', '']); // For three ad text fields
  const [images, setImages] = useState([null, null, null]); // For three image uploads

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const updatedImages = [...images];
      updatedImages[index] = URL.createObjectURL(file); 
      setImages(updatedImages);
    }
  };

  const handleAdTextChange = (index, event) => {
    const updatedAdText = [...adText];
    updatedAdText[index] = event.target.value;
    setAdText(updatedAdText);
  };

  return (
    <Container className="mt-5" style={{ width: '80%', marginLeft: '16%' }}>
      {/* Loop for 3 Advertisement Sections */}
      {[1, 2, 3].map((adIndex) => (
        <Row key={adIndex} className="mb-5">
          <Col>
            {/* Ad Label */}
            <Form.Group controlId={`adText-${adIndex}`}>
              <Form.Label className="fw-bold" style={{ fontSize: '18px' }}>
                Ad Location {adIndex} {/* You can replace with more specific names like 'Header Ad', 'Sidebar Ad', etc. */}
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder={`Write the content for Ad Location ${adIndex}...`}
                value={adText[adIndex - 1]} // -1 because array is 0-indexed
                onChange={(e) => handleAdTextChange(adIndex - 1, e)} // -1 because array is 0-indexed
              />
            </Form.Group>

            {/* Image Upload Section */}
            <Form.Label className="fw-bold mt-3" style={{ fontSize: '18px' }}>
              Upload Image for Ad Location {adIndex}
            </Form.Label>
            <div className="d-flex gap-3 align-items-center">
              <Button
                variant=""
                style={{ width: '150px', height: '40px', fontSize: '16px' ,color:'white',backgroundColor:'#377BF7'}}
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
                onChange={(e) => handleImageUpload(adIndex - 1, e)} // -1 because array is 0-indexed
              />
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
