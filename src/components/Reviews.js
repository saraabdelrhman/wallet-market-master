import React, { useState } from "react";
import img1 from './images/image 6 (1).png';
import img2 from './images/image 6 (2).png';
import img3 from './images/image 6 (3).png';
// Import Font Awesome for star icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function Reviews() {
  // State to hold reviews and new review data
  const [reviews, setReviews] = useState([
    { name: "Gerald", stars: 5, review: "Write a review", image: img1, date: "1 day ago" },
    { name: "Diana", stars: 4, review: "Super efficient service and delivery.", image: img2, date: "4 days ago" },
    { name: "Andre", stars: 4, review: "Amazing delivery speed and service quality.", image: img3, date: "27 Aug 2024" }
  ]);

  const [newReview, setNewReview] = useState({ name: '', stars: 0, review: '' });
  const [showModal, setShowModal] = useState(false);  // State to handle modal visibility

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.stars > 0 && newReview.review) {
      const currentDate = new Date().toLocaleDateString("en-US", { day: 'numeric', month: 'short', year: 'numeric' });
      const updatedReviews = [...reviews, { ...newReview, date: currentDate, image: img1 }]; // Use a default image
      setReviews(updatedReviews);
      setNewReview({ name: '', stars: 0, review: '' }); // Reset form
      setShowModal(true);  // Show the modal after submission
    }
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Function to set the star rating for new review
  const handleStarClick = (rating) => {
    setNewReview((prevReview) => ({ ...prevReview, stars: rating }));
  };

  return (
    <div className="container w-100">
      <header className="header" style={{ backgroundColor: "#EEF5FF" }}>
        <h1 className="text-center mt-5 mb-5 fw-bold">
          Browse the best
          <br />
          product reviews
        </h1>
      </header>

      <div className="reviews-container" style={reviewsContainerStyle}>
        {/* Left section (Reviews and Ratings) */}
        <div className="left-section" style={leftSectionStyle}>
          <div className="review-summary">
            <div className="review-header" style={reviewHeaderStyle}>
              <div className="review-info" style={reviewInfoStyle}>
                <div style={reviewTitleStyle}>Review</div>
                <div style={reviewCountStyle}>2,700 User reviews</div>
              </div>
              <div className="review-rating" style={ratingStyle}>
                <div style={ratingNumberStyle}>4.8</div>
              </div>
            </div>
          </div>

          {/* Display all reviews */}
          <div style={additionalReviewsStyle}>
            {reviews.map((r, index) => (
              <ReviewItem key={index} name={r.name} date={r.date} stars={r.stars} review={r.review} image={r.image} />
            ))}
          </div>

          {/* Form to submit a new review */}
          <div style={newReviewFormStyle}>
            <h3>Add Your Review</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                style={inputStyle}
              />
              <div style={starsContainerStyle}>
                {renderStarsForForm(newReview.stars, handleStarClick)}
              </div>
              <textarea
                placeholder="Write your review here..."
                value={newReview.review}
                onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                style={textareaStyle}
              ></textarea>
              <button type="submit" style={submitButtonStyle}>Submit Review</button>
            </form>
          </div>
        </div>

        {/* Right section (About Me) */}
        <div className="right-section" style={rightSectionStyle}>
          <div className="about-card" style={aboutCardStyle}>
            <div className="about-content" style={aboutContentStyle}>
              <div style={aboutTitleStyle}>About Nike</div>
              <div style={aboutDescriptionStyle}>
                Nike, Inc. (stylized as NIKE) is an American athletic footwear
                and apparel corporation headquartered near Beaverton, Oregon,
                United States.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for submitting the review */}
      {showModal && (
        <div className="modal" style={modalStyle}>
          <div className="modal-content" style={modalContentStyle}>
            <h3>Rate your recent experience</h3>
            <div style={starsContainerStyle}>
              {renderStarsForForm(newReview.stars, handleStarClick)}
            </div>
            <textarea
              placeholder="What is your experience?"
              value={newReview.review}
              style={textareaStyle}
              readOnly
            ></textarea>
            <div style={modalActionsStyle}>
             <Link to={'/thanks'}> <button onClick={closeModal} style={confirmButtonStyle}>Yes</button></Link>
              <button onClick={closeModal} style={cancelButtonStyle}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Review item component for reusability with image as a prop
const ReviewItem = ({ name, date, stars, review, image }) => (
  <div style={reviewItemStyle}>
    <div style={reviewerStyle}>
      <img src={image} alt={name} style={reviewerImageStyle} />
      <div className="reviewer-details" style={reviewerDetailsStyle}>
        <div className="reviewer-name" style={reviewerNameStyle}>
          {name}
        </div>
        <div style={reviewDateStyle}>
          {date}
        </div>
      </div>
    </div>
    <div className="review-stars" style={starsContainerStyle}>
      {renderStars(stars)}
    </div>
    <div style={reviewTextStyle}>
      {review}
    </div>
  </div>
);

// Render stars for display
const renderStars = (count) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={i < count ? faStar : faStarEmpty}
        style={{ color: i < count ? "#FA8232" : "#ADB7BC", fontSize: "20px" }}
      />
    );
  }
  return stars;
};

