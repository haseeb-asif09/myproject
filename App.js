import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './NavFo/Navbar';
import Banner from './Banner/Banner';
import Home from './Home';
import About from './About';
import Services from './Services';
import Pricing from './Pricing';
import Gallery from './Gallery';
import Pages from './Pages'; // ✅ Import Pages.js here
import Registration from './Registration'; // Import Registration.js here
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pages" element={<Pages />} /> {/* Route for Pages */}
          <Route path="/registration" element={<Registration />} /> {/* Route for Registration */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
