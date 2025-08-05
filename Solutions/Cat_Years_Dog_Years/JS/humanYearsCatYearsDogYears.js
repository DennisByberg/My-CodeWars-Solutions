export const humanYearsCatYearsDogYears = (humanYears) => {
  const FIRST_YEAR = 15;
  const SECOND_YEAR = 9;
  const CAT_ADDITIONAL_YEAR = 4;
  const DOG_ADDITIONAL_YEAR = 5;

  if (humanYears === 1) {
    return [humanYears, FIRST_YEAR, FIRST_YEAR];
  }

  const baseCatYears = FIRST_YEAR + SECOND_YEAR;
  const baseDogYears = FIRST_YEAR + SECOND_YEAR;

  const additionalYears = humanYears - 2;
  const catYears = baseCatYears + additionalYears * CAT_ADDITIONAL_YEAR;
  const dogYears = baseDogYears + additionalYears * DOG_ADDITIONAL_YEAR;

  return [humanYears, catYears, dogYears];
};
