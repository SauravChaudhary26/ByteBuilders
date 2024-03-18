import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Footer from './components/Footer';
import HamburgerMenu from './components/HamburgerMenu'; 

const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInDoctor, setLoggedInDoctor] = useState(null);

  // Mock doctor data for demonstration
  const doctorData = {
    name: 'Dr. John Doe',
    specialty: 'Cardiologist',
    profilePicture: '/path/to/john-doe.jpg',
    Experience: '5',
    ContactNumber:'+91-xxxxxxxxxx'
  };

  // Function to handle user login
  const handleLogin = () => {
    setIsLoggedIn(true);
    setLoggedInDoctor(doctorData);
  };

  // Function to handle user logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInDoctor(null);
  };

  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="services">
          <Services />
        </div>
      </main>
      <Footer />

      {/* Conditionally render HamburgerMenu component */}
      {isLoggedIn && <HamburgerMenu doctor={loggedInDoctor} />}
    </div>
  );
};

export default App;
