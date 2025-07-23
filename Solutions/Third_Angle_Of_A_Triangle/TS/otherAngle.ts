export const otherAngle = (a: number, b: number): number => {
  const TOTAL_DEGREES_IN_TRIANGLE = 180;

  return TOTAL_DEGREES_IN_TRIANGLE - a - b;
};
