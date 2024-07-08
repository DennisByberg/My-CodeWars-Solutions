import { describe, expect, it } from "vitest";
import { humanYearsCatYearsDogYears } from "./humanYearsCatYearsDogYears";

describe("humanYearsCatYearsDogYears function", () => {
  it("should return [1, 15, 15] for 1 human year", () => {
    expect(humanYearsCatYearsDogYears(1)).toEqual([1, 15, 15]);
  });

  it("should return [2, 24, 24] for 2 human years", () => {
    expect(humanYearsCatYearsDogYears(2)).toEqual([2, 24, 24]);
  });

  it("should return [10, 56, 64] for 10 human years", () => {
    expect(humanYearsCatYearsDogYears(10)).toEqual([10, 56, 64]);
  });
});
