import { describe, expect, it } from 'vitest';
import { findMultiples } from './findMultiples';

describe(findMultiples, () => {
  it('Should return a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well.', () => {
    expect(findMultiples(5, 25)).toEqual([5, 10, 15, 20, 25]);
    expect(findMultiples(1, 2)).toEqual([1, 2]);
    expect(findMultiples(5, 7)).toEqual([5]);
    expect(findMultiples(4, 27)).toEqual([4, 8, 12, 16, 20, 24]);
    expect(findMultiples(11, 54)).toEqual([11, 22, 33, 44]);
  });
});
