export function litres(time: number): number {
  const LITRES_PER_HOUR = 0.5;
  const totalLitres = Math.floor(time * LITRES_PER_HOUR);

  return totalLitres;
}
