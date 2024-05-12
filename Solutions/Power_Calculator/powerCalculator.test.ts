import { describe, expect, it } from "vitest";
import { circuitPower } from "./powerCalculator";

describe(circuitPower, () => {
  it("should return 0", () => {
    expect(circuitPower(230, 10)).toEqual(2300);
    expect(circuitPower(110, 3)).toEqual(330);
    expect(circuitPower(480, 20)).toEqual(9600);
  });
});
