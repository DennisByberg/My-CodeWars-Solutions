import { describe, expect, it } from "vitest";
import { triArea } from "./triArea";

describe(triArea, () => {
  it("should return the area of a triangle", () => {
    expect(triArea(3, 2)).toEqual(3);
    expect(triArea(7, 4)).toEqual(14);
    expect(triArea(10, 10)).toEqual(50);
    expect(triArea(12, 11)).toEqual(66);
  });
});
