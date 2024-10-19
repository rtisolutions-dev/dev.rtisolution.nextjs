import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchProfile } from '../api';
import { ErrorMessages } from '../common/utils';

interface ProfileContextType {
  profile: any;
  setProfile: (profile: any) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<any>(() => {
    const localData = localStorage.getItem('profile');
    return localData ? JSON.parse(localData) : null;
  });

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await fetchProfile();
        setProfile(JSON.parse(data));
        localStorage.setItem('profile', JSON.stringify(data));
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    if (!profile) {
      loadProfile();
    }
  }, [profile]);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error(ErrorMessages.UserProfileError);
  }
  return context;
};
