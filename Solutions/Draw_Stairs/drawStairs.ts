export function drawStairs(n: number): string {
  return Array.from({ length: n }, (_, i) => ' '.repeat(i) + 'I').join('\n');
}
