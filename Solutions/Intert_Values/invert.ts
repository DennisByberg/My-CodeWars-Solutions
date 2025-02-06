export function invert(array: number[]): number[] {
  return array.map((num) => (num < 0 ? Math.abs(num) : -num));
}
