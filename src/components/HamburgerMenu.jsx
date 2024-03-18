// HamburgerMenu.jsx
import React, { useState } from 'react';
import DoctorProfile from './DoctorProfile';

const HamburgerMenu = ({ isLoggedIn, doctor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      {isOpen && (
        <div className="menu-content">
          {isLoggedIn ? (
            <DoctorProfile doctor={doctor} />
          ) : (
            <p>Please log in to view your profile.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
