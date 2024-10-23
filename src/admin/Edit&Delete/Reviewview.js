import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const Review = ({ reviewId }) => {
  const [reviewDetails, setReviewDetails] = useState({
    id: '',
    productId: '',
    userId: '',
    rating: '',
    comment: '',
    reviewText: '',
    createdAt: ''
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const response = await fetch(`http://194.62.97.207/review/${reviewId}`); // Adjust to your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch review details');
        }
        const data = await response.json();
        setReviewDetails({
          id: data.id,
          productId: data.productId,
          userId: data.userId,
          rating: data.rating,
          comment: data.comment,
          reviewText: data.reviewText,
          createdAt: data.createdAt
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching review details:', error);
        setError(error.message);

        // Set fallback fake data in case of error
        setReviewDetails({
          id: '0003',
          productId: '255',
          userId: '189',
          rating: '4',
          comment: 'i recoomend it',
          reviewText: 'Good',
          createdAt: '2024'
        });

        setLoading(false);
      }
    };

    fetchReviewData();
  }, [reviewId]);  // Re-fetch when reviewId changes

  if (loading) return <Container>Loading...</Container>;

  return (
    <Container fluid className="mt-5 text-center">
      <h2 className="fw-bold pb-3">Review Moderation</h2>
      {error && <div className="text-danger mb-3">Error: {error}. Showing fallback data.</div>}
      <div className="d-flex flex-column align-items-center">
        <p><strong>ID:</strong> {reviewDetails.id}</p>
        <p><strong>Product ID:</strong> {reviewDetails.productId}</p>
        <p><strong>User ID:</strong> {reviewDetails.userId}</p>
        <p><strong>Rating:</strong> {reviewDetails.rating}</p>
        <p><strong>Review:</strong> {reviewDetails.reviewText}</p>
        <p><strong>Comment:</strong> {reviewDetails.comment}</p>
        <p><strong>Created At:</strong> {reviewDetails.createdAt}</p>
      </div>
    </Container>
  );
};

export default Review;
