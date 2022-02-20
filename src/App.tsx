import React from 'react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from 'theme/theme';
import { Main } from 'app/main/Main';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Main />
      </Container>
    </ThemeProvider>
  );
};
