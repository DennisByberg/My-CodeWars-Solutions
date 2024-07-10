export const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
  const sumOfFirstArray = arr1.reduce((acc, current) => acc + current, 0);
  const sumOfSecondArray = arr2.reduce((acc, current) => acc + current, 0);

  return sumOfFirstArray + sumOfSecondArray;
};
