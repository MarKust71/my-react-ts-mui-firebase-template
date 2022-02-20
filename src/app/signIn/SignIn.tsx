import React, { useReducer } from 'react';
import { Avatar, Box, Button, Container, Grid, TextField, Typography, useTheme } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

import { firebaseAuth } from 'api/firebase.config';
import { authReducer, userInitialState } from 'reducers/authReducer';

import { SignInProps } from './SignIn.types';
import { useStyles } from './SignIn.styles';

export const SignIn: React.FC<SignInProps> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [state] = useReducer(authReducer, userInitialState);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    const password = data.get('password') as string;

    if (email && password) {
      signInWithEmailAndPassword(firebaseAuth, email, password)
        .then((response) => console.log({ response }))
        .catch((error) => {
          console.log({ error });
        });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Link to="/">
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
        </Link>

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="#">
                <Typography variant="body2">Forgot password?</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/sign-up">
                <Typography variant="body2">{"Don't have an account? Sign up"}</Typography>
              </Link>
            </Grid>
          </Grid>{' '}
        </Box>
      </Box>
    </Container>
  );
};
