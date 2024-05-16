// EN: Create a function that finds the maximum range of a triangle's third edge,
// where the side lengths are all integers.

// SV: Skapa en funktion som hittar det maximala omfånget av en triangels tredje kant,
// där sidlängderna är alla heltal.

export function nextEdge(side1: number, side2: number): number {
  const maximumRangeOfThirdEdge = side1 + side2 - 1;

  return maximumRangeOfThirdEdge;
}
