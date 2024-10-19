import React, { useEffect } from 'react';
import ProfileDisplay from '../components/ProfileDisplay';
import Navbar from '../components/NavBar';
import { useProfile } from '../context/ProfileContext';
import { deleteProfile } from '../api';
import { ErrorMessages } from '../common/utils';


const ProfilePage: React.FC = () => {
  const { profile, setProfile } = useProfile();

  useEffect(() => {
    const fetchProfile = async () => {
      const localProfile = localStorage.getItem('profile');
      if (localProfile) {
        setProfile(JSON.parse(localProfile)); 
      } else {
        try {
          const response = await fetchProfile();
          
          setProfile(response);
          
        } catch (error) {
          console.error('Error fetching profile:', error);
      
        }
      }
    };

    fetchProfile();
  }, [setProfile]);

  const handleDeleteProfile = async () => {
    const confirmDelete = window.confirm(ErrorMessages?.DeleteProfileConfirmation);
    if (confirmDelete) {
      try {
        await deleteProfile(profile?.id);
        setProfile(null);
        localStorage.removeItem('profile');
        alert(ErrorMessages?.DeleteProfileSuccess);
      } catch (error) {
        console.error('Failed to delete profile:', error);
        alert(ErrorMessages.DeleteProfileError);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <ProfileDisplay profile={profile} onDelete={handleDeleteProfile} />
    </div>
  );
};

export default ProfilePage;
