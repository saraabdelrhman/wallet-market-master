import React, { useState, useEffect } from 'react';
import { Button, Table, Container, Row, Col } from 'react-bootstrap';
import { FaEye, FaEdit, FaTrash, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import searchIcon from './images/search-normal.png'; // Ensure you have this image in the specified path
import '../App.css'; // Ensure the same CSS used for the Users component is applied
import photo from './images/photo.png'; // Placeholder for user avatar

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);  // Track current page
  const [size, setSize] = useState(10); // Track page size
  const [totalPages, setTotalPages] = useState(1); // Track total pages (pagination)

  // Fake data to use if the API call fails
  const fakeData = {
    categories: [
      { id: '1', name: 'Electronics', parentCategoryId: '0' },
      { id: '2', name: 'Books', parentCategoryId: '0' },
      { id: '3', name: 'Clothing', parentCategoryId: '0' },
      { id: '4', name: 'Home Appliances', parentCategoryId: '0' },
      { id: '5', name: 'Groceries', parentCategoryId: '0' },
    ],
    totalPages: 2, // Assume multiple pages for pagination demonstration
  };

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://194.62.97.207/categories?page=${page}&size=${size}`);
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data.categories);
        setTotalPages(data.totalPages); // Set the total pages from the API response
      } catch (error) {
        setError(error.message);
        setCategories(fakeData.categories); // Use fake data if API request fails
        setTotalPages(fakeData.totalPages); // Use fake total pages if API request fails
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [page, size]);  // Fetch data again when page or size changes

  // Handle delete category
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        const response = await fetch(`http://194.62.97.207/category/${id}`, { method: 'DELETE' });
        if (!response.ok) throw new Error('Failed to delete category');
        alert('Category deleted successfully!');
        setCategories(categories.filter(category => category.id !== id));
      } catch (error) {
        alert(`Error deleting category: ${error.message}`);
      }
    }
  };

  // Handle page change for pagination
  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setPage(newPage);
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
        <h2 className="fw-bold">Categories</h2>
        <Link to={'/admin/newcategory'}>
          <Button
            style={{
              backgroundColor: '#377BF7',
              color: 'white',
              borderRadius: '50px',
              padding: '10px',
            }}
          >
            Add Category
          </Button>
        </Link>
      </div>

      {/* Categories Table */}
      <Row>
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead className="bg-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Parent Category ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4">Loading...</td>
                </tr>
              ) : (
                categories.map(category => (
                  <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td>{category.parentCategoryId || 'N/A'}</td>
                    <td className="d-flex justify-content-center gap-4">
                      <Link to={`/categoryview/${category.id}`}>
                        <Button size="sm" className="bg-transparent text-dark p-0"><FaEye /></Button>
                      </Link>
                      <Link to={`/categoryedit/${category.id}`}>
                        <Button size="sm" className="bg-transparent text-dark p-0"><FaEdit /></Button>
                      </Link>
                      <Button size="sm" className="bg-transparent text-dark p-0" onClick={() => handleDelete(category.id)}>
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

export default Category;
