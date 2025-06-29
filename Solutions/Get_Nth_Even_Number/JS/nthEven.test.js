import { describe, expect, it } from 'vitest';
import { nthEven } from './nthEven';

describe(nthEven, () => {
  it('should return the nth even number', () => {
    expect(nthEven(1)).to.equal(0);
    expect(nthEven(2)).to.equal(2);
    expect(nthEven(3)).to.equal(4);
    expect(nthEven(100)).to.equal(198);
    expect(nthEven(1298734)).to.equal(2597466);
  });
});
