import React from 'react';
import { render, screen } from '@testing-library/react';

import { SignUp } from './SignUp';

describe('SignUp', () => {
  test('renders', () => {
    render(<SignUp />);
    const element = screen.getByText('SignUp');
    expect(element).toBeInTheDocument();
  });
});
