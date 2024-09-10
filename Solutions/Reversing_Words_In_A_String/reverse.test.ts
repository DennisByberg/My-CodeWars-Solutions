import { describe, expect, it } from 'vitest';
import { reverse } from './reverse';

describe(reverse, () => {
  it('Should reverse the words', () => {
    expect(reverse('My Name Is Dennis')).toBe('Dennis Is Name My');
    expect(reverse('This is so easy')).toBe('easy so is This');
    expect(reverse('')).toBe('');
    expect(reverse('CodeWars')).toBe('CodeWars');
  });
});
