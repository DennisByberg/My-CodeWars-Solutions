import { describe, expect, it } from 'vitest';
import { oddCount } from './oddCount';

describe(oddCount, () => {
  it('Should return the number of positive odd numbers below n', () => {
    expect(oddCount(7)).toBe(3);
    expect(oddCount(15)).toBe(7);
    expect(oddCount(15023)).toBe(7511);
  });
});
