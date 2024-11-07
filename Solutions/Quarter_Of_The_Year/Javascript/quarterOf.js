export function quarterOf(month) {
  let quarterOfYear;

  if (month >= 10) quarterOfYear = 4;
  else if (month >= 7) quarterOfYear = 3;
  else if (month >= 4) quarterOfYear = 2;
  else quarterOfYear = 1;

  return quarterOfYear;
}
