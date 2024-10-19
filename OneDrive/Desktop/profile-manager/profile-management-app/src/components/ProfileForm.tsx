import React, { useEffect } from 'react';
import { useProfile } from '../context/ProfileContext';
import { saveProfile, updateProfile } from '../api';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Typography,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ErrorMessages } from '../common/utils';


const ProfileForm: React.FC = () => {
  const { profile, setProfile } = useProfile();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required(ErrorMessages.NameRequired)
      .min(3, ErrorMessages.NameMinLength),
    email: Yup.string()
      .required(ErrorMessages.EmailRequired)
      .email(ErrorMessages.EmailInvalid),
    age: Yup.number()
      .nullable()
      .transform((value, originalValue) => (originalValue === '' ? null : value))
      .positive(ErrorMessages.AgePositive)
      .integer(ErrorMessages.AgeInteger)
      .typeError(ErrorMessages.AgeTypeError),
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: profile?.name || '',
      email: profile?.email || '',
      age: profile?.age || null,
    },
  });

  useEffect(() => {
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, [setProfile]);

  const onSubmit = async (data: any) => {
    try {
      let savedProfile;
      if (profile?.id) {
        savedProfile = await updateProfile(profile.id, data);
      } else {
        savedProfile = await saveProfile(data);
      }
      navigate('/profile');
      setProfile(savedProfile);
      localStorage.setItem('profile', JSON.stringify(savedProfile));
      alert(`Profile ${profile?.id ? 'updated' : 'saved'} successfully!`);
    } catch (error) {
      console.error('Error saving profile:', error);
      alert(ErrorMessages.SaveProfileError);
    }
  };

  return (
    <Container>
      <Typography variant="h5">
        {profile?.id ? 'Update Profile' : 'Create Profile'}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Name"
              variant="outlined"
              fullWidth
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
              margin="normal"
              required
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              fullWidth
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              margin="normal"
              required
            />
          )}
        />
        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Age (optional)"
              variant="outlined"
              fullWidth
              type="number"
              error={Boolean(errors.age)}
              helperText={errors.age?.message}
              margin="normal"
              onChange={(e) => {
                const value = e.target.value;
                field.onChange(value === '' ? null : Number(value));
              }}
            />
          )}
        />
        <Button variant="contained" color="primary" type="submit" style={{ marginTop: '16px' }}>
          Save Profile
        </Button>
      </form>
    </Container>
  );
};

export default ProfileForm;
