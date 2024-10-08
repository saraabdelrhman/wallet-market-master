import React, { useState, useEffect } from 'react';
import { Button, Table, Container, Row, Col } from 'react-bootstrap';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import searchIcon from './images/search-normal.png';
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
        const response = await fetch(`https://wallyt.com/users?page=${page}&size=${size}`);
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
        const response = await fetch(`https://wallyt.com/Users/${id}`, { method: 'DELETE' });
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
          />
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
                    <td className="action-buttons">
                      <Link to={'/singleuser'}>
                        <Button size="sm" className="me-2 bg-transparent text-dark"><FaEye /></Button>
                      </Link>
                      <Link to={'/useredit'}>
                        <Button size="sm" className="me-2 bg-transparent text-dark"><FaEdit /></Button>
                      </Link>
                      <Button size="sm" className="bg-transparent text-dark" onClick={() => handleDelete(user.id)}>
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
      <div style={{width: '100%', height: '100%', justifyContent: 'center',alignItems: 'center', gap: 20, display: 'inline-flex'}}>
        {/* Left Arrow */}
        <button className="pagination-arrow" style={{ border: 'none', background: 'transparent', marginBottom:'30px' }}>
          <FaArrowLeft style={{ fontSize: '24px', color: '#377BF7' }} />
        </button>

        <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex', marginBottom:'30px'}}>
          {/* Pagination buttons */}
          <div style={{paddingTop: 10, paddingBottom: 10, background: '#377BF7', borderRadius: '50%', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px', display: 'flex'}}>
            <div style={{textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Public Sans', fontWeight: '600', lineHeight: 20, wordWrap: 'break-word'}}>01</div>
          </div>
          <div style={{paddingTop: 10, paddingBottom: 10, background: 'white', borderRadius: '50%', border: '1px #E4E7E9 solid', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px', display: 'flex'}}>
            <div style={{textAlign: 'center', color: '#191C1F', fontSize: 14, fontFamily: 'Public Sans', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>02</div>
          </div>
          <div style={{paddingTop: 10, paddingBottom: 10, background: 'white', borderRadius: '50%', border: '1px #E4E7E9 solid', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px', display: 'flex'}}>
            <div style={{textAlign: 'center', color: '#191C1F', fontSize: 14, fontFamily: 'Public Sans', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>03</div>
          </div>
          <div style={{paddingTop: 10, paddingBottom: 10, background: 'white', borderRadius: '50%', border: '1px #E4E7E9 solid', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px', display: 'flex'}}>
            <div style={{textAlign: 'center', color: '#191C1F', fontSize: 14, fontFamily: 'Public Sans', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>04</div>
          </div>
          <div style={{paddingTop: 10, paddingBottom: 10, background: 'white', borderRadius: '50%', border: '1px #E4E7E9 solid', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px', display: 'flex'}}>
            <div style={{textAlign: 'center', color: '#191C1F', fontSize: 14, fontFamily: 'Public Sans', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>05</div>
          </div>
          <div style={{paddingTop: 10, paddingBottom: 10, background: 'white', borderRadius: '50%', border: '1px #E4E7E9 solid', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px', display: 'flex'}}>
            <div style={{textAlign: 'center', color: '#191C1F', fontSize: 14, fontFamily: 'Public Sans', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>06</div>
          </div>
          {/* More pagination buttons */}
        </div>

        {/* Right Arrow */}
        <button className="pagination-arrow" style={{ border: 'none', background: 'transparent', marginBottom:'30px' }}>
          <FaArrowRight style={{ fontSize: '24px', color: '#377BF7' }} />
        </button>
      </div>
    </Container>
  );
};

export default Users;
