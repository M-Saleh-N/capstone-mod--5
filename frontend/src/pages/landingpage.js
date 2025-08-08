import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './landingpage.css';

function LandingPage() {
  const navigate = useNavigate(); // Allows us to change pages programmatically

  // Function to go to the Login page when the button is clicked
  const goToLogin = () => {
    navigate('/login'); // Change URL to "/login"
  };

  return (
    <div className="landing-container">
      {/* Main heading */}
      <h1>Welcome to SmartTasker</h1>

      {/* Subheading */}
      <p>Your daily task and habit tracker made smarter.</p>

      {/* Button that sends users to the login page */}
      <button className="login-button" onClick={goToLogin}>
        Login
      </button>
    </div>
  );
}

export default LandingPage;
