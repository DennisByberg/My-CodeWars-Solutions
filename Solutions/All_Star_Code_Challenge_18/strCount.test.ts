import { describe, expect, it } from 'vitest';
import { strCount } from './strCount';

describe(strCount, () => {
  it('Should return an integer of the count of occurrences the 2nd argument is found in the first one', () => {
    expect(strCount('Hello', 'o')).toEqual(1);
    expect(strCount('Hello', 'l')).toEqual(2);
    expect(strCount('Hello', 'h')).toEqual(1);
    expect(strCount('', 'h')).toEqual(0);
  });
});
