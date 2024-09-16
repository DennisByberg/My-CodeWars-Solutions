import { describe, expect, it } from 'vitest';
import { updateLight } from './updateLight';

describe(updateLight, () => {
  it('Should return the next color in the traffic light', () => {
    expect(updateLight('green')).toBe('yellow');
    expect(updateLight('yellow')).toBe('red');
    expect(updateLight('red')).toBe('green');
  });
});
