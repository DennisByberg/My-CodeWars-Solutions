import { describe, expect, it } from "vitest";
import { getFirstValue } from "./getFirstValue";

describe(getFirstValue, () => {
  it("should return the first number in the array", () => {
    expect(getFirstValue([1, 2, 3])).toEqual(1);
    expect(getFirstValue([80, 5, 100])).toEqual(80);
    expect(getFirstValue([-500, 0, 50])).toEqual(-500);
  });
});
