import { describe, expect, it } from 'vitest';
import { drawStairs } from './drawStairs';

describe(drawStairs, () => {
  it('Should draw 1 stair', () => {
    expect(drawStairs(1)).toBe('I');
  });

  it('Should draw 3 stair', () => {
    expect(drawStairs(3)).toBe('I\n I\n  I');
  });

  it('Should draw 5 stair', () => {
    expect(drawStairs(5)).toBe('I\n I\n  I\n   I\n    I');
  });
});
