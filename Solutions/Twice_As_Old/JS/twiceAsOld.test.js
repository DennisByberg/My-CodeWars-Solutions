import { describe, expect, it } from 'vitest';
import { twiceAsOld } from './twiceAsOld';

describe(twiceAsOld, () => {
  it('Calculates the number of years ago or in the future when the father was or will be twice as old as his son', () => {
    expect(twiceAsOld(36, 7)).toEqual(22);
    expect(twiceAsOld(55, 30)).toEqual(5);
    expect(twiceAsOld(42, 21)).toEqual(0);
    expect(twiceAsOld(22, 1)).toEqual(20);
    expect(twiceAsOld(29, 0)).toEqual(29);
  });
});
