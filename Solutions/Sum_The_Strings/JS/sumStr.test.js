import { describe, expect, it } from 'vitest';
import { sumStr } from './sumStr';

describe(sumStr, () => {
  it('Should return the sum of two string numbers, defaulting to 0 for invalid inputs', () => {
    expect(sumStr('4', '5')).toBe('9');
    expect(sumStr('34', '5')).toBe('39');
    expect(sumStr('', '')).toBe('0');
    expect(sumStr('2', '')).toBe('2');
    expect(sumStr('-5', '3')).toBe('-2');
  });
});
