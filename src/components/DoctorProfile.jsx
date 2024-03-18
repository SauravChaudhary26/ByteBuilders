// DoctorProfile.jsx
import React from 'react';

const DoctorProfile = ({ doctor }) => {
  return (
    <div className="doctor-profile">
      <img src={doctor.profilePicture} alt={doctor.name} />
      <ul>
      <li><span>{doctor.name}</span></li>
      <li><span>{doctor.specialty}</span></li>
      <li><span>{doctor.Experience}</span></li>
      
      <li><span>{doctor.ContactNumber}</span></li>

      </ul>
    </div>
  );
};

export default DoctorProfile;
