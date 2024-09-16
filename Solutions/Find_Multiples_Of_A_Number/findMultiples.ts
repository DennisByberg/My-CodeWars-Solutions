export function findMultiples(integer: number, limit: number): number[] {
  const numbersArray: number[] = [];

  for (let i = integer; i <= limit; i += integer) {
    numbersArray.push(i);
  }

  return numbersArray;
}
