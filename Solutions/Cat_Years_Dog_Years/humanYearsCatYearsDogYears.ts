export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
  const FIRST_YEAR_IN_HUMAN_YEARS = 15;
  const SECOND_YEAR_IN_HUMAN_YEARS = 24;
  const ADDITIONAL_CAT_YEAR = 4;
  const ADDITIONAL_DOG_YEAR = 5;

  if (humanYears === 1) {
    return [humanYears, FIRST_YEAR_IN_HUMAN_YEARS, FIRST_YEAR_IN_HUMAN_YEARS];
  }

  if (humanYears === 2) {
    return [humanYears, SECOND_YEAR_IN_HUMAN_YEARS, SECOND_YEAR_IN_HUMAN_YEARS];
  }

  let catYear = SECOND_YEAR_IN_HUMAN_YEARS;
  let dogYear = SECOND_YEAR_IN_HUMAN_YEARS;

  for (let year = 2; year < humanYears; year++) {
    catYear += ADDITIONAL_CAT_YEAR;
    dogYear += ADDITIONAL_DOG_YEAR;
  }

  return [humanYears, catYear, dogYear];
}
