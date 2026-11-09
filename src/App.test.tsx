import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the site title and the current fact', () => {
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
    screen.getByRole('button', { name: /back to this (morning|afternoon)'s fact/i })
  ).toBeInTheDocument();
});

describe('fact schedule', () => {
  const { factIndexForSlot, factSlot, msUntilNextFactChange } = require('./lib/time');
  const { facts } = require('./facts');

  test('morning and afternoon of the same day show different facts', () => {
    const am = factSlot(new Date(2026, 10, 9, 9, 0));
    const pm = factSlot(new Date(2026, 10, 9, 15, 0));
    expect(pm).toBe(am + 1);
    expect(factSlot(new Date(2026, 10, 9, 11, 59, 59))).toBe(am);
    expect(factSlot(new Date(2026, 10, 9, 12, 0))).toBe(pm);
    expect(factSlot(new Date(2026, 10, 10, 0, 0))).toBe(pm + 1);
    expect(factIndexForSlot(am, facts.length)).not.toBe(
      factIndexForSlot(pm, facts.length)
    );
  });

  test('every fact is shown exactly once per full cycle', () => {
    const start = factSlot(new Date(2026, 10, 9, 9, 0));
    const seen = new Set<number>();
    for (let i = 0; i < facts.length; i++) {
      seen.add(factIndexForSlot(start + i, facts.length));
    }
    expect(seen.size).toBe(facts.length);
  });

  test('countdown targets the next noon or midnight', () => {
    expect(msUntilNextFactChange(new Date(2026, 10, 9, 9, 0))).toBe(3 * 3600_000);
    expect(msUntilNextFactChange(new Date(2026, 10, 9, 15, 0))).toBe(9 * 3600_000);
  });

  test('no duplicate facts in the pool', () => {
    const texts = facts.map((f: { text: string }) => f.text);
    expect(new Set(texts).size).toBe(texts.length);
  });
});
