import { describe, expect, it } from 'vitest';
import { litres } from './litres';

describe(litres, () => {
  it('Should return the number of litres x will drink, rounded to the smallest value', () => {
    expect(litres(3)).toEqual(1);
    expect(litres(6.7)).toEqual(3);
    expect(litres(11.8)).toEqual(5);
  });
});
