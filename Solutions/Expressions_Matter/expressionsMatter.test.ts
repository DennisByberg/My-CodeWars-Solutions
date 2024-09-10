import { describe, expect, it } from 'vitest';
import { expressionsMatter } from './expressionsMatter';

describe(expressionsMatter, () => {
  it('Should return the largest number obtained after inserting the operators +, *, and parentheses ()', () => {
    expect(expressionsMatter(2, 1, 2)).toEqual(6);
  });
});
