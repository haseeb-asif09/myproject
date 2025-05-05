import React, { useState } from 'react';
import './Gallery.css'; // Optional: For additional styling
import all from './images/gal1.jpg';
import gal from './images/foood.jpg';
import gal2 from './images/pak.jpg';
import gal3 from './images/track.jpg';
import gal4 from './images/karachi.jpg';

// Image details
const imageDetails = [
  {
    src: gal,
    title: 'Food Platter',
    description: 'A beautifully arranged platter of traditional dishes.',
    location: 'Lahore, Pakistan',
    date: 'March 2025',
    category: 'Food Photography',
    photographer: 'Ali Khan',
  },
  {
    src: gal2,
    title: 'Pakistani Landscape',
    description: 'A breathtaking view of the hills in Pakistan.',
    location: 'Swat Valley',
    date: 'April 2025',
    category: 'Nature',
    photographer: 'Zara Ahmed',
  },
  {
    src: gal3,
    title: 'Mountain Trek',
    description: 'A serene view of the mountains on a trekking expedition.',
    location: 'Fairy Meadows',
    date: 'February 2025',
    category: 'Adventure',
    photographer: 'Usman Baloch',
  },
  {
    src: gal4,
    title: 'Karachi City',
    description: 'The vibrant skyline of Karachi during sunset.',
    location: 'Clifton, Karachi',
    date: 'January 2025',
    category: 'Urban Landscape',
    photographer: 'Ayesha Siddiqui',
  },
];

// Lightbox Component
const Lightbox = ({ image, onClose }) => (
  <div style={styles.lightboxOverlay}>
    <div style={styles.lightboxContent}>
      <img src={image.src} alt={image.title} style={styles.lightboxImage} />
      <div style={styles.lightboxDetails}>
        <h2>{image.title}</h2>
        <p><strong>Description:</strong> {image.description}</p>
        <p><strong>Location:</strong> {image.location}</p>
        <p><strong>Date:</strong> {image.date}</p>
        <p><strong>Category:</strong> {image.category}</p>
        <p><strong>Photographer:</strong> {image.photographer}</p>
      </div>
      <button onClick={onClose} style={styles.closeButton}>Close</button>
    </div>
  </div>
);

// Main Gallery Component
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div
      style={{
        backgroundImage: `url(${all})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: '40px',
        textShadow: '1px 1px 5px black',
      }}
    >
      <h2>Gallery</h2>

      <div style={styles.imageGrid}>
        {imageDetails.map((imageDetail, index) => (
          <div
            key={index}
            style={styles.imageCard}
            onClick={() => setSelectedImage(imageDetail)}
          >
            <img
              src={imageDetail.src}
              alt={`Gallery ${index + 1}`}
              style={styles.image}
            />
            <div style={styles.overlay}>
              <h3>{imageDetail.title}</h3>
              <p>{imageDetail.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

// CSS-in-JS Styles
const styles = {
  imageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  imageCard: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  overlay: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
  },
  lightboxOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  lightboxContent: {
    backgroundColor: '#222',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '800px',
    maxHeight: '90%',
    overflowY: 'auto',
    position: 'relative',
    textAlign: 'left',
  },
  lightboxImage: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  lightboxDetails: {
    color: 'white',
    lineHeight: '1.6',
  },
  closeButton: {
    position: 'absolute',
    bottom: '5px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#ff4d4d',
    border: 'none',
    color: 'white',
    fontSize: '0.85rem',
    padding: '4px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  
  
};

export default Gallery;
