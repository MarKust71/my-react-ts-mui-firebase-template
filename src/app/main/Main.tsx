import React from 'react';
import { Typography, useTheme } from '@mui/material';
import { Navigate } from 'react-router-dom';

import { MainProps } from './Main.types';
import { useStyles } from './Main.styles';

export const Main: React.FC<MainProps> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <Typography className={classes.wrapper}>My React Typescript Material-UI Firebase Template</Typography>
      <Navigate to="/sign-up" />
    </>
  );
};
