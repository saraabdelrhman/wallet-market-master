import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const Newrole = () => {
  const [userDetails, setUserDetails] = useState({
    id: '',
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id', userDetails.id);
    formData.append('name', userDetails.name);
    formData.append('parentcategoryid', userDetails.parentcategoryid);

    // You would typically send `formData` to your server here
    console.log('User details submitted:', userDetails);
  };

  return (
    <Container fluid className="p-4 mt-5" >
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <h2 className="fw-bold">Add Role</h2>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formUserName" className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user name"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          
        </Row>
        <Row className="mb-3">
          <Col md={12}>
            <Form.Group controlId="formUserBio" className="mb-3">
              <Form.Label>Permissions</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter parent category id"
                name="parentcategoryid"
                value={userDetails.parentcategoryid}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className='d-flex gap-2'>
        <button type='submit' style={{backgroundColor:'#377BF7',color:'white',borderRadius:'50px', padding:'10px 60px 10px 60px',border:'0px'}} >Save</button>
        <button type='submit' style={{backgroundColor:'',color:'#377BF7',borderRadius:'50px', padding:'10px 60px 10px 60px',border:'1px solid #377BF7'}} >Cancel</button>
        </div>
      </Form>
    </Container>
  );
};

export default Newrole;
