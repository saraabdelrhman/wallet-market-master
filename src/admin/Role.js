import React, { useState, useEffect } from 'react';
import { Button, Table, Container, Row, Col } from 'react-bootstrap';
import { FaEye, FaEdit, FaTrash, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import searchIcon from './images/search-normal.png'; // Ensure you have this image in the specified path
import '../App.css'; // Ensure your CSS is properly set up
import photo from './images/photo.png';

const Role = () => {
  const [roles, setRoles] = useState([]);  // State for handling multiple roles
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [page, setPage] = useState(0);  // Current page number
  const [size, setSize] = useState(10);  // Default page size
  const [totalPages, setTotalPages] = useState(1);  // Total pages

  // Fake data in case of API failure
  const fakeData = {
    roles: [
      { id: '1', role: 'Admin', permissions: 'Full Access' },
      { id: '2', role: 'Editor', permissions: 'Edit Content' },
      { id: '3', role: 'Viewer', permissions: 'View Only' },
      { id: '4', role: 'Moderator', permissions: 'Manage Comments' },
      { id: '5', role: 'Contributor', permissions: 'Submit Content' }
    ],
    totalPages: 2  // Assume multiple pages for fake data
  };

  useEffect(() => {
    const fetchRoles = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://wallyt.com/roles?page=${page}&size=${size}`);
        if (!response.ok) {
          throw new Error('Failed to fetch roles data');
        }
        const data = await response.json();
        setRoles(data.roles);  // Assuming `roles` is an array in the API response
        setTotalPages(data.totalPages);  // Assuming total pages info is provided in 'totalPages'
      } catch (error) {
        setError(error.message);
        setRoles(fakeData.roles);  // Use fake data in case of API failure
        setTotalPages(fakeData.totalPages);
      } finally {
        setLoading(false);
      }
    };

    fetchRoles();
  }, [page, size]);  // Refetch data when page or size changes

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this role? This action cannot be undone.")) {
      try {
        const response = await fetch(`https://wallyt.com/role/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to delete role');
        }
        alert('Role deleted successfully!');
        setRoles(roles.filter(role => role.id !== id));  // Remove deleted role from state
      } catch (error) {
        alert(`Error deleting role: ${error.message}`);
      }
    }
  };

  return (
    <Container fluid className="d-flex flex-column mt-5">
      <Row className="mb-4 align-items-center">
        <Col md={6} xs={12} className="d-flex align-items-center search-container">
          <div
            style={{
              width: '100%',
              padding: '11.25px 18px',
              borderRadius: '56.25px',
              border: '1.12px solid #EEEEEE',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                textAlign: 'right',
                color: '#7F8190',
                fontSize: '18px',
                fontFamily: 'Poppins',
                fontWeight: '400',
              }}
            >
              Search
            </div>
            <div
              style={{
                width: '36px',
                height: '36px',
                background: '#377BF7',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={searchIcon} alt="Search Icon" style={{ width: '18px', height: '18px' }} />
            </div>
          </div>
        </Col>

        <Col md={6} xs={12} className="d-flex justify-content-end align-items-center mt-3 mt-md-0 user-info">
          <div className="text-end">
            <div className="fw-bold" style={{ fontSize: 18 }}>Elisa</div>
            <div style={{ color: '#7F8190', fontSize: 15 }}>Admin</div>
          </div>
          <img
            src={photo}
            alt="User Avatar"
            className="user-avatar"
            style={{
              width: '51.75px',
              height: '51.75px',
              marginLeft: '10px',
              background: '#E6D3F8',
              borderRadius: '50%',
            }}
          />
        </Col>
      </Row>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">Roles</h2>
        <Link to={'/admin/newrole'}>
          <Button
            style={{
              backgroundColor: '#377BF7',
              color: 'white',
              borderRadius: '50px',
              padding: '10px',
            }}
          >
            Add Role
          </Button>
        </Link>
      </div>

      {/* Roles Table */}
      <Row>
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead className="bg-light">
              <tr>
                <th>Role</th>
                <th>Permissions</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="3">Loading...</td>
                </tr>
              ) : (
                roles.map(role => (
                  <tr key={role.id}>
                    <td>{role.role}</td>
                    <td>{role.permissions}</td>
                    <td className="d-flex justify-content-center gap-4">
                      <Link to={'/roleview'}>
                        <Button size="sm" className="bg-transparent text-dark p-0"><FaEye /></Button>
                      </Link>
                      <Link to={'/roleedit'}>
                        <Button size="sm" className="bg-transparent text-dark p-0"><FaEdit /></Button>
                      </Link>
                      <Button size="sm" className="bg-transparent text-dark p-0" onClick={() => handleDelete(role.id)}>
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </Row>

      {/* Pagination */}
      <Row className="d-flex justify-content-center my-4">
        <Button
          variant="link"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
          className="pagination-btn"
        >
          <FaArrowLeft size={14} color={page === 0 ? '#ccc' : '#377BF7'} />
        </Button>

        {[...Array(6).keys()].map((number) => (
          <Button
            key={number}
            className={`pagination-btn ${number === page ? 'active' : ''}`}
            onClick={() => setPage(number)}
          >
            {number + 1} {/* This will display 1, 2, 3, etc. */}
          </Button>
        ))}

        <Button
          variant="link"
          onClick={() => setPage(page + 1)}
          disabled={page === 5}
          className="pagination-btn"
        >
          <FaArrowRight size={14} color={page === 5 ? '#ccc' : '#377BF7'} />
        </Button>
      </Row>
    </Container>
  );
};

export default Role;
