export function strCount(str: string, letter: string): number {
  let counter = 0;

  for (const letterInStr of str)
    letterInStr.toLowerCase() === letter.toLowerCase() && counter++;

  return counter;
}
