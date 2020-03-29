import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('expect link - movies', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/movies/i);
  expect(linkElement).toBeInTheDocument();
});
