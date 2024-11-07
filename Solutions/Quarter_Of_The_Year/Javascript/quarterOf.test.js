import { describe, expect, it } from 'vitest';
import { quarterOf } from './quarterOf';

describe(quarterOf, () => {
  it('Should pass basic tests', () => {
    expect(quarterOf(3)).toBe(1);
    expect(quarterOf(8)).toBe(3);
    expect(quarterOf(11)).toBe(4);
  });
});
