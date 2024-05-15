import { describe, expect, it } from "vitest";
import { remainder } from "./returnTheRemainderFromTwoNumbers";

describe(remainder, () => {
  it("should correctly calculate the remainder of a division operation", () => {
    expect(remainder(1, 3)).toEqual(1);
    expect(remainder(3, 4)).toEqual(3);
    expect(remainder(-9, 45)).toEqual(-9);
    expect(remainder(5, 5)).toEqual(0);
  });
});
