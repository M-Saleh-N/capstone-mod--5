import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/landingpage'; // Landing screen
import LoginPage from './pages/loginpage';     // Login screen

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route shows landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Login route */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
