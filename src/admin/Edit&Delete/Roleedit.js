import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

const Roleedit = () => {
  const [userDetails, setUserDetails] = useState({
    id: "",
    email: "",
    name: "",
    permissions: [], // Store selected permissions
    status: "",
    createdAt: "",
  });

  // List of possible permissions
  const availablePermissions = [
"ADD_CATEGORY",
"UPDATE_CATEGORY",
"DELETE_CATEGORY",
"ADD_PRODUCT",
"UPDATE_PRODUCT",
"DELETE_PRODUCT",
"UPDATE_REPORT",
"DELETE_REPORT",
"GET_ALL_USERS",
"ADD_ROLE",
"ADD_PERMISSION",
"UPDATE_PERMISSION",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handlePermissionChange = (e) => {
    const { value, checked } = e.target;
    const newPermissions = checked
      ? [...userDetails.permissions, value]
      : userDetails.permissions.filter((permission) => permission !== value);

    setUserDetails({ ...userDetails, permissions: newPermissions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You would typically send `userDetails` to your server here
    console.log("User details submitted:", userDetails);
  };

  return (
    <Container fluid className="p-4 mt-5" >
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <h2 className="fw-bold">Edit Role</h2>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formUserName" className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter role name"
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
            <Form.Group controlId="formUserPermissions" className="mb-3">
              <Form.Label>Permissions</Form.Label>
              <div>
                {availablePermissions.map((permission, index) => (
                  <Form.Check
                    key={index}
                    type="checkbox"
                    label={permission}
                    value={permission}
                    checked={userDetails.permissions.includes(permission)}
                    onChange={handlePermissionChange}
                  />
                ))}
              </div>
            </Form.Group>
          </Col>
        </Row>
        <button type='submit'  
        style={{backgroundColor:'#377BF7',color:'white'
      ,borderRadius:'50px', padding:'10px 60px 10px 60px',border:'0px'}} >Save</button>
      </Form>
    </Container>
  );
};

export default Roleedit;
