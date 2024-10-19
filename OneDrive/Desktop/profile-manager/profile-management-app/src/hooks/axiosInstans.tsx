import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
});


export const setupAxiosInterceptors = (navigate: any) => {
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response?.status === 404) {
        navigate('/404'); 
      }
      return Promise.reject(error);
    }
  );
};

export default axiosInstance;
