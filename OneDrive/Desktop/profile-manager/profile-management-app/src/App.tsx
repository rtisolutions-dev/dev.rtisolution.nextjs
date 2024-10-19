import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ProfileProvider } from './context/ProfileContext';
import ProfileFormPage from './pages/ProfileFormPage';
import ProfilePage from './pages/ProfilePage';
import NotFound from './components/NotFound';
import { useNavigate } from 'react-router-dom';
import { setupAxiosInterceptors } from './hooks/axiosInstans';

const AxiosInterceptorSetup: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setupAxiosInterceptors(navigate);
  }, [navigate]);

  return null;
};

const App: React.FC = () => {
  return (
    <ProfileProvider>
      <Router>
        <AxiosInterceptorSetup />
        <Routes>
          <Route path="/profile-form" element={<ProfileFormPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/" element={<Navigate to="/profile" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ProfileProvider>
  );
};

export default App;
