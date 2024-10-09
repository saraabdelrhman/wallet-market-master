import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- Import useNavigate
import img1 from './images/image 6 (1).png';
import img2 from './images/image 6 (2).png';
import img3 from './images/image 6 (3).png';
import shape from './images/zgzg-removebg-preview.png';
import shape2 from './images/zgzg-left.png';
import ai from './images/ai.png';
import like from './images/like.png';
import dislike from './images/dislike.png';
import share from './images/share.png';
import translate from './images/bi_translate.png';
import anonymous from './images/anonymous.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function Reviews() {
  const [reviews, setReviews] = useState([
    { name: "Gerald ",role:'Expert 🎖️', stars: 5, review: "I love this product! easy to user and super cozy!", image: anonymous, date: "Now" },
    { name: "Diana ",role:'Most commented 🏆', stars: 4, review: "Super efficient service and delivery.", image: img2, date: "4 days ago" },
    { name: "Andre ", role:'User 🏅 ',stars: 4, review: "Amazing delivery speed and service quality.", image: img3, date: "27 Aug 2024" }
  ]);

  const [newReview, setNewReview] = useState({ name: '', stars: 0, review: '', isAnonymous: false });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false); // <-- Add loading state

  const navigate = useNavigate(); // <-- Initialize useNavigate hook

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];  // Get the first selected file
    if (file) {
      setLoading(true); // <-- Set loading state to true
      const reader = new FileReader();  // Create a new FileReader to read the file
      reader.onloadend = () => {
        setNewReview((prevReview) => ({ ...prevReview, image: reader.result }));  // Update the newReview state with the uploaded image
        setLoading(false); // <-- Set loading state to false after upload
      };
      reader.readAsDataURL(file);  // Read the file as a data URL
    }
  };

  // Updated handleSubmit function with navigation
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.stars > 0 && newReview.review) {
      const currentDate = new Date().toLocaleDateString("en-US", { day: 'numeric', month: 'short', year: 'numeric' });
      const updatedReviews = [...reviews, { ...newReview, date: currentDate, image: img1 }];
      setReviews(updatedReviews);
      setNewReview({ name: '', stars: 0, review: '', isAnonymous: false });
      setShowModal(false);
      navigate("/thanks");  // <-- Redirect to the "thanks" page after submission
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleStarClick = (rating) => {
    setNewReview((prevReview) => ({ ...prevReview, stars: rating }));
  };

  const toggleAnonymous = () => {
    setNewReview((prevReview) => ({ ...prevReview, isAnonymous: !prevReview.isAnonymous }));
  };

  return (
    <div className="container w-100">
      <header className="header" style={{ backgroundColor: 'transparent' }}>
        <h1 className="text-center mt-5 mb-5 fw-bold">
          Browse the best
          <br />
          product reviews
        </h1>
      </header>

      <img src={shape2} alt="shape" className='d-none d-md-flex' style={{ position: 'absolute', top: '240px', left: '0', width: '300px', zIndex: '1' }} />
      <img src={shape} alt="shape" className='d-none d-md-flex' style={{ position: 'absolute', top: '80px', right: '0', width: '300px', zIndex: '1' }} />

      <div className="reviews-container mt-5" style={reviewsContainerStyle}>
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

          <div style={reviewBoxStyle}>
            <div style={userReviewInfoStyle}>
              <img style={userImageStyle} src={img1} alt="Gerald" />
              <div style={userDetailsStyle}>
                <div style={userNameStyle}>Gerald</div>
                <Link to="#" onClick={() => setShowModal(true)} style={writeReviewLinkStyle}>
                  Write a review
                </Link>
              </div>
            </div>

            <div style={starRatingStyle}>
              {[...Array(5)].map((_, index) => (
                <svg key={index} xmlns="http://www.w3.org/2000/svg" style={{ width: '33px' }} viewBox="0 0 24 24" fill="#377BF7">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="mt-5 mb-5" style={{ backgroundColor: '#f5f7fe' }}>
            <StarRatingOverview rating="5 Star" percentage="70%" color="#007AFF" width="205.71px" />
            <StarRatingOverview rating="4 Star" percentage="20%" color="#007AFF" width="150.33px" />
            <StarRatingOverview rating="3 Star" percentage="10%" color="#007AFF" width="94.94px" />
            <StarRatingOverview rating="2 Star" percentage="5%" color="#007AFF" width="50px" />
            <StarRatingOverview rating="1 Star" percentage="2%" color="#007AFF" width="20px" />
          </div>

          <div style={additionalReviewsStyle}>
            {reviews.map((r, index) => (
              <ReviewItem key={index} name={r.name} role={r.role} date={r.date} stars={r.stars} review={r.review} image={r.image} />
            ))}
          </div>
        </div>

        <div className="right-section" style={rightSectionStyle}>
          <div className="about-card" style={aboutCardStyle}>
            <div className="about-content" style={aboutContentStyle}>
              <div style={aboutTitleStyle}>About Nike</div>
              <div style={aboutDescriptionStyle}>
                Nike, Inc. (stylized as NIKE) is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon, United States.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for new review */}
      {showModal && (
        <div className="modal" style={modalStyle}>
          <div className="modal-content" style={modalContentStyle}>
            <h3 className="fw-bolder py-3">Rate your recent experience</h3>
            <div style={starsContainerStyle} className="py-3">
              {renderStarsForForm(newReview.stars, handleStarClick)}
            </div>
            
            {/* Toggle for anonymous post */}
            <div style={{ 
              width: '100%', 
              paddingTop: 18, 
              paddingBottom: 18, 
              paddingLeft: 24, 
              paddingRight: 12, 
              background: 'rgba(55, 123, 247, 0.20)', 
              borderRadius: 7, 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              display: 'inline-flex' 
            }}>
              <div style={{ 
                color: '#474545', 
                fontSize: 16, 
                fontFamily: 'Roboto', 
                fontWeight: '500', 
                letterSpacing: 0.15, 
                wordWrap: 'break-word' 
              }}>
                Post anonymously
              </div>
              
              {/* Toggle Switch */}
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={newReview.isAnonymous} 
                  onChange={toggleAnonymous} 
                />
                <span className="slider round"></span>
              </label>
            </div>

            <textarea className="py-3 my-3 pb-5"
              placeholder="What's your experience?"
              value={newReview.review}
              onChange={(e) => setNewReview((prevReview) => ({ ...prevReview, review: e.target.value }))}
              style={textareaStyle}
            />
            <div style={{position:'absolute',bottom:'30%',right:'8%',left:'50',display:'flex',gap:'5px'}}>
              <img src={ai} alt="AI" />
              <div style={{color: '#377BF7', fontSize: 12, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>
                Try write with AI
              </div>
            </div>

            {/* Image upload input */}
            <label htmlFor="imageUpload" style={{ cursor: 'pointer', display: 'block', marginBottom: '10px', display:'flex', justifyContent:'space-between' }}>
              <div className="d-flex justify-content-between " style={{gap:'220px'}}>
                {/* Check the loading state and update text */}
                <p className="mt-2">{loading ? <span style={{ color: 'green' }}>Uploading...</span> : 'Attach File'}</p> {/* <-- Updated text */}
                <div style={uploadButtonStyle}>Upload Image</div>
              </div>
              <input id="imageUpload" type="file" style={{ display: 'none' }} onChange={handleImageUpload} />
            </label>

            <div style={modalActionsStyle}>
              <button onClick={handleSubmit} style={confirmButtonStyle} className="rounded-5">Yes</button>
              <button onClick={closeModal} style={cancelButtonStyle} className="rounded-5">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Reusable Components
const ReviewItem = ({ name, date, stars, review, image,role }) => (
  <div style={reviewItemStyle} className="d-flex">
    
    <div style={reviewerStyle} className="d-flex">
     
      <img src={image} alt={name} className="rounded-5 mb-3" />
     
  
      <div className="reviewer-details" style={reviewerDetailsStyle}>
      
      <div className="d-flex">
<div className="d-bock">
  <div className="d-flex">
  <div className="reviewer-name" style={reviewerNameStyle}>{name}</div>
  <span className="mt-1 ms-3 " style={{color: '#6F7171',
fontSize: 20,
fontFamily: 'Poppins',
fontWeight: '500'}}>| </span>
  <div className="mt-1 ms-2" style={{color: '#377BF7',
fontSize: 20,
fontFamily: 'Poppins',
fontWeight: '500',
wordWrap: 'break-word'}}>{role}</div>
  </div>
       
        
        <div style={reviewDateStyle}>{date}</div>
        </div>

        <div className="review-stars mt-5 ms-5" style={starsContainerStyle}>{renderStars(stars)}</div>

        </div>
       
     
     
    </div>
</div>
    <hr></hr>
    <div style={reviewTextStyle}>{review}</div>
    <div className='d-flex  gap-2 pb-5 ms-2' style={{color:'#377BF7'}} >

<img src={translate} alt={translate} className=""/>
<span>View Transalation</span>
</div>
    {name === "Gerald" ? (
      <div  className="d-flex justify-content-end gap-2 ">
        <Link to={'/'}> <button type='submit' style={{backgroundColor:'#377BF7',color:'white',borderRadius:'50px', padding:'10px 20px 10px 20px',border:'0px'}} >Edit</button></Link> 
          <button type='submit' style={{color:'#377BF7',borderRadius:'50px', padding:'10px 20px 10px 20px',border:'1px solid #377BF7'}} >Delete</button>
      
      </div>
    ) : (
      <div style={interactionIconsStyle} className="d-flex justify-content-between gap-5">
        <div className="d-flex">
          <img src={like} alt="like" style={iconStyle} />
          <div style={{ color: '#636C71', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Helpful</div>
          <img src={dislike} alt="dislike" style={iconStyle} className="ms-5" />
          <div style={{ color: '#636C71', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Not Helpful</div>
        </div>
        <div className="d-flex" style={{ justifyContent: 'end' }}>
          <img src={share} alt="share" style={iconStyle} />
          <div style={{ color: '#636C71', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Share</div>
        </div>
      </div>
    )}
  </div>
);


// Component to show the star rating overview
const StarRatingOverview = ({ rating, percentage, color, width }) => (
  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 20, marginBottom: '20px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{ backgroundColor: '#FA8232', width: '20px', height: '20px', borderRadius: '50%' }} />
      <div>{rating}</div>
    </div>
    <div style={{ flexGrow: 1, height: '10px', backgroundColor: 'rgba(120, 120, 128, 0.16)', borderRadius: '9999px' }}>
      <div style={{ width, backgroundColor: color, height: '100%', borderRadius: '9999px' }}></div>
    </div>
    <div>{percentage}</div>
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
  height: "161px",
  padding: "24px",
  background: "#F5F7FE",
  borderRadius: "24px",
  border: "1px solid #E4E7E9",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
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

const reviewBoxStyle = {
  width: '100%',
  padding: '24px',
  background: '#F5F7FE',
  marginTop: '25px',
  borderRadius: '24px',
  border: '1px solid #E4E7E9',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '47px',
};

const userReviewInfoStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  borderRadius:'50%'
};

const userImageStyle = {
  width: '68px',
  background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)',
  borderRadius: '50%',
};

const userDetailsStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const userNameStyle = {
  color: '#191C1F',
  fontSize: '24px',
  fontFamily: 'Poppins',
  fontWeight: '500',
};

const writeReviewLinkStyle = {
  color: '#377BF7',
  fontSize: '16px',
  fontFamily: 'Poppins',
  fontWeight: '400',
  cursor: 'pointer',
  textDecoration: 'none', // This removes any underlines or default link styles
};

const starRatingStyle = {
  display: 'flex',
  gap: '10px',
};

const interactionIconsStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent:'between',
  marginTop: '15px',
};

const iconStyle = {
  width: '24px',
  height: 'auto',
  cursor: 'pointer',
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
  zIndex: 1000,
};

const modalContentStyle = {
  width: "500px",
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor:'#f5f7fe'
};

const textareaStyle = {
  width: "100%",
  height:'200px',
    padding: "10px",
    color:'#ADABC3',
  paddingBottom:"150px",
  fontSize: "16px",
  borderRadius: "10px",
  border: "0px solid #E4E7E9",
  minHeight: "100px",
  position:'relative'
};

const modalActionsStyle = {
  display: "flex",
  justifyContent: "space-around",
  marginTop: "20px",
  width: "100%",
};

const confirmButtonStyle = {
  padding: "10px 90px",
  backgroundColor: "#007AFF",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const cancelButtonStyle = {
  padding: "10px 90px",
  backgroundColor: "#fff",
  color: "#007AFF",
  border: "1px solid #007AFF",
  borderRadius: "8px",
  cursor: "pointer",
};

const uploadButtonStyle = {
  padding: '10px 20px ',
  marginleft:'80px',
  background: 'white',
  borderRadius: 5,
  border: '1px #E6E8EC solid',
  justifyContent: 'center',
};

// Toggle Switch Styles
const toggleSwitchStyle = `
  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 24px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

// Append the styles for the toggle switch
const appendStyles = () => {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = toggleSwitchStyle;
  document.head.appendChild(styleSheet);
};

appendStyles();
