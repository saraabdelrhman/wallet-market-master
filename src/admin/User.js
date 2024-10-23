import React, { useState, useEffect } from 'react';
import { Button, Table, Container, Row, Col } from 'react-bootstrap';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import searchIcon from './images/search-normal.png';
import config from '../Config'; // Import the config file
import '../App.css';
import photo from './images/photo.png';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const fakeData = {
    users: [
      { id: '1', email: 'fake.john@example.com', name: 'John Doe', role: 'Admin' },
      { id: '2', email: 'fake.jane@example.com', name: 'Jane Doe', role: 'User' },
      { id: '3', email: 'fake.jack@example.com', name: 'Jack Smith', role: 'Moderator' },
    ],
    totalPages: 1,
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        // Correct the API endpoint structure here
        const response = await fetch(`${config.apiUrl}/user?page=${page}&size=${size}`);



        if (!response.ok) throw new Error('Failed to fetch users data');
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        setError(error.message);
        setUsers(fakeData.users); // Use fake data if the API request fails
      } finally {
        setLoading(false);
      }
    };
  
    fetchUsers();
  }, [page, size]);
  

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const response = await fetch(`http://194.62.97.207/users/${id}`, { method: 'DELETE' });
        if (!response.ok) throw new Error('Failed to delete user');
        alert('User deleted successfully!');
        setUsers(users.filter(user => user.id !== id));
      } catch (error) {
        alert(`Error deleting user: ${error.message}`);
      }
    }
  };

  return (
    <Container fluid className="d-flex flex-column mt-5">
      <Row className="mb-2 align-items-center">
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
              backgroundColor: 'transparent', // Transparent background
            }}
          >
            <input
              type="text"
              placeholder="Search"
              style={{
                textAlign: 'left', // Placeholder aligned to the left
                color: '#7F8190',
                fontSize: '18px',
                fontFamily: 'Poppins',
                fontWeight: '400',
                border: 'none',
                outline: 'none',
                width: '100%',
                backgroundColor: 'transparent', // Transparent background
                padding: '0', // Remove padding for better alignment
              }}
            />
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

        <Col md={6} xs={12} className="d-flex justify-content-end align-items-center mt-3 mt-md-0">
          <div className="d-flex align-items-center">
            <div className="text-end">
              <div className="fw-bold" style={{ fontSize: 18 }}>Elisa</div>
              <div style={{ color: '#7F8190', fontSize: 15 }}>Admin</div>
            </div>
            <img
              src={photo}
              alt="User Avatar"
              className="user-avatar ms-3"
              style={{ width: '36px', height: '36px', borderRadius: '50%' }}
            />
          </div>
        </Col>
      </Row>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">Users</h2>
        <Link to={'/admin/newuser'}>
          <Button
            style={{
              backgroundColor: '#377BF7',
              color: 'white',
              borderRadius: '50px',
              padding: '10px',
            }}
          >
            Add User
          </Button>
        </Link>
      </div>
      
      {/* User Table */}
      <Row>
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead className="bg-light">
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Name</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5">Loading...</td>
                </tr>
              ) : (
                users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td className="d-flex justify-content-center gap-4">
                      <Link to={'/admin/singleuser'}>
                        <Button size="sm" className="bg-transparent text-dark p-0"><FaEye /></Button>
                      </Link>
                      <Link to={'/admin/useredit'}>
                        <Button size="sm" className="bg-transparent text-dark p-0"><FaEdit /></Button>
                      </Link>
                      <Button size="sm" className="bg-transparent text-dark p-0" onClick={() => handleDelete(user.id)}>
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

export default Users;

