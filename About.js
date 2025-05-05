import React from 'react';
import goo from './images/google.jpg'; // Your background image

const placesInfo = [
  {
    name: "Hunza Restaurants",
    address: "Main Karimabad Road, Hunza Valley, Gilgit-Baltistan",
    contact: "+92 345 1234567",
    email: "hunza@dining.pk",
    location: "https://maps.google.com/?q=Hunza+Restaurants"
  },
  {
    name: "Skardu Restaurants",
    address: "Shahrah-e-Quaid, Skardu, Gilgit-Baltistan",
    contact: "+92 344 7654321",
    email: "skardu@dining.pk",
    location: "https://maps.google.com/?q=Skardu+Restaurants"
  },
  {
    name: "Swat Restaurants",
    address: "Mingora Bypass Road, Swat, Khyber Pakhtunkhwa",
    contact: "+92 333 1122334",
    email: "swat@dining.pk",
    location: "https://maps.google.com/?q=Swat+Restaurants"
  },
  {
    name: "Murree Restaurants",
    address: "Mall Road, Murree, Punjab",
    contact: "+92 322 5566778",
    email: "murree@dining.pk",
    location: "https://maps.google.com/?q=Murree+Restaurants"
  },
  {
    name: "Karachi Restaurants",
    address: "Clifton Block 5, Karachi, Sindh",
    contact: "+92 300 9988776",
    email: "karachi@dining.pk",
    location: "https://maps.google.com/?q=Karachi+Restaurants"
  },
  {
    name: "Lahore Restaurants",
    address: "MM Alam Road, Gulberg III, Lahore, Punjab",
    contact: "+92 301 6655443",
    email: "lahore@dining.pk",
    location: "https://maps.google.com/?q=Lahore+Restaurants"
  }
];

const About = () => {
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
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '15px',
        padding: '30px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '2.5rem', color: '#00ffe5' }}>
          About Our Restaurants
        </h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '30px' }}>
          Welcome to our restaurant guide! We bring you the finest places to eat across Pakistan’s scenic regions.
          Whether you're in the mountains or by the coast, we aim to provide you with the best dining experience.
        </p>
        <div>
          {placesInfo.map((place, index) => (
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
              <h2 style={{ color: '#00ffe5' }}>{place.name}</h2>
              <p><strong>Address:</strong> {place.address}</p>
              <p><strong>Contact:</strong> {place.contact}</p>
              <p><strong>Email:</strong> {place.email}</p>
              <a
                href={place.location}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ffcc00', textDecoration: 'underline' }}
              >
                📍 View on Google Maps
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
