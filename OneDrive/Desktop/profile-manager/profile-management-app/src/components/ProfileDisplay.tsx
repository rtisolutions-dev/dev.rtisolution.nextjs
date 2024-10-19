import React from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface ProfileDisplayProps {
  profile: {
    name: string;
    email: string;
    age?: number | null;
  } | null;
  onDelete: () => void;
}

const ProfileDisplay: React.FC<ProfileDisplayProps> = ({ profile, onDelete }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ backgroundColor: '#f5f5f5' }}
    >
      <Card variant="outlined" sx={{ minWidth: 1000, maxWidth: 1000, padding: 2 }} >
        <CardContent >
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Profile Details
          </Typography>
       
          {profile ? (
            <>
              <Typography variant="body1">Name: {profile.name}</Typography>
              <Typography variant="body1">Email: {profile.email}</Typography>
              <Typography variant="body1">Age: {profile.age !== null ? profile.age : 'N/A'}</Typography>
              <Box display="flex" marginTop={2}>
                <Button variant="contained" color="error" onClick={onDelete}>
                  Delete Profile
                </Button>
                
                <Button variant="contained" component={Link} sx={{ marginLeft: 2 }} to="/profile-form">
          Update Profile
        </Button>
              </Box>
            </>
          ) : (
            <>
            <Typography variant="body1" sx={{ marginRight: 2 }}>
            Welcome
          </Typography>
    
            <Typography variant="body1" color="error">
              No profile found. Please create one.
            </Typography>
            </>
          )}
          {!profile && (
            <Button variant="contained" color="primary" component={Link} sx={{ marginLeft: 2 }} to="/profile-form">
              Create Profile
            </Button>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfileDisplay;
