import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Used to extract productId from URL
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductReview() {
  const { productId } = useParams(); // Dynamically get the product ID from the URL
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('5');
  const [reviews, setReviews] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState({});

  // Fetch reviews when the component mounts
  useEffect(() => {
    fetch(`https://wallyt.com/reviews/${productId}`)
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error('Error fetching reviews:', err));
  }, [productId]);

  // Function to fetch comments for a specific review
  const fetchComments = (reviewId) => {
    fetch(`https://wallyt.com/comments/${reviewId}`)
      .then(res => res.json())
      .then(data => {
        setComments(prev => ({ ...prev, [reviewId]: data }));
      })
      .catch(err => console.error('Error fetching comments:', err));
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();

    const newReview = {
      user_id: 'anonymous',
      comment: comment,
      rating: rating,
      createdAt: new Date().toISOString(),
    };

    fetch('https://wallyt.com/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(newReview),
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => {
      setReviews([...reviews, data]); 
      notify('Review submitted successfully!');
    })
    .catch(err => {
      console.error('Error:', err.message);
    });

    setComment(''); 
    setRating('5'); 
  };

  const handleSubmitComment = (e, reviewId) => {
    e.preventDefault();

    const newComment = {
      user_id: 'anonymous',
      text: commentText,
      review_id: reviewId,
      createdAt: new Date().toISOString(),
    };

    fetch('https://wallyt.com/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(newComment),
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => {
      const updatedComments = comments[reviewId] ? [...comments[reviewId], data] : [data];
      setComments({ ...comments, [reviewId]: updatedComments });
      setCommentText('');
      notify('Comment submitted successfully!');
    })
    .catch(err => {
    console.error('Error:', err.message);
    });
  };

  const notify = (message) =>
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  return (
    <div className="container mt-5">
      <h3 className="fw-bold mt-5">User Reviews ⭐</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to leave a review!</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="card mb-3 rounded-3">
            <div className="card-body">
              <p className="card-text"><strong>User:</strong> {review.user_id}</p>
              <p className="card-text"><strong>Comment:</strong> {review.comment}</p>
              <p className="card-text"><strong>Rating:</strong> {review.rating} ⭐</p>
              <p className="card-text"><strong>Reviewed At:</strong> {new Date(review.createdAt).toLocaleString()}</p>
              <button onClick={() => fetchComments(review.id)} className="btn btn-link">
                {comments[review.id] ? 'Hide Comments' : 'Show Comments'}
              </button>
              {comments[review.id] && comments[review.id].map((comment) => (
                <div key={comment.id} className="card mt-2">
                  <div className="card-body">
                    <p className="card-text"><strong>User:</strong> {comment.user_id}</p>
                    <p className="card-text"><strong>Comment:</strong> {comment.text}</p>
                    <p className="card-text"><strong>Commented At:</strong> {new Date(comment.createdAt).toLocaleString()}</p>
                  </div>
                </div>
              ))}
              <form onSubmit={(e) => handleSubmitComment(e, review.id)}>
                <div className="mb-3 mt-3">
                  <textarea 
                    className="form-control" 
                    rows="2" 
                    placeholder="Write your comment here..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-warning">Submit Comment</button>
              </form>
            </div>
          </div>
        ))
      )}
      <h2 className="fw-bold mb-4">Add a Review</h2>
      <form onSubmit={handleSubmitReview}>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label fw-bold">Comment</label>
          <textarea 
            id="comment" 
            className="form-control" 
            rows="4" 
            placeholder="Write your comment here..."
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="rating" className="form-label fw-bold">Rating</label>
          <select 
            id="rating" 
            className="form-select"
            value={rating}
            onChange={handleRatingChange}
          >
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Good</option>
            <option value="3">3 - Average</option>
            <option value="2">2 - Poor</option>
            <option value="1">1 - Terrible</option>
          </select>
        </div>
        <button type="submit" className="btn btn-warning mb-5">Submit Review</button>
        <ToastContainer />
      </form>
    </div>
  );
}
