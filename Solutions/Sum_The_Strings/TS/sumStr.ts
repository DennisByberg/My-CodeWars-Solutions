export function sumStr(a: string, b: string): string {
  const num1 = isNaN(parseInt(a)) ? 0 : parseInt(a);
  const num2 = isNaN(parseInt(b)) ? 0 : parseInt(b);
  const sum = num1 + num2;

  return sum.toString();
}
