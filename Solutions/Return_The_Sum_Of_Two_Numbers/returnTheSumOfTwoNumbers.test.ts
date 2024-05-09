import { describe, expect, it } from "vitest";
import { addition } from "./returnTheSumOfTwoNumbers";

describe(addition, () => {
  it("should return 5 when the inputs are 3 and 2", () => {
    expect(addition(3, 2)).toEqual(5);
  });

  it("should return -9 when the inputs are -3 and -6", () => {
    expect(addition(-3, -6)).toEqual(-9);
  });

  it("should return 20 when the inputs are 10 and 10", () => {
    expect(addition(10, 10)).toEqual(20);
  });
});
