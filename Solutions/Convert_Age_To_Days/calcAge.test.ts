import { describe, expect, it } from "vitest";
import { calcAge } from "./calcAge";

describe(calcAge, () => {
  it("should return the age in days (1y = 365d)", () => {
    expect(calcAge(1)).toEqual(365);
    expect(calcAge(0)).toEqual(0);
    expect(calcAge(20)).toEqual(7300);
    expect(calcAge(73)).toEqual(26645);
  });
});
