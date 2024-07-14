export const centuryFromYear = (year: number): number => {
  const YEARS_IN_CENTURY = 100;
  const century = Math.ceil(year / YEARS_IN_CENTURY);

  return century;
};
