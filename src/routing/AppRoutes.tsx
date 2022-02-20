import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';

import { SignUp } from 'app/signUp/SignUp';
import { App } from '../App';
import { SignIn } from 'app/signIn/SignIn';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};
