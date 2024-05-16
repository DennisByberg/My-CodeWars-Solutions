import { describe, expect, it } from "vitest";
import { addition } from "./addition";

describe(addition, () => {
  it("should return the next number from the integer passed", () => {
    expect(addition(2)).toBe(3);
    expect(addition(-9)).toBe(-8);
    expect(addition(0)).toBe(1);
    expect(addition(999)).toBe(1000);
    expect(addition(73)).toBe(74);
  });
});
