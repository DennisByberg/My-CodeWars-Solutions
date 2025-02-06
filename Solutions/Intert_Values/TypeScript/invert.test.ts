import { describe, expect, it } from 'vitest';
import { invert } from './invert';

describe(invert, () => {
  it('should return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.', () => {
    expect(invert([-1, -2, -3, -4, -5])).toEqual([1, 2, 3, 4, 5]);
    expect(invert([1, 2, 3, 4, 5])).toEqual([-1, -2, -3, -4, -5]);
    expect(invert([1, -2, 3, -4, 5])).toEqual([-1, 2, -3, 4, -5]);
    expect(invert([])).toEqual([]);
  });
});
