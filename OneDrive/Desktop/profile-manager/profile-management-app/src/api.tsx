import axiosInstance from './hooks/axiosInstans';

const API_URL = process.env.REACT_APP_API_URL

export const saveProfile = async (profileData: any) => {
  try {
    const response = await axiosInstance.post('/profile', profileData);
    return response.data;
  } catch (error) {
    console.error('Error saving profile:', error);
    throw error; 
  }
};

export const updateProfile = async (id: number, profileData: any) => {
  try {
    const response = await axiosInstance.put(`${API_URL}/profile/${id}`, profileData);
    return response.data;
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
};


export const fetchProfile = async () => {
  const response = await axiosInstance.get(`${API_URL}/profile`);
  return response.data;
};


export const deleteProfile = async (id: number) => {
  try {
    await axiosInstance.delete(`${API_URL}/profile/${id}`);
    console.log('Profile deleted successfully');
  } catch (error) {
    console.error('Error deleting profile:', error);
    throw error;
  }
};
