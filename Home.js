import React from 'react';
import './Home.css'; // Make sure to create this CSS file for styling

// Import images (you can change the image paths later)
import back from './images/back.jpg'; // Background image
import img1 from './images/HunRes.jpg';
import img2 from './images/ResSka.jpg';
import img33 from './images/ResSwat.jpg';
import img44 from './images/mureRes.jpg';

// Restaurant data structure
const restaurantPlaces = [
  {
    name: "Hunza Restaurants",
    img: img1,
    description: "A beautiful place to dine with snowy peaks and scenic views."
  },
  {
    name: "Skardu Restaurants",
    img: img2,
    description: "A peaceful dining experience amidst mountain landscapes."
  },
  {
    name: "Swat Restaurants",
    img: img33,
    description: "Enjoy traditional dishes surrounded by green hills and rivers."
  },
  {
    name: "Murree Restaurants",
    img: img44,
    description: "Relax in a cool, pine forest environment with delicious meals."
  }
];

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${back})` }}>
      <h1 className="home-title">Welcome to the Best Dining Locations</h1>
      <p className="home-description">
        Discover the best restaurants in the most beautiful places in Pakistan.
      </p>

      <div className="places-grid">
        {/* Loop over restaurant data to display each place */}
        {restaurantPlaces.map((place, index) => (
          <div className="place-card" key={index}>
            <img src={place.img} alt={place.name} className="place-img" />
            <div className="place-overlay">
              <h3 className="place-name">{place.name}</h3>
              <p className="place-description">{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
