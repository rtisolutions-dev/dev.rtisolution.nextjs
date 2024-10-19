import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useProfile } from '../context/ProfileContext';

const Navbar: React.FC = () => {
  const { profile } = useProfile();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Profile Management
        </Typography>
     
        <Typography variant="body1" sx={{ marginRight: 2 }}>
            {profile?.name}
          </Typography>
      
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
