import { error } from 'ajv/dist/vocabularies/applicator/dependencies';
import React, { useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function PhoneReview() {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('5');
  const [reviews, setReviews] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      id: reviews.length + 1,
      comment: comment,
      rating: rating,
    };
    console.log('Data to be sent:',newReview)
    fetch('http://localhost:3000/api/register',{
      method:'post',
      headers:{
         'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(newReview),

    }).then(res=>{
      console.log(res.status)
      console.log(res.headers)
      if(!res.ok)
       {
        throw new error('Network response was not ok')
       }
       return res.json()
    })
    .then(newReview=>{
      console.log('Response data:',newReview)
    })
    .catch(err=>{
      console.error('Error:', err.message)
    }

    )

    setReviews([...reviews, newReview]);

    setComment('');
    setRating('5');
  };
    const notify = () =>
      toast.success('Thank you for your review! Your feedback has been submitted successfully!', {
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
              <p className="card-text">{review.comment}</p>
              <p className="card-text"><strong>Rating:</strong> {review.rating} ⭐</p>
            </div>
          </div>
        ))
      )}
       <h2 className="fw-bold mb-4">Add a Comment & Review</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-warning mb-5" onClick={notify}>Submit Review</button>
        <ToastContainer />
      </form>
    </div>
  );
}
