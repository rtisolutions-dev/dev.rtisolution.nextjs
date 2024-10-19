import React from 'react';
import ProfileForm from '../components/ProfileForm';
import Navbar from '../components/NavBar';

const ProfileFormPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <ProfileForm />
    </div>
  );
};

export default ProfileFormPage;
