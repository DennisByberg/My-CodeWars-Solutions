export const reverseSeq = (n: number): number[] => {
  return Array.from({ length: n }, (_, index) => n - index);
};