// Render stars for form submission with click functionality
const renderStarsForForm = (selectedStars, onClick) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={i <= selectedStars ? faStar : faStarEmpty}
        onClick={() => onClick(i)}
        style={{ color: i <= selectedStars ? "#FA8232" : "#ADB7BC", fontSize: "25px", cursor: "pointer" }}
      />
    );
  }
  return stars;
};

// Modal Styles
const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000
};

const modalContentStyle = {
  width: "400px",
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const modalActionsStyle = {
  display: "flex",
  justifyContent: "space-around",
  marginTop: "20px",
  width: "100%"
};

const confirmButtonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007AFF",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const cancelButtonStyle = {
  padding: "10px 20px",
  backgroundColor: "#fff",
  color: "#007AFF",
  border: "1px solid #007AFF",
  borderRadius: "8px",
  cursor: "pointer",
};

// Form Styles
const newReviewFormStyle = {
  width: "100%",
  padding: "24px",
  background: "#F5F7FE",
  borderRadius: "24px",
  border: "1px #E4E7E9 solid",
  marginTop: "30px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  fontSize: "16px",
  borderRadius: "8px",
  border: "1px solid #E4E7E9",
};

const textareaStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  fontSize: "16px",
  borderRadius: "8px",
  border: "1px solid #E4E7E9",
  minHeight: "100px",
};

const submitButtonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007AFF",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

// Styles for existing components
const reviewsContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "30px",
  flexWrap: "wrap",
};

const leftSectionStyle = {
  flex: 2,
  minWidth: "300px",
};

const reviewHeaderStyle = {
  alignSelf: "stretch",
  height: "161px",
  padding: "24px",
  background: "#F5F7FE",
  borderRadius: "24px",
  border: "1px solid #E4E7E9",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "100px",
};

const reviewInfoStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
};

const reviewTitleStyle = {
  fontSize: "34px",
  fontFamily: "Poppins",
  fontWeight: "500",
  color: "#191C1F",
};

const reviewCountStyle = {
  fontSize: "16px",
  fontFamily: "Poppins",
  fontWeight: "400",
  color: "#636C71",
};

const ratingStyle = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
};

const ratingNumberStyle = {
  fontSize: "34px",
  fontFamily: "Poppins",
  fontWeight: "500",
  color: "#191C1F",
};

const additionalReviewsStyle = {
  width: "100%",
  padding: "24px",
  background: "#F5F7FE",
  borderRadius: "24px",
  border: "1px #E4E7E9 solid",
  flexDirection: "column",
  display: "inline-flex",
  gap: "24px",
};

const reviewItemStyle = {
  width: "100%",
  padding: "24px",
  background: "#F5F7FE",
  borderRadius: "30px",
  border: "1px #E4E7E9 solid",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const reviewerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
};

const reviewerImageStyle = {
  width: "68px",
  height: "68px",
  borderRadius: "50%",
};

const reviewerDetailsStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const reviewerNameStyle = {
  fontSize: "24px",
  fontFamily: "Poppins",
  fontWeight: "500",
  color: "#191C1F",
};

const reviewDateStyle = {
  paddingTop: "8px",
  paddingBottom: "8px",
  display: "inline-flex",
  gap: "8px",
  color: "#636C71",
  fontSize: "16px",
  fontWeight: "400",
};

const reviewTextStyle = {
  color: "#636C71",
  fontSize: "16px",
  fontWeight: "400",
};

const starsContainerStyle = {
  display: "flex",
  gap: "5px",
};

const rightSectionStyle = {
  width: "360px",
  flexShrink: 0,
  minWidth: "300px",
};

const aboutCardStyle = {
  padding: "24px",
  background: "#F5F7FE",
  borderRadius: "24px",
  border: "1px solid #E4E7E9",
};

const aboutContentStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

const aboutTitleStyle = {
  fontSize: "16px",
  fontFamily: "Poppins",
  fontWeight: "500",
  color: "#191C1F",
  textTransform: "uppercase",
};

const aboutDescriptionStyle = {
  fontSize: "14px",
  fontFamily: "Poppins",
  fontWeight: "400",
  color: "#474545",
  lineHeight: "24px",
};
