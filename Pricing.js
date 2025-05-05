import React from 'react';
import './Pricing.css'; // Link to CSS file
import pri from './images/price2.jpg'; // Smoke image

const Pricing = () => {
  return (
    <div
      className="pricing-container"
      style={{
        backgroundImage: `url(${pri})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px'
      }}
    >
      <div className="pricing-content">
        <h2>Our Pricing</h2>
        <p>Here is the pricing information for our services:</p>
        <ul>
          <li>Restaurant Reservations - $30</li>
          <li>Event Catering - $150</li>
          <li>Private Dining - $100</li>
          <li>Takeaway Orders - $20</li>
          <li>Food Delivery - $10</li>
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
