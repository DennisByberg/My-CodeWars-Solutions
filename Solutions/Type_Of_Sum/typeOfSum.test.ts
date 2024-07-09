import { describe, expect, it } from "vitest";
import { typeOfSum } from "./typeOfSum";

describe(typeOfSum, () => {
  it("Should return the type of the sum", () => {
    expect(typeOfSum(12, 1)).toBe("number");
    expect(typeOfSum("d", 1)).toBe("string");
    expect(typeOfSum(1, "a")).toBe("string");
    expect(typeOfSum("dd", "")).toBe("string");
    expect(typeOfSum(true, 1)).toBe("number");
    expect(typeOfSum("s", false)).toBe("string");
    expect(typeOfSum(null, undefined)).toBe("number");
    expect(typeOfSum(null, false)).toBe("number");
  });
});
