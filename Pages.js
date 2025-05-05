// src/Pages.js
import React from 'react';
import goo from './images/best.jpg'; // Background image
import './Pages.css';

const restaurants = [
  {
    name: "Hunza Restaurants",
    website: "https://hunzarestaurants.pk",
    location: "https://maps.google.com/?q=Hunza+Restaurants"
  },
  {
    name: "Skardu Restaurants",
    website: "https://skardurestaurants.pk",
    location: "https://maps.google.com/?q=Skardu+Restaurants"
  },
  {
    name: "Swat Restaurants",
    website: "https://swatdining.pk",
    location: "https://maps.google.com/?q=Swat+Restaurants"
  },
  {
    name: "Murree Restaurants",
    website: "https://murreerestaurants.pk",
    location: "https://maps.google.com/?q=Murree+Restaurants"
  },
  {
    name: "Karachi Restaurants",
    website: "https://karachidining.pk",
    location: "https://maps.google.com/?q=Karachi+Restaurants"
  },
  {
    name: "Lahore Restaurants",
    website: "https://lahorerestaurants.pk",
    location: "https://maps.google.com/?q=Lahore+Restaurants"
  }
];

const Pages = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${goo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '40px',
        color: '#fff',
        backdropFilter: 'blur(5px)'
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderRadius: '15px',
          padding: '30px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2.5rem', color: '#00ffe5' }}>
          Restaurant Websites
        </h1>

        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid #00ffe5',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '20px'
            }}
          >
            <h2 style={{ color: '#00ffe5' }}>{restaurant.name}</h2>
            <p>
              <strong>Website:</strong>{' '}
              <a href={restaurant.website} target="_blank" rel="noopener noreferrer" style={{ color: '#ffcc00' }}>
                {restaurant.website}
              </a>
            </p>
            <p>
              <a href={restaurant.location} target="_blank" rel="noopener noreferrer" style={{ color: '#ffcc00' }}>
                📍 View on Google Maps
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pages;
