import { describe, expect, it } from "vitest";
import { countSheep } from "./countSheep";

describe(countSheep, () => {
  it('should return a string with a sequence of "sheep" up to the given number', () => {
    expect(countSheep(1)).toBe("1 sheep...");
    expect(countSheep(2)).toBe("1 sheep...2 sheep...");
    expect(countSheep(3)).toBe("1 sheep...2 sheep...3 sheep...");
  });
});
