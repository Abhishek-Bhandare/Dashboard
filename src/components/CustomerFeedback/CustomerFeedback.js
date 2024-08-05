import React from 'react';
import './CustomerFeedback.css';

const CustomerFeedback = () => {
  return (
    <div className="customer-feedback">
      <h2>Customer's Feedback</h2>
      <div className="feedback-list">
        <div className="feedback-item">
          <h4>Jenny Wilson</h4>
          <p>⭐⭐⭐⭐⭐</p>
          <p>The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome...</p>
        </div>
        <div className="feedback-item">
          <h4>Dianne Russell</h4>
          <p>⭐⭐⭐⭐⭐</p>
          <p>We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.</p>
        </div>
        <div className="feedback-item">
          <h4>Devon Lane</h4>
          <p>⭐⭐⭐⭐⭐</p>
          <p>Normally we order wings, but theirs are lean meaty and tender, and the seasoning is spot on...</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
