import React, { useEffect, useReducer } from 'react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import { theme } from 'theme/theme';
import { Main } from 'app/main/Main';
import { authReducer, UserActionKind, userInitialState } from 'reducers/authReducer';

import { firebaseAuth } from './api/firebase.config';

export const App = () => {
  const [state, dispatch] = useReducer(authReducer, userInitialState);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        dispatch({
          type: UserActionKind.SET_USER,
          payload: {
            uid: user.uid,
            email: user.email,
          },
        });

        setTimeout(() => {
          signOut(firebaseAuth);
        }, 5000);
      } else {
        dispatch({
          type: UserActionKind.SET_USER,
          payload: {
            uid: null,
            email: null,
          },
        });

        console.log('nobody logged in');
      }
    });
  }, []);

  useEffect(() => {
    console.log('app:', { ...state });
  }, [state]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {!state.uid && <Main />}
      </Container>
    </ThemeProvider>
  );
};
