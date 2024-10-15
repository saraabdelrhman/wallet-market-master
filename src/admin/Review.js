import React, { useState, useEffect } from 'react';
import { Button, Table, Container, Row, Col } from 'react-bootstrap';
import { FaEye, FaEdit, FaTrash, FaArrowRight, FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import searchIcon from './images/search-normal.png';
import '../App.css';
import photo from './images/photo.png';

const Review = () => { 
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  const fakeData = {
    reviews: [
      { id: '1', productId: '968', userId: '858', rating: 4.5 },
      { id: '2', productId: '123', userId: '654', rating: 5 },
      { id: '3', productId: '876', userId: '987', rating: 3 },
      { id: '4', productId: '456', userId: '321', rating: 2 },
      { id: '5', productId: '999', userId: '123', rating: 4 },
    ],
    totalPages: 2 
  };

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://wallyt.com/reviews?page=${page}&size=${size}`);
        if (!response.ok) {
          throw new Error('Failed to fetch reviews data');
        }
        const data = await response.json();
        setReviews(data.reviews);
        setTotalPages(data.totalPages);
      } catch (error) {
        setError(error.message);
        setReviews(fakeData.reviews); 
        setTotalPages(fakeData.totalPages);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [page, size]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this review? This action cannot be undone.")) {
      try {
        const response = await fetch(`https://wallyt.com/review/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to delete review');
        }
        alert('Review deleted successfully!');
        setReviews(reviews.filter(review => review.id !== id));
      } catch (error) {
        alert(`Error deleting review: ${error.message}`);
      }
    }
  };

  const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    return stars;
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
        <h2 className="fw-bold">Reviews</h2>
        <Link to={'/admin/newreview'}>
          <Button
            style={{
              backgroundColor: '#377BF7',
              color: 'white',
              borderRadius: '50px',
              padding: '10px',
            }}
          >
            Add Review
          </Button>
        </Link>
      </div>

      <Row>
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead className="bg-light">
              <tr>
                <th>ID</th>
                <th>Product ID</th>
                <th>User ID</th>
                <th>Rating</th>
                <th>Actions</th>
                <th>Verification</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6">Loading...</td>
                </tr>
              ) : (
                reviews.map(review => (
                  <tr key={review.id}>
                    <td>{review.id}</td>
                    <td>{review.productId}</td>
                    <td>{review.userId}</td>
                    <td>{renderStarRating(review.rating)}</td>
                    <td className="d-flex justify-content-center gap-4">
                      <Link to={'/reviewview'}>
                        <Button size="sm" className="bg-transparent text-dark p-0"><FaEye /></Button>
                      </Link>
                      <Link to={'/reviewedit'}>
                        <Button size="sm" className="bg-transparent text-dark p-0"><FaEdit /></Button>
                      </Link>
                      <Button size="sm" className="bg-transparent text-dark p-0" onClick={() => handleDelete(review.id)}>
                        <FaTrash />
                      </Button>
                    </td>
                    <td>
                      <Button type="submit" style={{ backgroundColor: '#377BF7', color: 'white', borderRadius: '50px', padding: '8px', border: '0px' }}>
                        Verify
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </Row>

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
            {number + 1}
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

export default Review;
