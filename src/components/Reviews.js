import React from "react";
import img1 from './images/image 6 (1).png';
import img2 from './images/image 6 (2).png';
import img3 from './images/image 6 (3).png';

// Import Font Awesome for star icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons';

export default function Reviews() {
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

          {/* Star Rating Breakdown */}
          <div style={ratingBreakdownContainerStyle}>
            {renderRatingRow(5, 70)}
            {renderRatingRow(4, 20)}
            {renderRatingRow(3, 10)}
            {renderRatingRow(2, 5)}
            {renderRatingRow(1, 3)}
          </div>

          {/* Individual Review Cards */}
          <div className="review-card" style={reviewCardStyle}>
            <div className="reviewer" style={reviewerStyle}>
              <img
                className="reviewer-image"
                src={img1}
                alt="Reviewer"
                style={reviewerImageStyle}
              />
              <div className="reviewer-details" style={reviewerDetailsStyle}>
                <div className="reviewer-name" style={reviewerNameStyle}>
                  Gerald
                </div>
                <div className="reviewer-action" style={writeReviewStyle}>
                  Write a review
                </div>
              </div>
            </div>
            <div className="review-stars" style={starsContainerStyle}>
              {renderStars(5)}
            </div>
          </div>

          {/* Additional Reviews */}
          <div style={additionalReviewsStyle}>
            <ReviewItem
              name="Diana"
              date="4 days ago"
              stars={4}
              review="Super efficient service and delivery. Couldn't fault at all...the best pet product service I have experienced over many years."
              image={img2}
            />
            <ReviewItem
              name="Andre"
              date="27 Aug 2024"
              stars={4}
              review="Amazing delivery speed and service quality. Will definitely recommend to others."
              image={img3}
            />
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
    </div>
  );
}

// Helper to render individual reviews
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

// Helper to render stars
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

// Helper to render the rating breakdown
const renderRatingRow = (stars, percentage) => (
  <div style={ratingRowStyle}>
    <div style={starLabelStyle}>{stars} Star</div>
    <div style={ratingBarContainerStyle}>
      <div style={{ ...ratingBarStyle, width: `${percentage}%` }}></div>
    </div>
    <div style={ratingPercentageStyle}>{percentage}%</div>
  </div>
);

// Styles
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

const ratingBreakdownContainerStyle = {
  width: '100%',
  padding: "24px",
  background: "#F5F7FE",
  borderRadius: "24px",
  border: "1px solid #E4E7E9",
  flexDirection: "column",
  display: "inline-flex",
  gap: "24px",
};

const ratingRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const starLabelStyle = {
  fontSize: "14px",
  fontFamily: "Poppins",
  fontWeight: "500",
  color: "#191C1F",
};

const ratingBarContainerStyle = {
  flex: 1,
  background: "rgba(120, 120, 128, 0.16)",
  height: "10px",
  borderRadius: "50px",
  margin: "0 15px",
};

const ratingBarStyle = {
  background: "#007AFF",
  height: "100%",
  borderRadius: "50px",
};

const ratingPercentageStyle = {
  fontSize: "14px",
  fontFamily: "Poppins",
  fontWeight: "500",
  color: "#191C1F",
};

const reviewCardStyle = {
  alignSelf: "stretch",
  padding: "24px",
  background: "#F5F7FE",
  borderRadius: "24px",
  border: "1px solid #E4E7E9",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "30px",
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

const writeReviewStyle = {
  fontSize: "16px",
  fontFamily: "Poppins",
  fontWeight: "400",
  color: "#377BF7",
};

const starsContainerStyle = {
  display: "flex",
  gap: "5px",
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

