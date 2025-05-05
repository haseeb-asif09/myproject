import React from 'react';
import './Services.css'; // Import the newly created CSS file
import food from './images/ser.jpg'; // Import the image

const Services = () => {
  return (
    <div className="services-container" style={{ backgroundImage: `url(${food})` }}>
      <h2>Our Services</h2>
      <p>Here are the services we offer:</p>
      <ul className="services-list">
        <li>Restaurant Reservations</li>
        <li>Event Catering</li>
        <li>Private Dining</li>
        <li>Takeaway Orders</li>
        <li>Food Delivery</li>
      </ul>
    </div>
  );
};

export default Services;
