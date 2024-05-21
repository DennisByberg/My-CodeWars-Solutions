import { describe, expect, it } from "vitest";
import { sumOfDifferences } from "./sumOfDifferences";

describe(sumOfDifferences, () => {
  it("should sum the differences between consecutive pairs in the array in descending order.", () => {
    expect(sumOfDifferences([1, 2, 10])).toEqual(9);
    expect(sumOfDifferences([-3, -2, -1])).toEqual(2);
  });
});
