import { describe, expect, it } from 'vitest';
import { warnTheSheep } from './warnTheSheep';

describe(warnTheSheep, () => {
  it('Should warn when wolf is at the end', () => {
    expect(warnTheSheep(['sheep', 'sheep', 'wolf'])).toBe(
      'Pls go away and stop eating my sheep'
    );
  });

  it('Should warn the closest sheep when wolf is in the middle', () => {
    expect(warnTheSheep(['sheep', 'sheep', 'sheep', 'wolf', 'sheep'])).toBe(
      'Oi! Sheep number 1! You are about to be eaten by a wolf!'
    );
    expect(
      warnTheSheep([
        'sheep',
        'sheep',
        'sheep',
        'sheep',
        'sheep',
        'wolf',
        'sheep',
        'sheep',
      ])
    ).toBe('Oi! Sheep number 2! You are about to be eaten by a wolf!');
  });
});
