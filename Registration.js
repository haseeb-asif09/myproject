import React, { useState } from 'react';
import './Registration.css'; // Import the CSS file
import im from './images/vip.jpg'; // Import the image

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    bio: '',
    profilePicture: null,
    termsAccepted: false,
  });

  const [step, setStep] = useState(1);
  const [imagePreview, setImagePreview] = useState(null); // State to store image preview

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profilePicture: file });

      // Create a preview URL for the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the image preview
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to backend)
    console.log(formData);
  };

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="registration-container" style={{ backgroundImage: `url(${im})` }}>
      <div className="form-container">
        <h1>Sign Up</h1>
        <p>Create your account by following the steps</p>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Name */}
          {step === 1 && (
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
              <div className="button-container">
                <button type="button" onClick={nextStep}>Next</button>
              </div>
            </div>
          )}

          {/* Step 2: Email */}
          {step === 2 && (
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
              <div className="button-container">
                <button type="button" onClick={prevStep}>Back</button>
                <button type="button" onClick={nextStep}>Next</button>
              </div>
            </div>
          )}

          {/* Step 3: Password */}
          {step === 3 && (
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
              <div className="button-container">
                <button type="button" onClick={prevStep}>Back</button>
                <button type="button" onClick={nextStep}>Next</button>
              </div>
            </div>
          )}

          {/* Step 4: Gender */}
          {step === 4 && (
            <div>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <div className="button-container">
                <button type="button" onClick={prevStep}>Back</button>
                <button type="button" onClick={nextStep}>Next</button>
              </div>
            </div>
          )}

          {/* Step 5: Bio and Profile Picture */}
          {step === 5 && (
            <div>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell us a bit about yourself"
                required
              />
              <div>
                <input
                  type="file"
                  name="profilePicture"
                  onChange={handleFileChange}
                  accept="image/*"
                />
                {imagePreview && (
                  <div className="image-preview">
                    <img src={imagePreview} alt="Profile Preview" />
                  </div>
                )}
              </div>
              <div className="button-container">
                <button type="button" onClick={prevStep}>Back</button>
                <button type="submit">Submit</button>
              </div>
            </div>
          )}
        </form>

        <a href="/home" className="back-link">← Back to Home</a>
      </div>
    </div>
  );
};

export default Registration;
