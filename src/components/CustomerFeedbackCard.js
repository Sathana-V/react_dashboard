import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './css/CustomerFeedback.css';

const CustomerFeedbackCard = ({ feedbacks }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i <= rating ? 'star-filled' : 'star-empty'}
        />
      );
    }
    return stars;
  };

  if (!Array.isArray(feedbacks)) {
    return <div>No feedbacks available.</div>;
  }

  return (
    <Card className="customer-feedback-card bg-dark text-light" style={{overflowY: 'none'}}>
      <Card.Body>
        <Card.Title className="card-title-new">Customer Feedback</Card.Title>
        <div className="feedback-list">
          {feedbacks.map((feedback, index) => (
            <div key={index} className="feedback-item">
              <div className="d-flex align-items-center mb-2">
                <Image src={feedback.profilePic} roundedCircle height="30" className="me-2" />
                <span>{feedback.customerName}</span>
              </div>
              <div className="stars mb-2">{renderStars(feedback.rating)}</div>
              <p className="review">{feedback.review}</p>
              {index < feedbacks.length - 1 && <hr className="divider" />}
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomerFeedbackCard;
