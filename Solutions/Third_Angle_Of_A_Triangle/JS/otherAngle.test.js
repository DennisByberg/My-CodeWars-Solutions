import { describe, expect, it } from 'vitest';
import { otherAngle } from './otherAngle';

describe(otherAngle, () => {
  it('Should return the 3rd angle of a triangle', () => {
    expect(otherAngle(30, 60)).toEqual(90);
    expect(otherAngle(60, 60)).toEqual(60);
    expect(otherAngle(43, 78)).toEqual(59);
    expect(otherAngle(10, 20)).toEqual(150);
  });
});
