import React, { useState } from "react";
import img1 from './images/image 6 (3).png';
import shape from './images/zgzg-removebg-preview.png';
import shape2 from './images/zgzg-left.png';

export default function Reviews() {
  // State to manage the review data
  const [review, setReview] = useState({
    id: 1,
    productName: "Nike Pegasus 41 PQ",
    reviewer: "Diana",
    date: "4 days ago",
    stars: 4,
    reviewText:
      "Super efficient service and delivery. Couldn't fault at all...the best pet product service I have experienced over many years.",
  });

  const [isEditing, setIsEditing] = useState(false); // Toggle for edit mode
  const [editReviewText, setEditReviewText] = useState(review.reviewText); // Temporary state for editing review text

  // Delete the review (set the state to null to simulate deletion)
  const handleDelete = () => {
    setReview(null); // This removes the review by setting it to null
  };

  // Toggle edit mode and save changes
  const handleEdit = () => {
    if (isEditing) {
      // Save changes
      setReview({ ...review, reviewText: editReviewText });
    }
    setIsEditing(!isEditing); // Toggle edit mode
  };

  // Update the review text during editing
  const handleReviewTextChange = (e) => {
    setEditReviewText(e.target.value);
  };

  if (!review) {
    return (
      <div className="container w-100 position-relative">
        <img
          src={shape2}
          alt="shape"
          className='d-none d-md-flex'
          style={{
            position: 'absolute', // Changed to absolute
            top: '240px',
            left: '0',
            width: '300px',
            zIndex: '1',
          }}
        />
        <img
          src={shape}
          alt="shape"
          className='d-none d-md-flex'
          style={{
            position: 'absolute', // Changed to absolute
            top: '80px',
            right: '0',
            width: '300px',
            zIndex: '1',
          }}
        />
        <header className="header" style={{ backgroundColor: "#EEF5FF" }}>
          <h1 className="text-center mt-5 mb-5 fw-bold">Review Deleted</h1>
        </header>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <p>Your review has been deleted.</p>
          <button
            style={{
              backgroundColor: '#FFF',
              color: '#377BF7',
              border: '1px solid #377BF7',
              borderRadius: '8px',
              padding: '10px 20px',
              fontFamily: 'Poppins',
              fontWeight: '500',
              cursor: 'pointer',
            }}
            onClick={() => window.location.reload()}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container w-100 position-relative" style={{ marginBottom: '50px' }}>
      <header className="header" style={{ backgroundColor: '' }}>
        <h1 className="text-center mt-5 mb-5 fw-bold">Thanks For Your Review!</h1>
      </header>

      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          padding: "24px",
          background: "#FFF",
          borderRadius: "16px",
          border: "1px solid #E4E7E9",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginBottom: "50px", // Added margin to the bottom
        }}
      >
        <img
          src={shape2}
          alt="shape"
          className='d-none d-md-flex'
          style={{
            position: 'absolute', // Changed to absolute
            top: '200px',
            left: '0',
            width: '300px',
            zIndex: '1',
          }}
        />
        <img
          src={shape}
          alt="shape"
          className='d-none d-md-flex'
          style={{
            position: 'absolute', // Changed to absolute
            top: '80px',
            right: '0',
            width: '300px',
            zIndex: '1',
          }}
        />

        {/* Review Pending Notice */}
        <div
          style={{
            padding: "16px",
            background: "#377BF7",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: "600",
            }}
          >
            Your review is pending, wait until admin approves.
          </div>
        </div>

        {/* Review Item */}
        <div>
          <div
            style={{
              fontSize: "24px",
              fontFamily: "Poppins",
              fontWeight: "600",
              color: "#191C1F",
              marginBottom: "16px",
            }}
          >
            {review.productName}
          </div>

          {/* Reviewer Info */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <img
              src={img1}
              alt="Reviewer"
              style={{
                width: "68px",
                height: "68px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  color: "#191C1F",
                }}
              >
                {review.reviewer}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  color: "#636C71",
                  fontWeight: "400",
                }}
              >
                {review.date}
              </div>
            </div>

            {/* Star Rating */}
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} style={{ color: index < review.stars ? "#FA8232" : "#ADB7BC", fontSize: "20px" }}>
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #D9D9D9", margin: "16px 0" }} />

        {/* Review Content */}
        {isEditing ? (
          <textarea
            value={editReviewText}
            onChange={handleReviewTextChange}
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "14px",
              fontFamily: "Poppins",
              borderRadius: "8px",
              border: "1px solid #E4E7E9",
            }}
          />
        ) : (
          <div>
            <div
              style={{
                fontSize: "18px",
                fontFamily: "Poppins",
                fontWeight: "600",
                color: "#191C1F",
                marginBottom: "8px",
              }}
            >
              Super efficient service and delivery
            </div>
            <div
              style={{
                fontSize: "14px",
                fontFamily: "Poppins",
                color: "#636C71",
                fontWeight: "400",
              }}
            >
              {review.reviewText}
            </div>
          </div>
        )}

        {/* Edit/Delete Actions */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: '20px' }}>
          <div style={{ display: "flex", gap: "16px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                cursor: "pointer",
              }}
              onClick={handleEdit}
            >
              <i className="fas fa-edit" style={{ color: "#636C71" }}></i>
              <span
                style={{
                  color: "#636C71",
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                }}
              >
                {isEditing ? "Save" : "Edit"}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                cursor: "pointer",
              }}
              onClick={handleDelete}
            >
              <i className="fas fa-trash" style={{ color: "#636C71" }}></i>
              <span
                style={{
                  color: "#636C71",
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                }}
              >
                Delete
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
