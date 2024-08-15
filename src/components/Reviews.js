import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const reviews = [
  {
    initial: 'L',
    name: 'Lauren Tuttle',
    company: 'ANEWAL',
    review: 'Great service, easy to order, fast response. Very happy.',
    rating: 5,
    color: 'bg-warning'
  },
  {
    initial: 'A',
    name: 'Alan Daly',
    company: 'Roborock',
    review: 'Vacuum Dock has broken twice in 9 months. Having to return it to be repaired is inconvenient and should not happen on an item this expensive. Second time they...',
    rating: 2,
    color: 'bg-secondary'
  },
  {
    initial: 'V',
    name: 'Vinayak Sharma',
    company: 'Rentickle',
    review: 'Worst renting app ever. They are just thief, they kept all of my security deposit and even charged more when I applied for return. Then even if I paid the rent ...',
    rating: 1,
    color: 'bg-danger'
  },
  {
    initial: 'M',
    name: 'michael moat',
    company: 'Prestige Flowers',
    review: 'Good service, delivered on time, recipient delighted with the flowers.',
    rating: 5,
    color: 'bg-success'
  },
  {
    initial: 'D',
    name: 'David Lye',
    company: 'Britannia Parking',
    review: 'Paid for a parking ticket in March 2020 in Bexleyheath but received a parking ticket. I appealed this and sent proof and appeal was accepted. 4 and a half years...',
    rating: 2,
    color: 'bg-warning'
  }
];

const Reviews = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mb-4 mt-5">
        <h3 className="fw-bold mb-5">Recent reviews</h3>
      </div>
      <div className="row">
        {reviews.map((review, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className={`${review.color} text-white me-3`} style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    fontWeight: 'bold'
                  }}>
                    {review.initial}
                  </div>
                  <div>
                    <h6 className="mb-0">{review.name}</h6>
                    <small className="text-muted">reviewed {review.company}</small>
                  </div>
                </div>
                <p>{review.review}</p>
                <div className="d-flex">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-warning me-1" />
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-muted me-1" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
