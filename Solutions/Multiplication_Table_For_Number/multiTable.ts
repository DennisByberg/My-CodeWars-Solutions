export function multiTable(number: number): string {
  const START_MULTIPLIER = 1;
  const END_MULTIPLIER = 10;
  let multiplicationTable = "";

  for (let i = START_MULTIPLIER; i <= END_MULTIPLIER; i++) {
    multiplicationTable += `${i} * ${number} = ${i * number}${i < END_MULTIPLIER ? "\n" : ""}`;
  }

  return multiplicationTable;
}
