import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the site title and a daily fact', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { level: 1, name: /eyeland/i })
  ).toBeInTheDocument();
  expect(screen.getByTestId('fact-text')).toBeInTheDocument();
  expect(screen.getByTestId('fact-text').textContent!.length).toBeGreaterThan(20);
});

test('peek button swaps in a different fact', () => {
  render(<App />);
  const before = screen.getByTestId('fact-text').textContent;
  userEvent.click(screen.getByRole('button', { name: /peek at another fact/i }));
  expect(screen.getByTestId('fact-text').textContent).not.toBe(before);
  expect(
    screen.getByRole('button', { name: /today's fact/i })
  ).toBeInTheDocument();
});
