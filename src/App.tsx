import React from 'react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from './theme/theme';
import { SignUp } from './app/signUp/SignUp';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <SignUp />
      </Container>
    </ThemeProvider>
  );
};
