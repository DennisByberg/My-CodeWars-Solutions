export function sumOfDifferences(arr: number[]): number {
  if (arr.length <= 1) return 0;

  return arr
    .sort((a, b) => b - a)
    .reduce((sum, num, i, arr) => (i < arr.length - 1 ? sum + num - arr[i + 1] : sum), 0);
}
